import "./globals.css";
import { ReactNode } from "react";
import Navbar from "./components/Navbar";


export const metadata = {
  title: "Meridian Cafe",
  description: "Sip Savor Repeat — Minimalist Coffee Experience",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body >
        {/* Fixed Navbar */}
        <div className="fixed top-0 left-0 w-full z-50">
          <Navbar />
        </div>

        {/* Main Content (with top padding so it doesn't hide under navbar) */}
        <main className="px-6 md:px-20 pt-24">{children}</main>
      </body>
    </html>
  );
}
