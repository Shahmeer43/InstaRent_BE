const { User } = require("../models");
const { responseMessages } = require("../shared/constants");

const { USER_ALREADY_EXIST, USER_REGISTERED_SUCCESSFULLY } = responseMessages;

exports.signUp = async (req, res) => {
  const { email, username, password } = req.body;
  try {
    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: {
        username,
        password,
      },
    });
    if (created) {
      res.status(201).json({ message: USER_REGISTERED_SUCCESSFULLY });
    } else {
      res.status(409).json({ message: USER_ALREADY_EXIST });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
