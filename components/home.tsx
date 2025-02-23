"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Howl } from "howler"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import { Button } from "@progress/kendo-react-buttons"

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false)
  const soundRef = useRef<Howl | null>(null)

  useEffect(() => {
    soundRef.current = new Howl({
      src: ["/FASTER-VERSION-2020-08-10_-_Go_Beyond_-_David_Fesliyan.mp3"],
      loop: true,
      volume: 0.5,
    })

    return () => {
      if (soundRef.current) {
        soundRef.current.unload()
      }
    }
  }, [])

  const toggleSound = () => {
    if (soundRef.current) {
      if (isPlaying) {
        soundRef.current.pause()
      } else {
        soundRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/NisarAhmed_DotNET_Resume.pdf"
    link.download = "NisarAhmed_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="home" className="py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold mb-4"
            >
              Hi, I'm Nisar Ahmed 
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl mb-6"
            >
               a passionate developer specializing in .NET, React, and more.
            </motion.p>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://github.com/mdnisar-ahmed"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-200"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/nisarahmedm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-200"
              >
                <FaLinkedin size={24} />
              </a>
              {/* <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-200"
              >
                <FaTwitter size={24} />
              </a> */}
            </div>
            <Button onClick={handleDownloadResume} themeColor={"primary"}>
              Download Resume
            </Button>
          </div>
          <div className="md:w-1/2 relative">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="rounded-full overflow-hidden border-4 border-white shadow-lg"
            >
              <Image src="/20241214_115920.jpg" alt="Nisar Ahmed" width={750} height={400} className="rounded-full" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute top-0 left-0 w-full h-full"
            >
              {/* <Image
  src="/placeholder.svg"
  alt="Cool Animal"
  width={100}
  height={100}
  className="absolute top-10 right-10 animate-spin"
 /> */}

            </motion.div>
          </div>
        </div>
        <Button onClick={toggleSound} themeColor={"info"} className="mt-6">
          {isPlaying ? "Pause Music" : "Play Music"}
        </Button>
      </div>
    </section>
  )
}

