"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export const sendEmail = async (formData: { firstName: string; lastName: string; email: string; contact: string }) => {
  const htmlContent = `
    <div style="font-family: Inter, sans-serif; line-height: 1.6; color: #333;">
      <h2 style="color: #2c3e50;">CodeForge - Запрос демо!</h2>

      <table style="width: 100%; max-width: 500px; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px; border: 1px solid #eee;"><strong>Имя:</strong></td>
          <td style="padding: 8px; border: 1px solid #eee;">${formData.firstName}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #eee;"><strong>Фамилия:</strong></td>
          <td style="padding: 8px; border: 1px solid #eee;">${formData.lastName}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #eee;"><strong>Email:</strong></td>
          <td style="padding: 8px; border: 1px solid #eee;">${formData.email}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #eee;"><strong>Контакт:</strong></td>
          <td style="padding: 8px; border: 1px solid #eee;">${formData.contact}</td>
        </tr>
      </table>

      <p style="margin-top: 30px; color: #888; font-size: 12px;">
        © ${new Date().getFullYear()} Uyadaa — Все права защищены.
      </p>
    </div>
  `;

  await resend.emails.send({
    from: "CodeForge <onboarding@resend.dev>",
    to: "fagutlaxabit@gmail.com",
    subject: "CodeForge - Запрос демо",
    html: htmlContent,
  });
};


