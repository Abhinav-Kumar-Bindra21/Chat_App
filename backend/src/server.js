import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth.route.js";
import path from "path";
import { connectDb } from "./configs/db.js";
import cookieParser from "cookie-parser";
import messageRouter from "./routes/message.route.js";
import cors from "cors";

dotenv.config();
const app = express();
const __dirname = path.resolve();

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/messages", messageRouter);

const PORT = process.env.PORT;

// make ready for deployment

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get(/.*/, (_, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}

connectDb();
app.listen(PORT, () => {
  console.log("Server is started");
});
