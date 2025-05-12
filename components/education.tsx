"use client"

import { CustomTimeline } from "./timeline"

const educationData = [
  {
    year: "2024",
    title: "Master's Degree",
    subtitle: "University of Central Missouri",
    description:
       "Master of Science in Computer Science, focusing on Web Apps, Artificial Intelligence and Machine Learning.",
  },
  {
    year: "2018",
    title: "Bachelor's Degree",
    subtitle: "Chaitanya Bharathi Institute of Technology",
    description:
      "Bachelor of Engineering in Computer Science",
  }
]

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Education</h2>
        <div className="max-w-6xl mx-auto">
          <CustomTimeline items={educationData} />
        </div>
      </div>
    </section>
  )
}

