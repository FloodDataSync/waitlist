import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const CTA = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="max-w-screen-xl mx-auto mt-20 rounded-3xl p-10 md:p-16 px-10 md:px-20 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 bg-gradient-to-r from-red-600 to-blue-700 text-white relative overflow-visible"
      aria-label="Call to action to level up your gaming experience"
    >
      <div className="flex-1 max-w-xl text-center md:text-left flex flex-col items-center md:items-start">
        <h2 className="text-3xl font-extrabold mb-3">
          Ready to Level Up Your Gaming Experience?
        </h2>
        <p className="text-gray-200 text-sm md:text-base mb-6">
          Join gamers streaming, competing, and connecting across epic titles daily.
        </p>
        <button className="bg-white text-red-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition w-full md:w-auto text-center">
          Join the Waitlist &rarr;
        </button>
      </div>
      {/* Single character image on right, resting on the line */}
      <Image
        src="/cta.png"
        alt="Gaming character illustration"
        width={500}
        height={200}
        className="absolute right-8 bottom-0 z-10 h-auto pointer-events-none select-none"
        priority
      />
    </motion.section>
  )
}

export default CTA