'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';

export default function Card({ isCenter, imageSrc, videoSrc, onHoverStart, onHoverEnd }) {
  const videoRef = useRef(null);

  const handleHoverStart = () => {
    if (isCenter && videoRef.current) videoRef.current.play();
    onHoverStart?.();
  };

  const handleHoverEnd = () => {
    if (isCenter && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    onHoverEnd?.();
  };

  return (
    <motion.div
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      className={`relative rounded-xl overflow-hidden shadow-2xl transition-transform ${
        isCenter ? 'w-80 h-96' : 'w-64 h-80'
      }`}
    >
      {isCenter ? (
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src={videoSrc}
          muted
          loop
          playsInline
        />
      ) : (
        <img src={imageSrc} alt="Card" className="w-full h-full object-cover" />
      )}
    </motion.div>
  );
}
