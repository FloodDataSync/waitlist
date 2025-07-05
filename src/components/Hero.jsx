"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <section
            className="w-full relative pt-20 flex flex-col items-center justify-center text-white px-6 md:px-20 max-w-screen-xl mx-auto select-none"
        >
            {/* Main container with 3 side scrolling feature/game cards */}
            <div className="relative flex justify-center items-center space-x-6 overflow-x-auto scroll-smooth scrollbar-hide mt-4 mb-12 max-w-full" style={{ zIndex: 1 }}>
                {/* Left video card */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="min-w-[250px] md:min-w-[320px] rounded-3xl overflow-hidden flex-shrink-0 cursor-pointer z-0"
                    aria-label="Left side game video preview"
                >
                    <video
                        src="https://www.w3schools.com/html/mov_bbb.mp4"
                        muted
                        autoPlay
                        loop
                        playsInline
                        className="object-cover w-full h-full"
                    />
                </motion.div>

                {/* Center video card, above others, rotates and expands on hover/click */}
                <CenterHeroVideo />

                {/* Right video card */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="min-w-[250px] md:min-w-[320px] rounded-3xl overflow-hidden flex-shrink-0 cursor-pointer z-0"
                    aria-label="Right side game video preview"
                >
                    <video
                        src="https://www.w3schools.com/html/movie.mp4"
                        muted
                        autoPlay
                        loop
                        playsInline
                        className="object-cover w-full h-full"
                    />
                </motion.div>
            </div>

// ...existing code...

            {/* Headline and subtext */}
            <h1 className="text-center text-3xl md:text-4xl font-extrabold max-w-3xl leading-tight mb-3">
                The most Intriguing SPACE for Web3 Gaming and Entertainment
            </h1>
            <p className="text-center text-gray-300 mb-6 max-w-xl text-sm md:text-base">
                Experience the new frontier of gaming, metaverse and awesome content
            </p>

            <button className="bg-red-600 hover:bg-red-700 transition text-white font-semibold rounded-md px-6 py-3">
                Join the waitlist
            </button>
        </section>
    )
}


// CenterHeroVideo component
function CenterHeroVideo() {
    const [expanded, setExpanded] = useState(false);
    const [hovered, setHovered] = useState(false);

    // 15s video for demo
    const videoSrc = "https://www.w3schools.com/html/mov_bbb.mp4";

    // Animation states
    const variants = {
        initial: { rotate: -10, zIndex: 10, scale: 1, boxShadow: "0 8px 32px 0 rgba(0,0,0,0.5)" },
        hovered: { rotate: -20, scale: 1.05, zIndex: 20, boxShadow: "0 16px 48px 0 rgba(0,0,0,0.7)" },
        expanded: { rotate: 0, scale: 1.2, zIndex: 50, boxShadow: "0 32px 64px 0 rgba(0,0,0,0.9)" },
    };

    // Handle play on expand
    const handleExpand = () => {
        setExpanded(true);
    };
    const handleClose = () => {
        setExpanded(false);
    };

    return (
        <motion.div
            className={`relative min-w-[380px] md:min-w-[460px] rounded-3xl overflow-hidden border-4 border-blue-600 shadow-2xl cursor-pointer flex-shrink-0 ${expanded ? 'fixed inset-0 m-auto w-full h-full max-w-4xl max-h-[90vh] bg-black z-[100]' : 'z-10'}`}
            aria-label="Center hero video card"
            variants={variants}
            initial="initial"
            animate={expanded ? "expanded" : hovered ? "hovered" : "initial"}
            transition={{ duration: 0.5, type: "spring" }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={expanded ? undefined : handleExpand}
            style={{ cursor: expanded ? 'default' : 'pointer' }}
        >
            <video
                src={videoSrc}
                muted={!expanded}
                autoPlay
                loop={!expanded}
                playsInline
                controls={expanded}
                className="w-full h-full object-cover rounded-3xl"
                onEnded={handleClose}
                style={{ pointerEvents: expanded ? 'auto' : 'none' }}
            />
            {/* Overlay info bar (show only when not expanded) */}
            {!expanded && (
                <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center bg-black bg-opacity-60 rounded-md px-3 py-1">
                    <div className="flex items-center space-x-2">
                        <img
                            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f1db90d7-8a0d-41b6-acc4-8af39ebb7d8b.png"
                            alt="Streamer Wade Fox avatar, a black male gamer with short hair, casual hoodie"
                            className="w-10 h-10 rounded-full object-cover"
                            loading="lazy"
                        />
                        <div>
                            <p className="text-sm font-semibold">Wade Fox</p>
                            <p className="text-xs text-gray-300">12.5k followers</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-1 bg-red-600 text-white text-xs font-semibold px-3 py-0.5 rounded-lg select-none">
                        <span>Live</span>
                        <span aria-label="Live recording red dot" className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                    </div>
                </div>
            )}
            {/* Close button when expanded */}
            {expanded && (
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 z-50 bg-black bg-opacity-60 text-white rounded-full p-2 hover:bg-opacity-80 transition"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            )}
        </motion.div>
    );
}

export default Hero