import nodemailer from "nodemailer";
import "dotenv/config";

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const EmailService = {
  async sendEmailPasswordReset(to, code) {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to,
      subject: "Redefinição de senha - Cancha",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 500px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #2d8f6f;">Esqueceu a senha?</h2>
          <p>Use o código abaixo para redefinir sua senha:</p>
          <div style="text-align: center; margin: 30px 0;">
            <p style="font-size: 18px; margin-bottom: 10px;">Seu código:</p>
            <div style="display: inline-block; padding: 12px 20px; background-color: #2d8f6f; color: #fff; font-size: 24px; font-weight: bold; border-radius: 8px;">
              ${code}
            </div>
          </div>
          <p>Se você não solicitou, ignore este e-mail.</p>
          <p>Equipe Cancha</p>
        </div>
      `,
    });
  },
};
