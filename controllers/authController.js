const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { User, Role } = require("../models");
const { responseMessages } = require("../shared/constants");

const {
  INVALID_ROLE,
  USER_NOT_FOUND,
  USER_ALREADY_EXIST,
  INVALID_CREDENTIALS,
  USER_REGISTERED_SUCCESSFULLY,
} = responseMessages;

exports.signUp = async (req, res) => {
  const { email, username, password, roleId } = req.body;

  try {
    const role = await Role.findByPk(roleId);
    if (!role || !role.isPublic)
      return res.status(404).json({ message: INVALID_ROLE });

    const hashedPassword = await bcrypt.hash(password, 10);

    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: {
        username,
        password: hashedPassword,
      },
    });

    if (!created) return res.status(409).json({ message: USER_ALREADY_EXIST });

    await user.addRole(role);

    res.status(201).json({ message: USER_REGISTERED_SUCCESSFULLY });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.logIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(404).json({ message: USER_NOT_FOUND });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: INVALID_CREDENTIALS });

    const accessToken = jwt.sign(
      { id: user.id },
      process.env.JWT_ACCESS_SECRET_KEY,
      {
        expiresIn: "5m",
      }
    );

    const refreshToken = jwt.sign(
      { id: user.id },
      process.env.JWT_REFRESH_SECRET_KEY,
      { expiresIn: "7d" }
    );

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: "Lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({ accessToken });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
