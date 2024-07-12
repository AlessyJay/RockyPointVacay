import type { Metadata } from "next";
// eslint-disable-next-line camelcase
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import React from "react";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rocky Point Vacay",
  description: `Luxury condos in the beautiful Bella Sirena & Princesa Resorts
Create memories of a lifetime in the warm tranquil waters of the Sea of Cortez.
Relax on gorgeous sandy beaches, explore the night clubs and restaurants for entertainment, or check out the many water and land activities, including jet ski, horse riding or ATV rentals.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={bricolage.className}>{children}</body>
    </html>
  );
}
