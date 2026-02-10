"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface MenuItem {
  name: string;
  price: string;
  image: string;
}

const menu: MenuItem[] = [
 { name: "Parmesan Pesto", price: "₹225", image: "/images/pps.webp" },
 { name: "Pasta Arrabbiata", price: "₹265", image: "/images/pas.webp" },
  { name: "Icea Americano", price: "₹265", image: "/images/icea.webp" }, 
  { name: "Mimosa", price: "₹175", image: "/images/mim.webp" },
  { name: "Blueberry Cheesecake", price: "₹175", image: "/images/bb.webp" },
];

export default function SipsAndStuff() {
  return (
    <section
      id="ss"
      className="min-h-screen bg-white text-[#1a1a1a] px-6 md:px-20 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-14"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Sips & Stuff</h1>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Our top picks explore the full menu to discover more delights.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {menu.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ y: -6 }}
            className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all"
          >
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[220px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-5">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-[#5c3d2e] font-medium">{item.price}</p>
            </div>
          </motion.div>
        ))}

        {/* View Full Menu Card */}
<Link href="/menu" className="group">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4 }}
    className="relative cursor-pointer h-80 flex items-center justify-center rounded-2xl bg-[#111] text-white shadow-xl overflow-hidden"
  >
    <div className="relative z-10 text-center transition-all duration-300 group-hover:-translate-y-1">
      <h3 className="text-2xl font-semibold tracking-wide flex items-center justify-center gap-2">
        View Full Menu
        <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </h3>
      <p className="opacity-70 mt-2 text-sm">
        Explore everything we serve
      </p>
    </div>

    {/* Hover overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#111] to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </motion.div>
</Link>
 </div>
    </section>
  );
}
