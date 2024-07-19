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

export const rooms = [
  {
    id: "1",
    title: "Vista Del Mar I",
    picture: "/images/room202.webp",
    description:
      "Decorated in a seaside motif with Mexican charm and colors. This 2 bedroom 2 bath unit features a master suite with king size Tempur-pedic bed and a full bath, including tub with additional shower and walk in closet. Second bedroom has a queen size bed, we also have a queen size sleeper sofa for additional guest. Full second bathroom as well with walking shower. A full kitchen is available with all the cooking utensils needed. A full dinner table is available for a great family gathering. This beautiful condo is furnished with traditional Mexican furniture and tasteful décor.",
    location: "Puerto Peñasco, MX",
    bedroom: 2,
    bed: 3,
    bath: 2,
    price: 215,
    freeWifi: true,
    parking: true,
    bookingIcon: [
      {
        id: "1",
        path: "/images/Airbnb.png",
        link: "https://www.airbnb.com/rooms/27932429?source_impression_id=p3_1721170071_P3cZY63xxQjF2f9y",
      },
      {
        id: "2",
        path: "/images/vrbo.png",
        link: "https://www.vrbo.com/1428754?unitId=1987266",
      },
    ],
    value: "Room202",
  },
  {
    id: "2",
    title: "Vista Del Mar II",
    picture: "/images/room202.webp",
    description:
      "A modern touch of elegance awaits you in this condo. This 2 bedroom 2 bath unit features a master suite with king size Tempur-Pedic bed and a full bath, including tub with additional shower and walk in closet. Second bedroom has a queen size Tempur-Pedic bed, we also have a queen size sleeper sofa for additional guest. Full second bathroom as well with walking shower. A full kitchen is available with all the cooking utensils needed. A full dinner table is available for a great family gathering. This beautiful condo is furnished with tasteful décor in a relaxing atmosphere.",
    location: "Puerto Peñasco, MX",
    bedroom: 2,
    bed: 3,
    bath: 2,
    price: 225,
    freeWifi: true,
    parking: true,
    bookingIcon: [
      {
        id: "1",
        path: "/images/Airbnb.png",
        link: "https://www.airbnb.com/rooms/41171133?source_impression_id=p3_1721170118_P3bzu7kAd6TR1RYl",
      },
      {
        id: "2",
        path: "/images/vrbo.png",
        link: "https://www.vrbo.com/1863393?unitId=2425902",
      },
    ],
    value: "Room402",
  },
  {
    id: "3",
    title: "Vista Del Mar III",
    picture: "/images/room202.webp",
    description:
      "The feeling of being at your sea side home awaits you in this condo. This 2 bedroom 2 bath unit features a master suite with king size bed and a full bath, including a walk-in shower. Second bedroom has a queen size bed. The second bathroom also has a walk-in shower. A full kitchen is available with all the cooking utensils needed. Enjoy having breakfast, lunch or dinner with your family. This beautiful condo is furnished with tasteful décor of old Mexico all in a relaxing atmosphere.",
    location: "Puerto Peñasco, MX",
    bedroom: 2,
    bed: 2,
    bath: 2,
    price: 194,
    freeWifi: false,
    parking: true,
    bookingIcon: [
      {
        id: "1",
        path: "/images/Airbnb.png",
        link: "https://www.airbnb.com/rooms/857919258136088861?source_impression_id=p3_1721170153_P3J826dT-d5NCvYF",
      },
      {
        id: "2",
        path: "/images/vrbo.png",
        link: "https://www.vrbo.com/3327396?unitId=3900521",
      },
    ],
    value: "Room408",
  },
];
