"use client"

import { useState } from "react"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import { Input } from "@progress/kendo-react-inputs"
import { Button } from "@progress/kendo-react-buttons"
import { sendEmail } from "@/app/actions/sendEmail"

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  async function handleSubmit(formData: FormData) {
    const result = await sendEmail(formData)
    setStatus(result.success ? "success" : "error")
    setTimeout(() => setStatus("idle"), 5000)
  }

  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Contact Me</h2>
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
              <p className="mb-4">Feel free to reach out for any inquiries or collaborations.</p>
              <div className="flex space-x-4 mb-6">
                <a
                  href="https://github.com/mdnisar-ahmed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/nisarahmedm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
                >
                  <FaLinkedin size={24} />
                </a>
                {/* <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
                >
                  <FaTwitter size={24} />
                </a> */}
              </div>
              <p>Email: <u>mdnisar.ahmed@hotmail.com</u></p>
              <p>Address: Overland Park, Kansas, USA</p>
            </div>
            <div className="md:w-1/2">
              <form action={handleSubmit}>
                <div className="mb-4">
                  <Input name="name" label="Name" required />
                </div>
                <div className="mb-4">
                  <Input name="email" type="email" label="Email" required />
                </div>
                <div className="mb-4">
                  <Input name="message" label="Message" textarea={true} required />
                </div>
                <div className="mt-4">
                  <Button type="submit" themeColor="primary">
                    Send Message
                  </Button>
                </div>
                {status === "success" && (
                  <p className="mt-4 text-green-600 dark:text-green-400">Message sent successfully!</p>
                )}
                {status === "error" && (
                  <p className="mt-4 text-red-600 dark:text-red-400">Failed to send message. Please try again.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

