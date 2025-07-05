import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import TestimonialCard from './TestimonialCard'

const Testimonials = () => {
    const testimonials = [
  {
    name: "Tosin Elzakir",
    text: `The team at Brissos impressed us from day one. Their understanding of the construction industry and proactive approach to system design helped us implement a solution that fits our exact workflow. BrissTrust isn't just software—it's a game changer.`,
    imgAlt:
      "Circular portrait of Tosin Elzakir, a young African man with short curly black hair and warm smile, wearing a maroon shirt, on dark background",
  },
  {
    name: "Tosin Elzakir",
    text: `The team at Brissos impressed us from day one. Their understanding of the construction industry and proactive approach to system design helped us implement a solution that fits our exact workflow. BrissTrust isn't just software—it's a game changer.`,
    imgAlt:
      "Circular portrait of Tosin Elzakir, a young African man with short curly black hair and warm smile, wearing a maroon shirt, on dark background",
  },
  {
    name: "Tosin Elzakir",
    text: `The team at Brissos impressed us from day one. Their understanding of the construction industry and proactive approach to system design helped us implement a solution that fits our exact workflow. BrissTrust isn't just software—it's a game changer.`,
    imgAlt:
      "Circular portrait of Tosin Elzakir, a young African man with short curly black hair and warm smile, wearing a maroon shirt, on dark background",
  },
    {
    name: "Tosin Elzakir",
    text: `The team at Brissos impressed us from day one. Their understanding of the construction industry and proactive approach to system design helped us implement a solution that fits our exact workflow. BrissTrust isn't just software—it's a game changer.`,
    imgAlt:
      "Circular portrait of Tosin Elzakir, a young African man with short curly black hair and warm smile, wearing a maroon shirt, on dark background",
  },
  {
    name: "Tosin Elzakir",
    text: `The team at Brissos impressed us from day one. Their understanding of the construction industry and proactive approach to system design helped us implement a solution that fits our exact workflow. BrissTrust isn't just software—it's a game changer.`,
    imgAlt:
      "Circular portrait of Tosin Elzakir, a young African man with short curly black hair and warm smile, wearing a maroon shirt, on dark background",
  },
  {
    name: "Tosin Elzakir",
    text: `The team at Brissos impressed us from day one. Their understanding of the construction industry and proactive approach to system design helped us implement a solution that fits our exact workflow. BrissTrust isn't just software—it's a game changer.`,
    imgAlt:
      "Circular portrait of Tosin Elzakir, a young African man with short curly black hair and warm smile, wearing a maroon shirt, on dark background",
  },
    {
    name: "Tosin Elzakir",
    text: `The team at Brissos impressed us from day one. Their understanding of the construction industry and proactive approach to system design helped us implement a solution that fits our exact workflow. BrissTrust isn't just software—it's a game changer.`,
    imgAlt:
      "Circular portrait of Tosin Elzakir, a young African man with short curly black hair and warm smile, wearing a maroon shirt, on dark background",
  },
  {
    name: "Tosin Elzakir",
    text: `The team at Brissos impressed us from day one. Their understanding of the construction industry and proactive approach to system design helped us implement a solution that fits our exact workflow. BrissTrust isn't just software—it's a game changer.`,
    imgAlt:
      "Circular portrait of Tosin Elzakir, a young African man with short curly black hair and warm smile, wearing a maroon shirt, on dark background",
  },
  {
    name: "Tosin Elzakir",
    text: `The team at Brissos impressed us from day one. Their understanding of the construction industry and proactive approach to system design helped us implement a solution that fits our exact workflow. BrissTrust isn't just software—it's a game changer.`,
    imgAlt:
      "Circular portrait of Tosin Elzakir, a young African man with short curly black hair and warm smile, wearing a maroon shirt, on dark background",
  },
    {
    name: "Tosin Elzakir",
    text: `The team at Brissos impressed us from day one. Their understanding of the construction industry and proactive approach to system design helped us implement a solution that fits our exact workflow. BrissTrust isn't just software—it's a game changer.`,
    imgAlt:
      "Circular portrait of Tosin Elzakir, a young African man with short curly black hair and warm smile, wearing a maroon shirt, on dark background",
  },
  {
    name: "Tosin Elzakir",
    text: `The team at Brissos impressed us from day one. Their understanding of the construction industry and proactive approach to system design helped us implement a solution that fits our exact workflow. BrissTrust isn't just software—it's a game changer.`,
    imgAlt:
      "Circular portrait of Tosin Elzakir, a young African man with short curly black hair and warm smile, wearing a maroon shirt, on dark background",
  },
  {
    name: "Tosin Elzakir",
    text: `The team at Brissos impressed us from day one. Their understanding of the construction industry and proactive approach to system design helped us implement a solution that fits our exact workflow. BrissTrust isn't just software—it's a game changer.`,
    imgAlt:
      "Circular portrait of Tosin Elzakir, a young African man with short curly black hair and warm smile, wearing a maroon shirt, on dark background",
  },
];
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [visible, setVisible] = useState(1);
  const cardCount = testimonials.length;

  // Responsive visible count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) setVisible(3);
      else if (window.innerWidth >= 768) setVisible(2);
      else setVisible(1);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Carousel logic
  const [isAnimating, setIsAnimating] = useState(false);
  const CARD_WIDTH = 320; // px, should match max-w-xs

  // For smooth infinite carousel, render extra cards before and after
  const getWindowCards = () => {
    let cards = [];
    // window: [prev, ...visible, next]
    for (let i = -1; i < visible + 1; i++) {
      let idx = (index + i + cardCount) % cardCount;
      cards.push(
        <div key={idx + '-' + i} className="flex-shrink-0 w-full max-w-xs">
          <TestimonialCard
            name={testimonials[idx].name}
            text={testimonials[idx].text}
            imgAlt={testimonials[idx].imgAlt}
          />
        </div>
      );
    }
    return cards;
  };

  // Track offset for animation
  const [offset, setOffset] = useState(0);
  const intervalRef = useRef();
  const handlePaginate = (dir, auto = false) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(dir);
    setOffset(-dir * CARD_WIDTH);
    setTimeout(() => {
      setIndex((prev) => (prev + dir + cardCount) % cardCount);
      setOffset(0);
      setIsAnimating(false);
    }, 350); // match transition duration
    if (!auto) {
      // Reset auto-slide timer on manual navigation
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        startAutoSlide();
      }
    }
  };

  // Auto-slide
  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      handlePaginate(1, true);
    }, 3000);
  };
  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line
  }, [visible, cardCount]);

  return (
    <section className="max-w-screen-xl mx-auto mt-24 px-6 md:px-20 text-white text-center select-none py-20">
      <h2 className="text-2xl font-bold mb-3">What Gamers Are Saying</h2>
      <p className="text-gray-300 mb-10 text-sm md:text-base">
        Why Gamers Keep Coming Back
      </p>
      <div className="relative flex items-center justify-center">
        <button
          aria-label="Previous"
          onClick={() => handlePaginate(-1)}
          className="absolute left-0 z-10 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 shadow-lg"
          disabled={isAnimating}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
        </button>
        <div className="overflow-hidden w-full flex justify-center min-h-[220px]">
          <motion.div
            className="flex gap-6 px-4 py-2"
            style={{ x: offset }}
            transition={{ type: 'tween', duration: 0.35 }}
          >
            {getWindowCards()}
          </motion.div>
        </div>
        <button
          aria-label="Next"
          onClick={() => handlePaginate(1)}
          className="absolute right-0 z-10 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 shadow-lg"
          disabled={isAnimating}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
        </button>
      </div>
    </section>
  );
}

export default Testimonials