"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-start px-6 sm:px-8 md:px-20 py-20 bg-white text-[#1a1a1a]"
    >
      {/* === About Header === */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl mb-12"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight md:leading-snug">
          About <br /> Our Café.
        </h1>
        <p className="text-gray-700 leading-relaxed max-w-3xl text-base sm:text-lg">
          Our Café isn’t just about great coffee it’s about great company.
          Our baristas aren’t just servers, they’re storytellers of flavor,
          crafting each brew with care and conversation. Here, every sip carries
          warmth, simplicity, and connection. Because great coffee is best
          enjoyed together.
        </p>
      </motion.div>

      {/* === Grid Section === */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl"
      >
        {/* Card 1 */}
        <Link href="#home" className="group relative rounded-2xl overflow-hidden">
          <img
            src="/images/ab1.webp"
            alt="Our Story"
            loading="lazy"
            className="object-cover w-full h-64 sm:h-72 md:h-64 lg:h-72 grayscale
                       group-hover:grayscale-0 group-hover:scale-105
                       transition-all duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-black/40 flex items-end justify-start p-6 transition-colors duration-500 group-hover:bg-black/20">
            <p className="text-white text-lg font-semibold group-hover:-translate-y-1 transition-transform">
              Our Story
            </p>
          </div>
        </Link>

        {/* Card 2 */}
        <Link href="#ss" className="group relative rounded-2xl overflow-hidden">
          <img
            src="/images/ab2.webp"
            alt="Craft & Culture"
            loading="lazy"
            className="object-cover w-full h-64 sm:h-72 md:h-64 lg:h-72 grayscale
                       group-hover:grayscale-0 group-hover:scale-105
                       transition-all duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-black/40 flex items-end justify-start p-6 transition-colors duration-500 group-hover:bg-black/20">
            <p className="text-white text-lg font-semibold group-hover:-translate-y-1 transition-transform">
              Craft & Culture
            </p>
          </div>
        </Link>

        {/* Card 3 */}
        <Link href="#gallery" className="group relative rounded-2xl overflow-hidden">
          <img
            src="/images/ab3.webp"
            alt="Our Spaces"
            loading="lazy"
            className="object-cover w-full h-64 sm:h-72 md:h-64 lg:h-72 grayscale
                       group-hover:grayscale-0 group-hover:scale-105
                       transition-all duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-black/40 flex items-end justify-start p-6 transition-colors duration-500 group-hover:bg-black/20">
            <p className="text-white text-lg font-semibold group-hover:-translate-y-1 transition-transform">
              Our Spaces
            </p>
          </div>
        </Link>

        {/* Card 4 - Full Width */}
        <Link
          href="#collaboration"
          className="group relative rounded-2xl overflow-hidden sm:col-span-2 md:col-span-3"
        >
          <img
            src="/images/ab4.webp"
            alt="Let’s Brew Collaborations"
            loading="lazy"
            className="object-cover w-full h-64 sm:h-80 md:h-96 lg:h-[300px] grayscale
                       group-hover:grayscale-0 group-hover:scale-105
                       transition-all duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-black/40 flex items-end justify-start p-6 transition-colors duration-500 group-hover:bg-black/20">
            <p className="text-white text-lg font-semibold group-hover:-translate-y-1 transition-transform">
              Let’s Brew Collaborations
            </p>
          </div>
        </Link>
      </motion.div>
    </section>
  );
}
