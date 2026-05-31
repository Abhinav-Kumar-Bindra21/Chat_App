import express from "express";
import { signup, login, logout, updateProfile, getUser } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";

const authRouter = express.Router();

authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.put("/update-profile", protectRoute, updateProfile);

authRouter.get("/check", protectRoute, getUser);

export default authRouter;
