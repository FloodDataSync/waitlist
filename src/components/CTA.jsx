import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const CTA = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="max-w-screen-xl mx-auto mt-20 rounded-3xl p-0 md:p-0 flex justify-between bg-gradient-to-r from-red-600 to-blue-700 text-white relative overflow-visible h-full"
      aria-label="Call to action to level up your gaming experience"
      style={{ minHeight: '320px' }}
    >
      <div className="flex flex-col md:flex-row w-full h-full" style={{ minHeight: '320px' }}>
        {/* Left content */}
        <div className="flex flex-col justify-center items-start text-left w-full md:w-1/2 p-6 md:p-16">
          <h2 className="text-3xl font-extrabold mb-3">
            Ready to Level Up Your Gaming Experience?
          </h2>
          <p className="text-gray-200 text-sm md:text-base mb-6">
            Join gamers streaming, competing, and connecting across epic titles daily.
          </p>
          <button className="bg-white text-red-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition w-full md:w-auto text-center">
            Join the Presale &rarr;
          </button>
        </div>
        {/* Right image, fills height and touches bottom */}
        <div className="relative w-full md:w-1/2 h-[260px] md:h-full min-h-[260px] md:min-h-[420px] flex items-end">
          <Image
            src="/cta.png"
            alt="Gaming character illustration"
            fill
            className="object-bottom pointer-events-none select-none"
            priority
            style={{ position: 'absolute', left: 0, right: 0, bottom: 0, top: 0,}}
          />
        </div>
      </div>
    </motion.section>
  )
}

export default CTA