"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaPhoneAlt,  FaInstagram } from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Sips & Stuff", href: "#ss" },
  { name: "Gallery", href: "#gal" },
  { name: "Collaboration", href: "#collaboration" },
];

export default function CollaborationPage() {
  return (
    <main id="collaboration" className="bg-white min-h-screen px-4 sm:px-6 md:px-16 lg:px-24 py-12 md:py-20 flex flex-col items-center text-gray-900">
      {/* Hero Section */}
      <section className="max-w-3xl sm:max-w-4xl mb-16 sm:mb-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
        >
          Let’s{" "}
          <motion.span
            whileHover={{ scale: 1.08, y: -4 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            className="inline-block rounded-[2rem] bg-gray-900 text-white px-4 sm:px-6 py-2 shadow-md cursor-pointer"
          >
            Brew
          </motion.span>{" "}
          and
          <br />
          <motion.span
            whileHover={{ scale: 1.08, y: -4 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            className="inline-block rounded-[2rem] bg-gray-700 text-white px-4 sm:px-6 py-2 mt-2 shadow-md cursor-pointer"
          >
            Connect
          </motion.span>{" "}
          Together
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gray-600 text-sm sm:text-base md:text-lg mb-6 sm:mb-8"
        >
          We’re all about creating unforgettable moments. Whether it’s a fun run,
          a wedding celebration, or a casual evening, we bring people together
          with the perfect brew and great vibes. Let’s build connections that
          last one cup at a time.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#1f2937" }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.3 }}
          className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-full shadow hover:shadow-lg text-sm sm:text-base mx-auto block"
        >
          Let’s Brew Collab!
        </motion.button>
      </section>

      {/* Brand Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 tracking-tight mb-12 sm:mb-16 text-center"
      >
        CAFE NAME
      </motion.div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 w-full max-w-6xl justify-items-center sm:justify-items-start">
        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          whileHover={{ scale: 1.02, y: -3 }}
          className="p-4 sm:p-5 rounded-2xl hover:bg-gray-50 transition text-center sm:text-left"
        >
          <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-gray-900">
            About our Cafe
          </h3>
          <p className="text-gray-600 text-sm sm:text-base mb-2 sm:mb-3">
            This Cafe specializes in food and beverages, offering
            delightful culinary experiences in the heart of Bhopal.
          </p>
          <button className="mt-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition text-sm sm:text-base">
            View More
          </button>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.02, y: -3 }}
          className="p-4 sm:p-5 rounded-2xl hover:bg-gray-50 transition text-center sm:text-left"
        >
          <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-gray-900">Quick Links</h3>
          <ul className="space-y-1 sm:space-y-2 text-gray-600 text-sm sm:text-base">
            {quickLinks.map((link, index) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="block hover:text-gray-900 hover:translate-x-1 transition-transform duration-200"
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{ scale: 1.02, y: -3 }}
          className="p-4 sm:p-5 rounded-2xl hover:bg-gray-50 transition text-center sm:text-left"
        >
          <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-gray-900">Contact Us</h3>
          <div className=" sm:flex-row items-center sm:items-start gap-2 text-gray-700 text-sm sm:text-base">
            <div className="flex items-center gap-2"><FaPhoneAlt /><span>91********</span></div>
            
            <div className="flex items-start gap-2"> 
              <div className="py-4">Complete address of the cafe to be entered here </div>
          </div>
          </div>
        </motion.div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.02, y: -3 }}
          className="p-4 sm:p-5 rounded-2xl hover:bg-gray-50 transition text-center sm:text-left"
        >
          <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-gray-900">Follow Us</h3>
          <div className="flex justify-center sm:justify-start items-center gap-4 text-2xl sm:text-3xl">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#"
              className="text-gray-700 hover:text-gray-900 transition"
            >
              <FaInstagram />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-12 sm:mt-16 text-gray-500 text-sm sm:text-base text-center"
      >
        &copy; 2026. Powered by{" "}
        <span className="font-semibold text-gray-700">abdulxhadi7</span>
      </motion.div>
    </main>
  );
}
