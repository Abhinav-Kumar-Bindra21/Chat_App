export function createWelcomeEmailTemplate(name, clientURL) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Messenger</title>
  </head>
  <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
    <div style="background:  #36D1DC; padding: 30px; text-align: center; border-radius: 12px 12px 0 0;">
      <img src="https://img.freepik.com/free-vector/hand-drawn-message-element-vector-cute-sticker_53876-118344.jpg?t=st=1741295028~exp=1741298628~hmac=0d076f885d7095f0b5bc8d34136cd6d64749455f8cb5f29a924281bafc11b96c&w=1480" alt="Messenger Logo" style="width: 80px; height: 80px; margin-bottom: 20px; border-radius: 50%; background-color: white; padding: 10px;">
      <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 500;">Welcome to Messenger!</h1>
    </div>
    <div style="background-color: #ffffff; padding: 35px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
      <p style="font-size: 18px; color: #5B86E5;"><strong>Hello ${name},</strong></p>
      <p>We're excited to have you join our messaging platform! Messenger connects you with friends, family, and colleagues in real-time, no matter where they are.</p>
      
      <div style="background-color: #f8f9fa; padding: 25px; border-radius: 10px; margin: 25px 0; border-left: 4px solid #36D1DC;">
        <p style="font-size: 16px; margin: 0 0 15px 0;"><strong>Get started in just a few steps:</strong></p>
        <ul style="padding-left: 20px; margin: 0;">
          <li style="margin-bottom: 10px;">Set up your profile picture</li>
          <li style="margin-bottom: 10px;">Find and add your contacts</li>
          <li style="margin-bottom: 10px;">Start a conversation</li>
          <li style="margin-bottom: 0;">Share photos, videos, and more</li>
        </ul>
      </div>
      
      <div style="text-align: center; margin: 30px 0;">
        <a href=${clientURL} style="background: #5B86E5; color: white; text-decoration: none; padding: 12px 30px; border-radius: 50px; font-weight: 500; display: inline-block;">Open Messenger</a>
      </div>
      
      <p style="margin-bottom: 5px;">If you need any help or have questions, we're always here to assist you.</p>
      <p style="margin-top: 0;">Happy messaging!</p>
      
      <p style="margin-top: 25px; margin-bottom: 0;">Best regards,<br>The Messenger Team</p>
    </div>
    
    <div style="text-align: center; padding: 20px; color: #999; font-size: 12px;">
      <p>© 2025 Messenger. All rights reserved.</p>
      <p>
        <a href="#" style="color: #5B86E5; text-decoration: none; margin: 0 10px;">Privacy Policy</a>
        <a href="#" style="color: #5B86E5; text-decoration: none; margin: 0 10px;">Terms of Service</a>
        <a href="#" style="color: #5B86E5; text-decoration: none; margin: 0 10px;">Contact Us</a>
      </p>
    </div>
  </body>
  </html>
  `;
}

export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Your Email</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #1E293B; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #F0F9FF;">

  <div style=" background-color: #2563EB;; padding: 30px; text-align: center; border-radius: 12px 12px 0 0;">
    <h1 style="color: white; margin: 0; font-size: 28px;">
      Verify Your Email
    </h1>
  </div>

  <div style="background-color: white; padding: 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 12px rgba(37, 99, 235, 0.15);">
    
    <p>Hello,</p>

    <p>
      Thank you for signing up! Please use the verification code below to complete your registration.
    </p>

    <div style="text-align: center; margin: 35px 0;">
      <span style="
        display: inline-block;
        background: linear-gradient(135deg, #DBEAFE, #BFDBFE);
        color: #2563EB;
        font-size: 34px;
        font-weight: bold;
        letter-spacing: 8px;
        padding: 15px 25px;
        border-radius: 12px;
        border: 2px solid #93C5FD;
      ">
        {verificationCode}
      </span>
    </div>

    <p>
      Enter this code on the verification page to activate your account.
    </p>

    <div style="
      background-color: #EFF6FF;
      border-left: 4px solid #3B82F6;
      padding: 12px;
      border-radius: 6px;
      margin: 20px 0;
    ">
      ⏳ This code will expire in <strong>15 minutes</strong> for security reasons.
    </div>

    <p>
      If you didn't create an account with us, you can safely ignore this email.
    </p>

    <p>
      Best regards,<br>
      <strong>Your App Team</strong>
    </p>

  </div>

  <div style="text-align: center; margin-top: 20px; color: #64748B; font-size: 13px;">
    <p>
      This is an automated message. Please do not reply to this email.
    </p>
  </div>

</body>
</html>
`;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset Successful</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #1E293B; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #F0F9FF;">

  <div style="background: linear-gradient(135deg, #2563EB, #60A5FA); padding: 30px; text-align: center; border-radius: 12px 12px 0 0;">
    <h1 style="color: white; margin: 0; font-size: 28px;">
      Password Reset Successful
    </h1>
  </div>

  <div style="background-color: white; padding: 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 12px rgba(37, 99, 235, 0.15);">

    <p>Hello,</p>

    <p>
      We're writing to confirm that your password has been successfully reset.
    </p>

    <div style="text-align: center; margin: 35px 0;">
      <div style="
        background: linear-gradient(135deg, #2563EB, #60A5FA);
        color: white;
        width: 70px;
        height: 70px;
        line-height: 70px;
        border-radius: 50%;
        display: inline-block;
        font-size: 36px;
        font-weight: bold;
        box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
      ">
        ✓
      </div>
    </div>

    <div style="
      background-color: #EFF6FF;
      border-left: 4px solid #3B82F6;
      padding: 15px;
      border-radius: 6px;
      margin: 20px 0;
    ">
      🔒 Your account password has been updated successfully.
    </div>

    <p>
      If you did not initiate this password reset, please contact our support team immediately and secure your account.
    </p>

    <p>
      For better security, we recommend:
    </p>

    <ul style="padding-left: 20px; color: #334155;">
      <li>Use a strong, unique password</li>
      <li>Enable two-factor authentication (2FA)</li>
      <li>Avoid reusing passwords across multiple websites</li>
      <li>Keep your recovery email up to date</li>
    </ul>

    <p>
      Thank you for helping us keep your account secure.
    </p>

    <p>
      Best regards,<br>
      <strong>Your App Team</strong>
    </p>

  </div>

  <div style="text-align: center; margin-top: 20px; color: #64748B; font-size: 13px;">
    <p>
      This is an automated message. Please do not reply to this email.
    </p>
  </div>

</body>
</html>
`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Your Password</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #1E293B; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #F0F9FF;">

  <div style="background: linear-gradient(135deg, #2563EB, #60A5FA); padding: 30px; text-align: center; border-radius: 12px 12px 0 0;">
    <h1 style="color: white; margin: 0; font-size: 28px;">
      Password Reset
    </h1>
  </div>

  <div style="background-color: white; padding: 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 12px rgba(37, 99, 235, 0.15);">

    <p>Hello,</p>

    <p>
      We received a request to reset your password. If you didn't make this request, you can safely ignore this email.
    </p>

    <div style="
      background-color: #EFF6FF;
      border-left: 4px solid #3B82F6;
      padding: 15px;
      border-radius: 6px;
      margin: 20px 0;
    ">
      🔐 To continue, click the button below to create a new password.
    </div>

    <div style="text-align: center; margin: 35px 0;">
      <a
        href="{resetURL}"
        style="
          display: inline-block;
          background: linear-gradient(135deg, #2563EB, #60A5FA);
          color: white;
          padding: 14px 28px;
          text-decoration: none;
          border-radius: 10px;
          font-weight: bold;
          font-size: 16px;
          box-shadow: 0 4px 10px rgba(37, 99, 235, 0.25);
        "
      >
        Reset Password
      </a>
    </div>

    <div style="
      background-color: #F8FAFC;
      border: 1px solid #E2E8F0;
      padding: 15px;
      border-radius: 8px;
      margin-top: 20px;
    ">
      ⏳ This password reset link will expire in <strong>1 hour</strong> for security reasons.
    </div>

    <p style="margin-top: 25px;">
      If you continue experiencing issues, please contact our support team.
    </p>

    <p>
      Best regards,<br>
      <strong>Your App Team</strong>
    </p>

  </div>

  <div style="text-align: center; margin-top: 20px; color: #64748B; font-size: 13px;">
    <p>
      This is an automated message. Please do not reply to this email.
    </p>
  </div>

</body>
</html>
`;
