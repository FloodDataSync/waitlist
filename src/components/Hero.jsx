'use client';

import { HeroCarousel } from "./HeroCarousel";


const Hero = () => {

  return (
    <section className="w-full relative pt-20 flex flex-col items-center justify-center text-white px-6 md:px-20 max-w-screen-xl mx-auto select-none">
      {/* Stacked Cards Section */}
      <HeroCarousel />

      {/* Headline */}
      <h1 className="text-center text-3xl md:text-4xl font-extrabold max-w-3xl leading-tight mt-8">
        The Bridge between Web2 and Web3 Gaming and Entertainment
      </h1>
      <p className="text-center text-gray-300 mb-6 max-w-xl text-sm md:text-base">
        Experience the new frontier of gaming, metaverse and awesome content
      </p>
      <button className="bg-red-600 hover:bg-red-700 transition text-white font-semibold rounded-md px-6 py-3">
        Join the presale
      </button>
    </section>
  );
};

export default Hero;
