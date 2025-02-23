"use client"

import { CustomTimeline } from "./timeline"

const experienceData = [
  {
    year: "Present",
    title: "Web Developer",
    subtitle: "Humane Action Pittsburgh",
    description: "Developing modern web applications.",
    skills: [".NET Core", "Wordpress", "JavaScript"],
  },
  {
    year: "2024",
    title: "Full-Stack Intern",
    subtitle: "G-Square Technologies",
    description: "Building full-stack applications.",
    skills: ["React", ".NET Core", "Azure", "Postgres SQL", "TypeScript"],
  },
  {
    year: "2022",
    title: "Sr. Software Engineer",
    subtitle: "Mindtree Ltd.",
    description: "Developing enterprise web solutions.",
    skills: ["Angular", "Blazor", ".NET Core", "Node.js", "SQL Server", "Azure"],
  },
  {
    year: "2018",
    title: "Junior Developer",
    subtitle: "Surya Allied Services",
    description: "Assisting in application development.",
    skills: ["C#", ".NET Core", "SQL", "Git"],
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-12 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Experience</h2>
        <div className="max-w-5xl mx-auto">
          <CustomTimeline
            items={experienceData.map((exp) => ({
              ...exp,
              children: (
                <div className="flex flex-wrap gap-1 mt-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              ),
            }))}
          />
        </div>
      </div>
    </section>
  )
}

