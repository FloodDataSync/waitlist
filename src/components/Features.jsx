import React from 'react'
import { motion } from 'framer-motion'

const Features = () => {
    const features = [
  {
    title: "Live Streaming",
    description:
      "Go live or watch others dominate. Crystal-clear, low-lag streams at your fingertips.",
    imgAlt:
      "Neon colored illustration of a gaming controller with streaming and connectivity symbols, glowing magenta and green",
  },
  {
    title: "Tasks & Quests",
    description:
      "Earn rewards by completing in-game or app-specific challenges.",
    imgAlt:
      "Bright digital painting of a treasure chest overflowing with gold coins and sparkling rewards on a gaming quest background",
  },
  {
    title: "Tournaments",
    description:
      "Compete in daily or seasonal tournaments and climb leader boards.",
    imgAlt:
      "Illustration of a golden trophy with stars and coins celebrating a gaming tournament victory",
  },
  {
    title: "Community Feed",
    description:
      "Discover fan communities and trending game discussions.",
    imgAlt:
      "Futuristic 3D style image of various friendly game characters engaging in conversation around a digital speech bubble cluster",
  },
];
  return (
        <section className="max-w-screen-xl mx-auto px-6 md:px-20 mt-20 text-white">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Features
      </h2>
      <p className="text-center text-gray-300 text-sm md:text-base max-w-xl mx-auto mb-10">
        Everything You Need in One Gaming Hub
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-[#121212] border border-[#2E2E2E] rounded-xl p-6 shadow-lg flex flex-col items-center text-center"
          >
            <img
              src={`https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a350d606-d068-4133-8c8e-4387deb12ca7.png + 1}`}
              alt={feature.imgAlt}
              className="mb-4 w-20 h-20 object-contain"
              loading="lazy"
            />
            <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
            <p className="text-xs text-gray-400">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Features