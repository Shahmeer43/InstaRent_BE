const { User } = require("../models");

exports.signUp = async (req, res) => {
  try {
    const [user, created] = await User.findOrCreate({
      where: { email: req.body.email },
      defaults: {
        username: req.body.username,
        password: req.body.password,
      },
    });
    if (created) {
      res.status(201).json({ message: "User created", user });
    } else {
      res.status(200).json({ message: "User already exists", user });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
