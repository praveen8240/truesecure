const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Sign up
exports.signup = async (req, res) => {
  const { email, password, name, phonenumber} = req.body;
  try {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({success:false, message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        phonenumber
      },
    });

    res.status(201).json({success:true, message: "User created successfully" });
  } catch (error) {
    res.status(500).json({success:false, message: "Internal server error" });
  }
};

// Login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(400).json({success:false, message: "Invalid email or password" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({success:false, message: "Invalid email or password" });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);

    // Set cookie
    res.cookie("token", token, { httpOnly: true });

    res.status(200).json({success:true, message: "Logged in successfully", token });
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ success:false,message: "Internal server error" });
  }
};

// Logout
exports.logout = (req, res) => {
  console.log("logout")
  res.clearCookie("token");
  res.status(200).json({success:true, message: "Logged out successfully" });
};

// Status
exports.status = async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(200).json({ success: false, message: "No token provided" });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find the user based on the userId in the token
    const user = await prisma.user.findUnique({ where: { id: decoded.userId } });

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    console.log("asdfa",user)
    res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(401).json({ success: false, message: "Invalid or expired token" });
  }
};
