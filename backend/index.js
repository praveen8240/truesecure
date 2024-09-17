const express = require("express");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const cors= require('cors');
const authRoutes = require("./routes/authRouter");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/auth", authRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
