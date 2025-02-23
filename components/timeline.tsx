import React from 'react'
import { motion } from 'framer-motion'

interface TimelineItemProps {
  year: string
  title: string
  subtitle: string
  description: string
  children?: React.ReactNode
}

const TimelineItem: React.FC<TimelineItemProps & { isLeft: boolean }> = ({ year, title, subtitle, description, children, isLeft }) => {
  return (
    <motion.div 
      className={`mb-8 flex justify-between items-center w-full ${isLeft ? 'flex-row-reverse' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-blue-500 shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto text-sm text-white font-semibold">{year}</h1>
      </div>
      <motion.div 
        className="order-1 bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-5/12 px-4 py-3"
        whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
        transition={{ duration: 0.2 }}
      >
        <h3 className="mb-1 font-bold text-gray-800 dark:text-white text-lg">{title}</h3>
        <h4 className="mb-2 font-semibold text-blue-600 dark:text-blue-400 text-sm">{subtitle}</h4>
        <p className="text-xs leading-snug tracking-wide text-gray-600 dark:text-gray-300 text-opacity-100">{description}</p>
        {children}
      </motion.div>
    </motion.div>
  )
}

export const CustomTimeline: React.FC<{ items: TimelineItemProps[] }> = ({ items }) => {
  return (
    <div className="container mx-auto w-full h-full">
      <div className="relative wrap overflow-hidden p-4 h-full">
        <div className="border-2-2 absolute border-opacity-20 border-blue-500 h-full border" style={{left: '50%'}}></div>
        {items.map((item, index) => (
          <TimelineItem key={index} {...item} isLeft={index % 2 === 0} />
        ))}
      </div>
    </div>
  )
}
