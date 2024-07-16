import {
  BathIcon,
  BedIcon,
  Mail,
  MapPinIcon,
  ParkingMeterIcon,
  WifiIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card } from "../ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Rooms = () => {
  const rooms = [
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
  return (
    <div>
      <div className="mb-10 flex flex-col items-center">
        <h1 className="text-center text-3xl">
          Okay, you&apos;ve convinced me. How can I secure my own slice of
          paradise there?
        </h1>

        <Image
          src="/images/backpackers-trans.png"
          alt="backpackers"
          width={500}
          height={500}
        />

        {rooms.map((room) => {
          return (
            <Card
              className="my-5 w-full max-w-md overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl"
              key={room.id}
            >
              <Link
                href={`/booking/${room.value}`}
                className="group relative block"
                prefetch={false}
              >
                <Image
                  src={room.picture}
                  width={600}
                  height={400}
                  alt="Accommodation"
                  className="h-64 w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="text-xl font-medium text-white">
                    View Details
                  </span>
                </div>
              </Link>
              <div className="bg-background p-6">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{room.title}</h3>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPinIcon className="size-4" />
                    <span>{room.location}</span>
                  </div>
                </div>
                <p className="mb-4 text-muted-foreground">{room.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <BedIcon className="size-5" />
                    <span className="text-sm font-medium">
                      {room.bedroom > 1
                        ? `${room.bedroom} Bedrooms`
                        : `${room.bedroom} Bedroom`}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BathIcon className="size-5" />
                    <span className="text-sm font-medium">
                      {room.bath > 1
                        ? `${room.bath} Bathrooms`
                        : `${room.bath} Bathroom`}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <WifiIcon className="size-5" />
                    <span className="text-sm font-medium">
                      {room.freeWifi === true ? `Free WIFI` : `No WIFI`}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ParkingMeterIcon className="size-5" />
                    <span className="text-sm font-medium">
                      {room.parking === true
                        ? `Parking Available`
                        : `No Parking`}
                    </span>
                  </div>
                </div>
                <div className="my-4 w-full border" />
                <div className="flex items-center justify-between">
                  <div className="text-lg font-semibold">
                    ${room.price} / night
                  </div>
                  <Dialog>
                    <DialogTrigger>
                      <span className="rounded-md bg-primary p-3 text-white">
                        Book Now
                      </span>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle className="text-2xl">
                          How do you want to book a room?
                        </DialogTitle>
                        <div className="flex items-center justify-around gap-5 py-5">
                          {room.bookingIcon.map((icon) => (
                            <Link
                              key={icon.id}
                              href={icon.link}
                              target="_blank"
                            >
                              <Image
                                src={icon.path}
                                alt="icon"
                                width={60}
                                height={60}
                                className="rounded-lg"
                              />
                            </Link>
                          ))}
                        </div>

                        <DialogDescription>
                          Perhaps you want to talk to the owner to check
                          availability or book a room. You can follow this
                          information below.
                        </DialogDescription>
                        <div className="mt-5 flex items-center justify-center">
                          <div className="flex gap-5">
                            <Mail />
                            <h1>my.rockypointvacay@gmail.com</h1>
                          </div>
                        </div>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Rooms;
