import User from "../models/User.js";
import { validateUser } from "../utils/validator.js";
import bcrybt from "bcrypt";
import { generateToken } from "../utils/generateToken.js";
import { sendWelcomeEmail } from "../emails/emailHandlers.js";

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
