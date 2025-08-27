const bcrypt = require("bcryptjs");

const { User, Role } = require("../models");
const { responseMessages } = require("../shared/constants");

const { INVALID_ROLE, USER_ALREADY_EXIST, USER_REGISTERED_SUCCESSFULLY } =
  responseMessages;

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
