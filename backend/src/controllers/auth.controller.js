import User from "../models/User.js";
import { validateUser } from "../utils/validator.js";
import bcrybt from "bcrypt";
import { generateToken } from "../utils/generateToken.js";
import { sendWelcomeEmail } from "../emails/emailHandlers.js";
import cloudinary from "../configs/cloudinary.js";

export const signup = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    validateUser(req.body);

    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ success: false, message: "User already exits !!" });
    }

    const salt = await bcrybt.genSalt(10);
    const hashedPassword = await bcrybt.hash(password, salt);

    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
    });

    if (newUser) {
      await newUser.save();
      generateToken(newUser._id, res);

      res.status(201).json({
        success: true,
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        profilePic: newUser.profilePic,
      });

      //send a welcome email

      try {
        await sendWelcomeEmail(newUser.email, newUser.fullName, process.env.CLIENT_URL);
      } catch (error) {
        console.log("Failed to send welcome email:", error);
      }
    } else {
      res.status(400).json({ success: false, message: "Invalid user data" });
    }
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: "All fields must be field" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: "Invaild Credentials" });
    }

    const isPassword = await bcrybt.compare(password, user.password);

    if (!isPassword) {
      return res.status(400).json({ success: false, message: "Invaild Credentials" });
    }

    generateToken(user._id, res);
    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      profilePic: user.profilePic,
    });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

export const logout = (req, res) => {
  res.cookie("jwt", "", { maxAge: 0 });
  res.status(200).json({ message: false, message: "Logged out successfully" });
};

export const updateProfile = async (req, res) => {
  try {
    const { profilePic } = req.body;

    if (!profilePic) {
      return res.status(400).json({ success: false, message: "Profile pic is required" });
    }

    const user = req.user._id;
    const uploadResponse = await cloudinary.uploader(profilePic);

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { profilePic: uploadResponse.secure_url },
      { new: true },
    ).select("-password");

    res.status(200).json({ success: true, message: "Profile pic is updated", updateUser });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const getUser = (req, res) => {
  res.status(200).json(req.user);
};
