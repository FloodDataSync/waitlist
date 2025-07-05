'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import Card from './Herocard';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (!isHovered) {
      controls.start({
        x: ['0%', '-10%', '0%'],
        transition: {
          repeat: Infinity,
          duration: 10,
          ease: 'easeInOut',
        },
      });
    } else {
      controls.stop();
    }
  }, [controls, isHovered]);

  return (
    <section className="w-full relative pt-20 flex flex-col items-center justify-center text-white px-6 md:px-20 max-w-screen-xl mx-auto select-none">
      {/* Stacked Cards Section */}
      <section className="relative h-[400px] w-full flex items-center justify-center py-24">
        <motion.div
          animate={controls}
          className="relative w-[300px] h-[400px]"
        >
          {/* Left card - bottom layer */}
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 z-10"
          >
            <Card
              isCenter={false}
              imageSrc="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
            />
          </motion.div>

          {/* Right card - middle layer */}
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 z-20"
          >
            <Card
              isCenter={false}
              imageSrc="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
            />
          </motion.div>

          {/* Center card - top layer */}
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 z-30"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            animate={{
              scale: isHovered ? 1.3 : 1,
              zIndex: isHovered ? 50 : 30,
            }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            <Card
              isCenter={true}
              imageSrc="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
              videoSrc="https://www.w3schools.com/html/mov_bbb.mp4"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Headline */}
      <h1 className="text-center text-3xl md:text-4xl font-extrabold max-w-3xl leading-tight mb-3">
        The Bridge between Web2 and Web3 Gaming and Entertainment
      </h1>
      <p className="text-center text-gray-300 mb-6 max-w-xl text-sm md:text-base">
        Experience the new frontier of gaming, metaverse and awesome content
      </p>
      <button className="bg-red-600 hover:bg-red-700 transition text-white font-semibold rounded-md px-6 py-3">
        Join the waitlist
      </button>
    </section>
  );
};

export default Hero;
