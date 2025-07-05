import React from 'react'
import { motion } from 'framer-motion'

const TestimonialCard = ({ name, text, imgAlt }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-[#121212] rounded-xl p-6 pb-16 shadow-lg max-w-md mx-auto cursor-pointer relative overflow-visible"
    >
      <p className="text-gray-300 text-sm mb-6 italic leading-relaxed">{`"${text}"`}</p>
      {/* Avatar and name floating at bottom center, half out */}
      <div className="absolute left-1/2 bottom-0 flex flex-col items-center -translate-x-1/2 translate-y-1/2 w-fit">
        <img
          src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/95aa7172-95dc-4f04-b0ea-f5f1b0c51026.png"
          alt={imgAlt}
          className="rounded-full w-16 h-16 object-cover border-4 border-[#121212] bg-[#121212] shadow-lg"
          loading="lazy"
        />
        <span className="text-sm font-medium text-white mt-2 bg-[#121212] px-3 py-1 rounded-full shadow-lg border border-[#232323]">{name}</span>
      </div>
    </motion.div>
  )
}

export default TestimonialCard