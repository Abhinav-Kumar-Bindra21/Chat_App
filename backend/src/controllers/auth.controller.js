import User from "../models/User.js";
import { validateUser } from "../utils/validator.js";
import bcrybt from "bcrypt";
import { generateToken } from "../utils/generateToken.js";

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
      generateToken(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        success: true,
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ success: false, message: "Invalid user data" });
    }
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
