import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth.route.js";
import path from "path";
import { connectDb } from "./configs/db.js";

dotenv.config();
const app = express();
const __dirname = path.resolve();

app.use(express.json());
// app.use(cookie-parser())

app.use("/api/auth", authRouter);

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
