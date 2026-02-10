"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CollaborationPage from "../collaboration/page";

interface MenuItem {
  name: string;
  price: string;
  image: string;
}

const menu: MenuItem[] = [
  { name: "Noodles", price: "₹200", image: "/images/noodle.webp" },
  { name: "Mango Baked Yoghurt", price: "₹135", image: "/images/mby.webp" },
  { name: "Grilled Paneer Hummus wrap", price: "₹155", image: "/images/gph.webp" },
  { name: "Mimosa", price: "₹175", image: "/images/mim.webp" },
  { name: "Blueberry Cheesecake", price: "₹175", image: "/images/bb.webp" },
  { name: "Mango Doi", price: "₹140", image: "/images/md.webp" },
  { name: "Chocolate cake", price: "₹145", image: "/images/cc.webp" },
  { name: "Coffee latte", price: "₹115", image: "/images/cl.webp" },
  { name: "Hot n Sour Soup", price: "₹125", image: "/images/soup.webp" },
  { name: "Cold Coffee", price: "₹125", image: "/images/ccc.webp" },
  { name: "Mango Sunade", price: "₹125", image: "/images/ms.webp" },
  { name: "Masala Dosa", price: "₹155", image: "/images/mdo.webp" },
  { name: "Idli Sambhar", price: "₹185", image: "/images/idl.webp" },
  { name: "Aglio-e-olio", price: "₹185", image: "/images/ag.webp" },
  { name: "Hummus Platter", price: "₹190", image: "/images/hump.webp" },
  { name: "Mocha Tea", price: "₹175", image: "/images/mocha.webp" },
  { name: "Noodles & Munchurian", price: "₹195", image: "/images/nwm.webp" },
  { name: "RiceBalls With Sambhar", price: "₹210", image: "/images/riceball.webp" },
  { name: "Paneer Platter", price: "₹185", image: "/images/paneer.webp" },
  { name: "Mango Shake", price: "₹190", image: "/images/man.webp" },
  { name: "Red Velvet Cake", price: "₹195", image: "/images/rvc.webp" },
  { name: "Hot Chocolate", price: "₹195", image: "/images/hotc.webp" },
  { name: "SouthWestern Salad", price: "₹190", image: "/images/sws.webp" },
  { name: "Salad", price: "₹190", image: "/images/sd.webp" },
  { name: "Chocholate Cookie", price: "₹195", image: "/images/Chc.webp" },
  { name: "BBQ Paneer Steak", price: "₹195", image: "/images/ps.webp" },
  { name: "Parmesan Pesto", price: "₹225", image: "/images/pps.webp" },
  { name: "Lotus Biscoff Cheesecake", price: "₹245", image: "/images/lbc.webp" },
  { name: "Brownie Ice Cream", price: "₹285", image: "/images/bice.webp" },
  { name: "Icea Americano", price: "₹265", image: "/images/icea.webp" },
  { name: "Filtered Tea", price: "₹295", image: "/images/ft.webp" },
  { name: "Pasta Arrabbiata", price: "₹265", image: "/images/pas.webp" },
  { name: "Cheese Burger", price: "₹285", image: "/images/cbs.webp" },
];

export default function FullMenuPage() {
  return (
    <section className="relative min-h-screen bg-[#fafafa] text-[#1a1a1a] px-5 md:px-20 py-24">
      
      {/* Floating Back Button */}
      <Link href="/">
        <motion.button
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1, x: -4 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 left-6 z-50 flex items-center gap-2 bg-black/90 backdrop-blur-lg shadow-xl border border-black/5 rounded-full px-5 py-3 text-sm font-semibold text-white"
        >
          <ArrowLeft size={18} />
          Home
        </motion.button>
      </Link>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
          Our Menu
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto text-lg">
          Crafted with love, served with passion — discover your next favorite.
        </p>
      </motion.div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-[1400px] mx-auto">
        {menu.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.02 }}
            whileHover={{ y: -6 }}
            className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all overflow-hidden group"
          >
            <div className="relative overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[220px] object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            <div className="p-6 flex flex-col gap-1">
              <h3 className="text-lg font-semibold tracking-tight">
                {item.name}
              </h3>
              <p className="text-[#8b5e3c] font-semibold text-base">
                {item.price}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <CollaborationPage />
    </section>
  );
}
