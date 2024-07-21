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
import { rooms } from "@/lib";

const Rooms = () => {
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
            <div key={room.id}>
              <Card className="my-5 w-full max-w-md overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
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
                      <span className="line-clamp-1">{room.location}</span>
                    </div>
                  </div>
                  <p className="mb-4 text-muted-foreground">
                    {room.description}
                  </p>
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
                                  priority
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Rooms;
