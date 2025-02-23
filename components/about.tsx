"use client"

import { motion } from "framer-motion"
import { FaReact, FaAngular, FaHtml5, FaCss3, FaNodeJs } from "react-icons/fa"
import { SiDotnet, SiSharp , SiMysql ,SiPostman ,SiDocker ,SiPostgresql,SiJavascript } from "react-icons/si"
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
} from "@progress/kendo-react-charts"

const technologies = [
  { icon: FaReact, name: "React", proficiency: 90 },
  { icon: FaAngular, name: "Angular", proficiency: 85 },
  { icon: SiDotnet, name: ".NET", proficiency: 95 },
  { icon: SiSharp, name: "C#", proficiency: 95 },
  { icon: FaHtml5, name: "HTML5", proficiency: 100 },
  { icon: FaCss3, name: "CSS3", proficiency: 90 },
  { icon: SiJavascript, name: "JavaScript", proficiency: 90 },
  { icon: FaNodeJs, name: "Node.js", proficiency: 80 },
  { icon: SiPostman, name: "Postman", proficiency: 85 },
  { icon: SiDocker, name: "Docker", proficiency: 85 },
  { icon: SiPostgresql, name: "Postgressql", proficiency: 85 },
  // { icon: VscAzure, name: "Azure", proficiency: 85 },
  { icon: SiMysql, name: "My Server", proficiency: 90 },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg mb-8 text-center">
            I'm a passionate full-stack developer with expertise in .NET, React, and various other technologies. With a
            strong foundation in both front-end and back-end development, I strive to create efficient, scalable, and
            user-friendly applications.
          </p>
          <h3 className="text-2xl font-semibold mb-6 text-center">Technologies I Work With</h3>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-6 mb-12">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <tech.icon size={48} className="mb-2 text-blue-600 dark:text-blue-400" />
                <span className="text-sm text-center">{tech.name}</span>
              </motion.div>
            ))}
          </div>
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-6 text-center">Skills Proficiency</h3>
            <Chart>
              <ChartCategoryAxis>
                <ChartCategoryAxisItem categories={technologies.map((t) => t.name)} />
              </ChartCategoryAxis>
              <ChartSeries>
                <ChartSeriesItem type="column" data={technologies.map((t) => t.proficiency)} />
              </ChartSeries>
            </Chart>
          </div>
        </div>
      </div>
    </section>
  )
}

