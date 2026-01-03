"use server";

import nodemailer from "nodemailer";

interface ActionState {
     success: boolean;
     error?: string;
}

export async function sendContactEmail(formData: FormData): Promise<ActionState> {
     const firstName = formData.get("firstName") as string;
     const lastName = formData.get("lastName") as string;
     const email = formData.get("email") as string;
     const message = formData.get("message") as string;

     if (!firstName || !email || !message) {
          return { success: false, error: "Mohon isi semua field yang wajib." };
     }

     const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
               user: process.env.EMAIL_USER,
               pass: process.env.EMAIL_PASS,
          },
     });

     const mailOptions = {
          from: process.env.EMAIL_USER,
          replyTo: email,
          to: "alkhawarizmifatra@gmail.com",
          subject: `Pesan Baru dari Website: ${firstName} ${lastName || ""}`,
          text: `
      Nama: ${firstName} ${lastName || ""}
      Email: ${email}
      
      Pesan:
      ${message}
    `,
          html: `
      <h3>Pesan Baru dari Website PT AGI</h3>
      <p><strong>Nama:</strong> ${firstName} ${lastName || ""}</p>
      <p><strong>Email:</strong> ${email}</p>
      <br/>
      <p><strong>Pesan:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `,
     };

     try {
          await transporter.sendMail(mailOptions);
          return { success: true };
     } catch (error) {
          console.error("Error sending email:", error);
          const errorMessage = error instanceof Error ? error.message : "Unknown error";
          return { success: false, error: errorMessage };
     }
}
