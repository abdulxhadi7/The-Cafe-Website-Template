"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <section
      id="home"
      className="relative isolate flex flex-col items-center justify-center text-center
                 py-2 px-6 sm:px-8 md:px-10 lg:px-16 bg-white"
    >
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.8, 0.25, 1] }}
        className="relative z-20 flex flex-col md:flex-row items-center
                   md:items-start justify-between w-full max-w-6xl
                   gap-6 md:gap-0"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                     font-bold tracking-tight text-[#1a1a1a]
                     leading-tight md:leading-snug"
        >
          THE CAFE NAME.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-base sm:text-lg md:text-xl font-semibold
                     mt-4 md:mt-0 text-gray-700"
        >
          Sip. Savor. Repeat.
        </motion.p>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.03 }}
        transition={{
          delay: 0.8,
          duration: 0.8,
          type: "spring",
          stiffness: 80,
        }}
        className="relative z-10 w-full max-w-6xl
                   h-60 sm:h-72 md:h-96 lg:h-[520px]
                   my-12 rounded-2xl shadow-md overflow-hidden
                   group pointer-events-auto bg-white"
      >
        <img
          src="/images/home.webp"
          alt="Meridian Cafe"
          loading="lazy"
          draggable={false}
          className="absolute inset-0 w-full h-full object-cover
                     transition-transform duration-700 ease-out
                     group-hover:scale-110 group-hover:brightness-95
                     pointer-events-none select-none"
        />
      </motion.div>

      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="relative z-20 flex flex-col md:flex-row
                   justify-between w-full max-w-6xl
                   gap-6 md:gap-8 text-left"
      >
        <p className="font-semibold text-gray-900 md:w-1/2">
          A crafted experience for all your coffee needs and moments.
        </p>
        <p className="text-gray-700 md:w-1/2 leading-relaxed">
          Minimalist design meets industrial charm crafting coffee experiences
          that celebrate quality, simplicity, and connection.
        </p>
      </motion.div>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.7 }}
        className="relative z-20 w-full max-w-6xl
                   flex justify-center md:justify-end
                   mt-8 md:mt-12"
      >
        <Link
          href="#ss"
          className="bg-black text-white text-sm
                     px-6 sm:px-8 py-3 rounded-full
                     hover:bg-gray-800 transition-all duration-300"
        >
          Explore the Brew
        </Link>
      </motion.div>
    </section>
  );
}
