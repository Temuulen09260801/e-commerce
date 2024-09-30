import express, { Request, Response } from "express";
import { Resend } from "resend";
import dotenv from "dotenv";
import cors from "cors";
import nodemailer from "nodemailer";
dotenv.config();

import authRoutes from "./routes/auth-route";

import { generateHtmlTemplate } from "./utils/generateHtmlTemplate";
import { connectDB } from "./config/db";

const PORT = process.env.PORT || "";
const MONGO_URL = process.env.MONGO_URL || "";

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);

app.get("/", async (req: Request, res: Response) => {
  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["temuulen09260801@gmail.com"],
    subject: "hello world",
    html: generateHtmlTemplate("1000"),
  });
  if (error) {
    console.error("email_err", { error });
  }
  res.send("Welcome E-Eommerce API Server");
});

connectDB(MONGO_URL);

app.listen(PORT, () => {
  console.log(`Server localhost:${PORT}Дээр аслаа`);
});
