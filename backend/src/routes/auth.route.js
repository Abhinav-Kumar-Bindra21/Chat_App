import express from "express";

const authRouter = express.Router();

authRouter.get("/", function (req, res) {
  res.send("Hiii boss");
});

export default authRouter;
