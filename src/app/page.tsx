"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";



export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="bg-[linear-gradient(to_bottom,_#170E12,_#000000,_#170E12,_#000000,_#170E12,_#000000)] min-h-screen pb-20">
        <Hero />
        <About />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
