"use client";

import { motion } from "framer-motion";
import { MapPin, Music, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function AboutSection() {
  const features = [
    {
      icon: <MapPin className="size-6" />,
      text: "Located on Sandy Beach, Puerto Peñasco's most popular destination",
    },
    {
      icon: <Utensils className="size-6" />,
      text: "Top-rated restaurants and fresh piña coladas from beach vendors",
    },
    {
      icon: <Music className="size-6" />,
      text: "Live music and entertainment at our pool bar",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const iconVariants = {
    hidden: {
      scale: 0,
      rotate: -180,
    },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  };

  return (
    <section className="bg-gray-800 py-24">
      <div className="container mx-auto px-4">
        {/* Location Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            Experience Mexican Coastal Living
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-300">
            Conveniently located on Sandy beach, the most popular beach in
            Puerto Peñasco. Each of our condos will sweep you into the charm and
            excitements of Mexico!
          </p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 flex flex-wrap justify-center gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group flex items-center gap-4 rounded-lg bg-gray-700/50 px-6 py-4 backdrop-blur-sm hover:bg-gray-700/70"
                whileHover={{ y: -5 }}
              >
                <motion.div
                  variants={iconVariants}
                  className="flex size-12 items-center justify-center rounded-full bg-teal-500/20"
                >
                  <div className="text-teal-400">{feature.icon}</div>
                </motion.div>
                <span className="text-sm text-gray-300 transition-colors group-hover:text-teal-300">
                  {feature.text}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12"
          >
            <Button
              variant="outline"
              className="border-teal-400 text-teal-400 hover:bg-teal-400/10"
            >
              View Map
            </Button>
          </motion.div>
        </motion.div>

        {/* About Hosts */}
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] overflow-hidden rounded-lg"
          >
            <Image
              src="https://static.wixstatic.com/media/417368_9e80805f8b754268a841d5e35ad1d43f~mv2.jpg/v1/fill/w_341,h_354,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Luis-Cindy.jpg"
              alt="Hosts at sunset"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                About Cynthia & Luis
              </h2>
              <div className="h-1 w-20 bg-teal-400" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg leading-relaxed text-gray-300"
            >
              Hi, we are both IT professionals with a passion for travel to
              wonderful and new destinations. We live in Phoenix, Arizona and
              love the fact that we can jump in our car and in four short hours
              we can be on the beach enjoying the sunset.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button className="bg-teal-500 text-white hover:bg-teal-600">
                Contact Us
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
