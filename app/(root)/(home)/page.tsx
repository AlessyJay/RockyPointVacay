"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Palmtree, Waves, Sun, ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { AboutSection } from "@/components/shared/About";

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      className="rounded-lg bg-gray-800 p-6 transition-shadow hover:shadow-lg"
      whileHover={{ y: -5 }}
    >
      <div className="mb-4 text-teal-400">{icon}</div>
      <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
}

function PropertyCard({
  title,
  image,
  description,
}: {
  title: string;
  image: string;
  description: string;
}) {
  return (
    <motion.div
      className="group relative cursor-pointer overflow-hidden rounded-lg"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        width={800}
        height={600}
        className="aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent transition-opacity group-hover:opacity-90">
        <div className="absolute inset-x-0 bottom-0 p-6">
          <h3 className="mb-2 text-2xl font-medium text-white">{title}</h3>
          <p className="mb-4 text-sm text-gray-300 opacity-0 transition-opacity group-hover:opacity-100">
            {description}
          </p>
          <Button
            variant="secondary"
            size="sm"
            className="group bg-teal-500 text-white hover:bg-teal-600"
          >
            View Details
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="https://images.pexels.com/photos/1045113/pexels-photo-1045113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Puerto Peñasco Beach"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent">
          <div className="container mx-auto flex h-full flex-col items-center justify-center px-4 text-center">
            <motion.h1
              className="mb-6 text-5xl font-bold md:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Welcome to Puerto Peñasco
            </motion.h1>
            <motion.p
              className="mb-8 max-w-2xl text-xl md:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Luxury condos in the beautiful Bella Sirena & Princesa Resorts
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button
                size="lg"
                className="bg-teal-500 text-white hover:bg-teal-600"
              >
                Book Your Stay
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            className="mb-12 text-center text-4xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Experience Paradise
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 gap-8 md:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
            viewport={{ once: true }}
          >
            <FeatureCard
              icon={<Palmtree className="size-10" />}
              title="Beachfront Location"
              description="Direct access to Sandy Beach, the most popular beach in Puerto Peñasco"
            />
            <FeatureCard
              icon={<Waves className="size-10" />}
              title="Ocean Views"
              description="Unobstructed views of the Sea of Cortez from your private balcony"
            />
            <FeatureCard
              icon={<Sun className="size-10" />}
              title="Resort Amenities"
              description="Multiple pools, hot tubs, and direct beach access"
            />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Properties Section */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            className="mb-12 text-center text-4xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Properties
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 gap-8 md:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
            viewport={{ once: true }}
          >
            <PropertyCard
              title="Vista del Mar I"
              image="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              description="Stunning beachfront condo with unobstructed ocean views and modern amenities."
            />
            <PropertyCard
              title="Vista del Mar II"
              image="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              description="Spacious two-bedroom unit perfect for families, featuring a fully equipped kitchen."
            />
            <PropertyCard
              title="Princesa"
              image="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              description="Luxury suite with premium furnishings and breathtaking sunset views."
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
