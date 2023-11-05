const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const ModelUser = require('../models/schemma');

// Function to issue a JWT token upon successful login
const issueToken = (user) => {
  return jwt.sign({ email: user.email }, 'HelloWOrld', { expiresIn: '1h' });
};

const Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await ModelUser.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Authentication failed' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Authentication failed' });
    }


    const token = issueToken(user);
const username = user.username
    res.status(200).json({ message: 'Login successful', auth: true, token ,username});
  } catch (error) {
    res.status(500).json(error);
  }
};



module.exports = Login