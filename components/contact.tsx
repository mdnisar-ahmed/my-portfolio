"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import { Form, Field, FormElement } from "@progress/kendo-react-form"
import { Input } from "@progress/kendo-react-inputs"
import { Button } from "@progress/kendo-react-buttons"
import { Notification, NotificationGroup } from "@progress/kendo-react-notification"

export default function Contact() {
  const [showNotification, setShowNotification] = useState(false)

  const handleSubmit = (dataItem: any) => {
    // Here you would typically send the form data to your backend or a service like EmailJS
    console.log("Form submitted", dataItem)
    setShowNotification(true)
    setTimeout(() => setShowNotification(false), 3000)
  }

  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Contact Me</h2>
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2"
            >
              <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
              <p className="mb-4">Feel free to reach out to me for any inquiries or collaborations.</p>
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
              <p>Address: Overland Park, Kansas, USA </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:w-1/2"
            >
              <Form
                onSubmit={handleSubmit}
                render={(formRenderProps) => (
                  <FormElement>
                    <Field
                      name="name"
                      component={Input}
                      label="Name"
                      validator={(value) => !value && "Name is required"}
                    />
                    <Field
                      name="email"
                      type="email"
                      component={Input}
                      label="Email"
                      validator={(value) => !value && "Email is required"}
                    />
                    <Field
                      name="message"
                      component={Input}
                      label="Message"
                      validator={(value) => !value && "Message is required"}
                      textarea={true}
                    />
                    <div className="mt-4">
                      <Button type="submit" themeColor={"primary"} disabled={!formRenderProps.allowSubmit}>
                        Send Message
                      </Button>
                    </div>
                  </FormElement>
                )}
              />
            </motion.div>
          </div>
        </div>
      </div>
      <NotificationGroup>
        {showNotification && (
          <Notification
            type={{
              style: "success",
              icon: true,
            }}
            closable={true}
            onClose={() => setShowNotification(false)}
          >
            <span>Your message has been sent successfully!</span>
          </Notification>
        )}
      </NotificationGroup>
    </section>
  )
}

