"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu } from "lucide-react";

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        isScrolled
          ? "border-b border-gray-800 bg-gray-900/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white">
            Puerto Peñasco
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/properties">Properties</NavLink>
            <NavLink href="/gallery">Gallery</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>

          <div className="flex items-center gap-4">
            <Button className="bg-teal-500 text-white hover:bg-teal-600">
              Book Now
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="size-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <div className="bg-gray-900 px-4 pb-3 pt-2">
            <NavLink href="/" mobile>
              Home
            </NavLink>
            <NavLink href="/properties" mobile>
              Properties
            </NavLink>
            <NavLink href="/gallery" mobile>
              Gallery
            </NavLink>
            <NavLink href="/contact" mobile>
              Contact
            </NavLink>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}

function NavLink({
  href,
  children,
  mobile = false,
}: {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`text-gray-300 transition-colors hover:text-teal-400 ${
        mobile ? "block py-2" : ""
      }`}
    >
      {children}
    </Link>
  );
}
