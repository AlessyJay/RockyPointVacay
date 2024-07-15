import { Home, BookImage, CreditCard, Phone } from "lucide-react";

export const NavLinks = [
  {
    id: 1,
    title: "Home",
    value: "home",
    path: "/",
    icon: Home,
  },
  {
    id: 2,
    title: "Gallery",
    value: "gallery",
    path: "/gallery",
    icon: BookImage,
  },
  {
    id: 3,
    title: "Booking",
    value: "booking",
    path: "/booking",
    icon: CreditCard,
  },
  {
    id: 4,
    title: "Contact Us",
    value: "contact",
    path: "/contact",
    icon: Phone,
  },
];

export const DetailLinks = [
  {
    id: 1,
    image: "/images/drinking.png",
    desc: `Create memories of a lifetime in the warm tranquil
            waters of the Sea of Cortez, and relax on gorgeous sandy beaches.`,
  },
  {
    id: 2,
    image: "/images/restaurant.png",
    desc: `Explore the night clubs and restaurants for entertainment.`,
  },
  {
    id: 3,
    image: "/images/jet_ski.png",
    desc: `Check out the many water and land activities, including jet ski, horse riding or ATV rentals.`,
  },
];
