"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white">
      {/* Background image */}
      <div className="absolute inset-0 -z-10 w-full h-full">
        <Image
          src="/bg.png"
          alt="Background"
          fill
          priority
          className="object-cover w-full h-full"
          // sizes="100vw"
        />
      </div>

      {/* Top logos */}
      <div className="relative z-10 flex justify-center items-center gap-16 mb-16 bg-white rounded-full px-8 py-4 shadow-lg">
        <div className="flex items-center space-x-2">
          <Image
            src="/logo1.png"
            alt="Flood Data Sync Logo"
            width={160}
            height={60}
            className="h-12 w-auto"
          />
          <span className="sr-only">
          Data-sync
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="PACI Logo"
            width={150}
            height={60}
            className="h-12 w-auto"
          />
          <span className="sr-only">Positive Action for Climate Initiative</span>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-xl md:max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 width-full">
          Real-time Flood Reporting For Everyone, Everywhere.
        </h1>
        <p className="text-lg md:text-l mb-10 text-gray-200 text-monda width-8">
          Get early access to submit flood data instantly with photos, locations
          and text.
        </p>

        {/* CTA Button */}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScRgxNEND1YTAYXzO8IyrefXzheomtY8NLe2nx8svgsWJuZ_g/viewform?usp=send_form"
          className="px-10 py-3 border border-white text-white font-semibold rounded-md hover:bg-white hover:text-blue-900 transition text-monda"
        >
          Join Waitlist
        </a>
      </div>

      {/* Partner / placeholder icons in a straight line */}
      <div className="relative z-100 flex justify-center items-center gap-6 mt-20 opacity-70">
        <div className="w-14 h-14 bg-gray-400/40 rounded-lg"></div>
        <div className="w-16 h-16 bg-gray-400/40 rounded-lg"></div>
        <div className="w-20 h-24 bg-gray-400/40 rounded-lg"></div>
        <div className="w-16 h-16 bg-gray-400/40 rounded-lg"></div>
        <div className="w-14 h-14 bg-gray-400/40 rounded-lg"></div>
      </div>
    </div>
  );
}

