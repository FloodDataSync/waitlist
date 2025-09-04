"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/bg.png" // replace with your actual background image path
          alt="Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Top logos */}
      <div className="relative z-10 flex justify-center items-center gap-16 mb-16">
        <div className="flex items-center space-x-2">
          <Image
            src="/logo1.png"
            alt="Flood Data Sync Logo"
            width={150}
            height={60}
            className="h-12 w-auto"
          />
          <span className="sr-only">
          Data-sync
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <Image
            src="/LOGO.png"
            alt="Logo"
            width={150}
            height={60}
            className="h-12 w-auto"
          />
          <span className="sr-only">Positive Action for Climate Initiative</span>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Real-time Flood Reporting For Everyone, Everywhere.
        </h1>
        <p className="text-lg md:text-xl mb-10 text-gray-200">
          Get early access to submit flood data instantly with photos, locations
          and text.
        </p>

        {/* CTA Button */}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScRgxNEND1YTAYXzO8IyrefXzheomtY8NLe2nx8svgsWJuZ_g/viewform?usp=send_form"
          className="px-10 py-3 border border-white text-white font-semibold rounded-md hover:bg-white hover:text-blue-900 transition"
        >
          Join Waitlist
        </a>
      </div>

      {/* Partner / placeholder icons in a straight line */}
      <div className="relative z-10 flex justify-center items-center gap-6 mt-20 opacity-70">
        <div className="w-16 h-16 bg-gray-600/40 rounded-lg"></div>
        <div className="w-16 h-16 bg-gray-600/40 rounded-lg"></div>
        <div className="w-16 h-16 bg-gray-600/40 rounded-lg"></div>
        <div className="w-16 h-16 bg-gray-600/40 rounded-lg"></div>
        <div className="w-16 h-16 bg-gray-600/40 rounded-lg"></div>
      </div>
    </div>
  );
}

