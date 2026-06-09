import User from "../models/User.js";
import { validateUser } from "../utils/validator.js";
import bcrybt from "bcrypt";
import { generateToken } from "../utils/generateToken.js";
import {
  sendVerificationEmail,
  sendWelcomeEmail,
  sendPasswordResetEmail,
  sendResetSuccessEmail,
} from "../emails/emailHandlers.js";
import cloudinary from "../configs/cloudinary.js";
import { generateVerificationCode } from "../utils/generateVerificationCode.js";
import crypto from "crypto";

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
    const verificationCode = generateVerificationCode();

    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
      verificationToken: verificationCode,
      verificationExpiresAt: Date.now() + 24 * 60 * 60 * 1000,
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

      //send a verification email

      try {
        await sendVerificationEmail(newUser.email, newUser.verificationToken, process.env.CLIENT_URL);
      } catch (error) {
        console.log("Failed to send verification email:", error);
      }
    } else {
      res.status(400).json({ success: false, message: "Invalid user data" });
    }
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const verifyEmail = async (req, res) => {
  const { code } = req.body;
  try {
    const user = await User.findOne({
      verificationToken: code,
      verificationExpiresAt: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ success: false, message: "Invalid or expired verification code" });
    }

    user.isVerified = true;
    user.verificationToken = undefined;
    user.verificationExpiresAt = undefined;

    await user.save();

    await sendWelcomeEmail(user.email, user.fullName, process.env.CLIENT_URL);

    res
      .status(200)
      .json({ success: true, message: "Email verified successfully", user: { ...user._doc, password: undefined } });
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

    const userId = req.user._id;
    const uploadResponse = await cloudinary.uploader.upload(profilePic);

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { profilePic: uploadResponse.secure_url },
      { new: true },
    ).select("-password");

    res.status(200).json({ success: true, message: "Profile pic is updated", updatedUser });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const getUser = (req, res) => {
  res.status(200).json(req.user);
};

export const forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ success: false, message: "User not found" });
    }

    const resetToken = crypto.randomBytes(20).toString("hex");
    const resetTokenExpiresAt = new Date(Date.now() + 1 * 60 * 60 * 1000); // 1 hours

    user.resetPasswordToken = resetToken;
    user.resetPasswordExpiresAt = resetTokenExpiresAt;

    await user.save();

    //send a forgot email
    await sendPasswordResetEmail(user.email, `${process.env.CLIENT_URL}/reset-password/${resetToken}`);

    res.status(200).json({ success: true, message: "Password reset link sent to your email" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const resetPassword = async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpiresAt: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ success: false, message: "Invalid or expired reset token" });
    }

    const salt = await bcrybt.genSalt(10);
    const hashedPassword = await bcrybt.hash(password, salt);

    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpiresAt = undefined;
    await user.save();

    // Send resetpassword successfull email

    await sendResetSuccessEmail(user.email);

    res.status(200).json({ success: true, message: "Password reset successful" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
