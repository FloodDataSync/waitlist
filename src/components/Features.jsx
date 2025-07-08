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
                "Discover fan communities and trending game discussions",
            imgAlt:
                "Futuristic 3D style image of various friendly game characters engaging in conversation around a digital speech bubble cluster",
        },
    ];
    return (
        <section className="max-w-screen-xl mx-auto px-6 md:px-20 mt-20 text-white">
            <h2 className="text-2xl md:text-5xl font-bold mb-2 text-center">
                Features
            </h2>
            <p className="text-gray-300 text-base md:text-xl max-w-xl mb-10 mx-auto text-center">
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
                        className="relative flex flex-col items-start text-left"
                    >
                        {/* Single tilted back card */}
                        <div className="absolute inset-0 z-0 rounded-xl bg-gradient-to-br from-red-700/40 to-blue-900/40 shadow-md" style={{ transform: 'rotate(-8deg) scale(0.97) translateY(-0.5rem) translateX(-0.5rem)' }}></div>
                        <div className="z-10 rounded-xl p-0.5 bg-gradient-to-br from-red-600 to-blue-900">
                            <div className="bg-[#121212] rounded-xl p-6 flex flex-col items-start text-left h-full relative" style={{ minHeight: '300px', height: '320px' }}>
                                <h3 className="font-semibold text-xl md:text-2xl mb-2">{feature.title}</h3>
                                <p className="text-sm md:text-base text-gray-400 mb-8">{feature.description}</p>
                                <div className='flex justify-end items-end w-full'>
                                    <img
                                        src={`/Feature${i + 1}.png`}
                                        alt={feature.imgAlt}
                                        className=" w-28 h-28 md:w-20 md:h-20"
                                        loading="lazy"
                                    />
                                </div>
                                {/* Feature icon at bottom right, responsive */}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Features