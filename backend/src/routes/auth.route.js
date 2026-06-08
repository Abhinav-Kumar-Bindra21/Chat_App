import express from "express";
import { signup, login, logout, updateProfile, getUser, verifyEmail } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";
import { arcjetProtection } from "../middleware/arcjet.middleware.js";

const authRouter = express.Router();

authRouter.use(arcjetProtection);

authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.put("/update-profile", protectRoute, updateProfile);

authRouter.get("/check", protectRoute, getUser);
authRouter.post("/verify-email", protectRoute, verifyEmail);

export default authRouter;
