"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function GalleryPage() {
  const [hovered, setHovered] = useState<number | null>(null);

  const reviewCards = [
    {
      title: "Cafe's Barista",
      text: "Perfect coffee experience. Relax and savor the moment.",
      author: "Anna",
      tilt: "-6deg",
      img: "/images/s1.webp",
    },
    {
      title: "Sips the Moment",
      text: "Friendly team, top-notch coffee, and perfect vibes.",
      author: "Rudi",
      tilt: "0deg",
      img: "/images/s2.webp",
    },
    {
      title: "Rush Hour",
      text: "Every visit feels special. Passion in every cup.",
      author: "Lina",
      tilt: "6deg",
      img: "/images/s3.webp",
    },
  ];

  const galleryImages = [
    { title: "Cafe's Barista", src: "/images/s1.webp" },
    { title: "Sips the Moment", src: "/images/s2.webp" },
    { title: "Rush Hour", src: "/images/s3.webp" },
    { title: "Cafe Run Event", src: "/images/s4.webp" },
    { title: "Savor the Moment", src: "/images/s5.webp" },
  ];

  return (
    <main
      id="gal"
      className="min-h-screen bg-white text-black px-6 md:px-20 py-20 space-y-40"
    >
      {/* === SECTION 1: HERO / GALLERY === */}
      <section id="gallery" className="mb-32 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-extrabold mb-16 tracking-tight"
        >
          Savor The Moment.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg text-gray-600 mb-14 max-w-2xl mx-auto"
        >
          Every cup holds a story, and every moment is worth capturing. From
          laughter to quiet reflections, take a glimpse into the heart of
          Meridian Café — where coffee brings people together.
        </motion.p>

        {/* === Gallery Grid === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          {galleryImages.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer ${
                i < 3 ? "col-span-2" : "col-span-3"
              }`}
              style={{ aspectRatio: "4/3" }}
            >
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="w-full h-full"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
              >
                <p className="text-white font-semibold text-lg tracking-wide">
                  {item.title}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* === SECTION 2: CUSTOMER REVIEWS === */}
      <section className="relative w-full min-h-screen flex flex-col justify-end items-center pb-16 bg-gray-50">
        <h3 className="text-2xl md:text-xl font-semibold text-gray-800 z-10 relative">
          Customer Reviews
        </h3>

        <h2 className="absolute text-[8vw] font-extrabold text-gray-200 select-none top-20 z-0">
          WHAT THEY SAID
        </h2>

        <div className="relative w-full flex justify-center items-end gap-[-60px] mt-20 z-10">
          {reviewCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.3,
                duration: 0.6,
                type: "spring",
              }}
              style={{ rotate: card.tilt, zIndex: hovered === i ? 50 : i }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              whileHover={{ y: -10, scale: 1.05 }}
              className="w-64 md:w-72 h-[28rem] bg-white rounded-2xl shadow-2xl p-6 flex flex-col justify-between cursor-pointer"
            >
              <div className="w-full h-36 rounded-lg mb-4 overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  loading="lazy"
                  className="object-cover w-full h-full transition-transform duration-700 ease-out hover:scale-110"
                />
              </div>

              <h3 className="font-bold text-lg mb-2">{card.title}</h3>
              <p className="text-gray-600 text-sm flex-1 mb-4">{card.text}</p>

              <div className="flex items-center mb-2 text-yellow-400">
                {[...Array(5)].map((_, idx) => (
                  <span key={idx}>★</span>
                ))}
              </div>

              <span className="text-gray-800 font-semibold">{card.author}</span>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
