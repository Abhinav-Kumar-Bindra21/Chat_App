import { resendClient, sender } from "../configs/resend.js";
import {
  createWelcomeEmailTemplate,
  VERIFICATION_EMAIL_TEMPLATE,
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
} from "./emailTemplate.js";

export const sendWelcomeEmail = async (email, name, clientURL) => {
  const { data, error } = await resendClient.emails.send({
    from: `${sender.name} <${sender.email}>`,
    to: email,
    subject: "Welcome to Chat_App",
    html: createWelcomeEmailTemplate(name, clientURL),
  });

  if (error) {
    console.log("Error sending welcome email:");
    throw new Error("Failed to send welcome email");
  }

  console.log("Welcome Email sent successfully", data);
  return data;
};

export const sendVerificationEmail = async (email, verificationCode) => {
  const { data, error } = await resendClient.emails.send({
    from: `${sender.name} <${sender.email}>`,
    to: email,
    subject: "Verify your email",
    html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationCode),
  });

  if (error) {
    console.log("Error sending in verify email:");
    throw new Error("Failed to send verify email");
  }

  console.log("Verify Email sent successfully", data);
  return data;
};

export const sendPasswordResetEmail = async (email, resetURL) => {
  const { data, error } = await resendClient.emails.send({
    from: `${sender.name} <${sender.email}>`,
    to: email,
    subject: "Reset Your Password",
    html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
  });

  if (error) {
    console.log("Error sending password reset email:");
    throw new Error("Error sending password reset email");
  }

  console.log("Reset password Email sent successfully", data);
  return data;
};

export const sendResetSuccessEmail = async (email) => {
  const { data, error } = await resendClient.emails.send({
    from: `${sender.name} <${sender.email}>`,
    to: email,
    subject: "Password Reset Successful",
    html: PASSWORD_RESET_SUCCESS_TEMPLATE,
  });

  if (error) {
    console.log("Error sending password reset success email: ");
    throw new Error("Error sending password reset success email: ");
  }

  console.log("Reset password success Email sent successfully", data);
  return data;
};
