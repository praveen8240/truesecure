const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Sign up
exports.signup = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    // Generate JWT token
    const token = jwt.sign({ userId: newUser.id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    // Set cookie
    res.cookie("token", token, { httpOnly: true });

    res.status(201).json({ message: "User created successfully", token });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    // Set cookie
    res.cookie("token", token, { httpOnly: true });

    res.status(200).json({ message: "Logged in successfully", token });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Logout
exports.logout = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Logged out successfully" });
};
