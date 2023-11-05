const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const ModelUser = require("../models/schemma");

async function ModifyPassword(password) {
  const hash = await bcrypt.hash(password, 10);
  return hash;
}

const SignUp = async (req, res) => {
  const { username, email, password, phone } = req.body;
  console.log(req.body)

  try {
    const check_email = await ModelUser.findOne({ email });
    if (check_email) {
      return res.status(400).json({ msg: "Email is already taken", auth: false });
    } else {
      const hashedPassword = await ModifyPassword(password);
      const newUser = new ModelUser({
        username,
        email,
        password: hashedPassword,
        phone,
      });

      await newUser.save();

    


      res.status(201).json({ msg: "Signup successful", auth: true });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  SignUp
};
