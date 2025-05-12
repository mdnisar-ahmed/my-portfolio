"use server"

import nodemailer from "nodemailer"

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  const transporter = nodemailer.createTransport({
    // host: process.env.SMTP_HOST,
    // port: Number.parseInt(process.env.SMTP_PORT || "587"),
    // auth: {
    //   user: process.env.SMTP_USER,
    host: "smtp.gmail.com",
    port:587,
    auth: {
      user: "mdnisar.usa@gmail.com",
      pass: process.env.g_password
    },
  })

  const mailOptions = {
    from: email,
    to: "mdnisar.usa@gmail.com",
    subject: `New contact form submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    html: `<h1>New contact form submission</h1><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
  }

  try {
    await transporter.sendMail(mailOptions)
    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false }
  }
}

