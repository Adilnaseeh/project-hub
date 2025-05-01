const bcrypt = require('bcrypt');
const { User } = require('../models');
require('dotenv').config();

// SIGNUP
exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // Remove password from response
    const { password: _, ...userData } = newUser.toJSON();

    res.status(201).json({
      message: 'User signed up successfully',
      user: userData,
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// LOGIN
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

  
    // Remove password from user response
    const { password: _, ...userData } = user.toJSON();

    res.status(200).json({
      message: 'Login successful',
      token,
      user: userData,
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

