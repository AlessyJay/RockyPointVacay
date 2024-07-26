import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { rooms } from "@/lib";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  Bath,
  Bed,
  Wifi,
  ParkingMeter,
  Waves,
  Dumbbell,
  BadgeDollarSign,
  User2,
  Mail,
} from "lucide-react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";

const Booking = ({ params }: { params: any }) => {
  return (
    <>
      <div className="mx-auto min-h-screen max-w-6xl content-center px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        {rooms.map(
          (item) =>
            item.value === params.id && (
              <div key={item.id}>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
                  <div>
                    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                      {item.title}
                    </h1>
                    <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
                      {item.about}
                    </p>
                    <h1 className="my-5 mt-10 text-3xl font-bold">
                      Facilities
                    </h1>
                    <div className="flex flex-wrap justify-around gap-5">
                      <div className="flex content-center gap-2 text-muted-foreground">
                        <User2 />
                        <span>{item.capacity} Person</span>
                      </div>
                      <div className="flex content-center gap-2 text-muted-foreground">
                        <Bed />
                        <span>
                          {item.bedroom} Rooms / {item.bed} Beds
                        </span>
                      </div>
                      <div className="flex content-center gap-2 text-muted-foreground">
                        <Bath />
                        <span>{item.bath} Bathrooms</span>
                      </div>
                      <div className="flex content-center gap-2 text-muted-foreground">
                        <ParkingMeter />
                        <span>
                          {item.parking === true
                            ? "Parking Available"
                            : "No Parking Provided"}
                        </span>
                      </div>
                      <div className="flex content-center gap-2 text-muted-foreground">
                        <Wifi />
                        <span>
                          {item.freeWifi === true ? "Free Wifi" : "No Wifi"}
                        </span>
                      </div>
                      <div className="flex content-center gap-2 text-muted-foreground">
                        <Dumbbell />
                        <span>
                          {item.gym === true
                            ? "Gym Available"
                            : "No Gym Available"}
                        </span>
                      </div>
                      <div className="flex content-center gap-2 text-muted-foreground">
                        <Waves />
                        <span>
                          {item.pool === true
                            ? "Pool Available"
                            : "No Pool Available"}
                        </span>
                      </div>
                    </div>

                    <div>
                      <h1 className="my-5 mt-10 text-3xl font-bold">Book</h1>
                      <div className="flex flex-wrap justify-between">
                        <div className="flex gap-2 text-muted-foreground">
                          <BadgeDollarSign />
                          <span>${item.price}/Night</span>
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
                                {item.bookingIcon.map((icon) => (
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

                      <div className="my-3 flex justify-between gap-2 text-muted-foreground">
                        <span className="flex gap-1">
                          <Image
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/188px-Flag_of_Mexico.svg.png"
                            alt="Mexico flag"
                            width={30}
                            height={30}
                            className="rounded-md object-cover"
                          />
                          {item.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <Carousel className="relative overflow-hidden rounded-xl max-lg:w-fit">
                      <CarouselContent>
                        {item.picture.map((pic) => (
                          <CarouselItem key={pic}>
                            <Image
                              src={pic}
                              width={800}
                              height={400}
                              quality={100}
                              alt="Room Image"
                              priority
                              className="size-full object-cover"
                            />
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-white hover:text-primary focus:text-primary">
                        <ChevronLeftIcon className="size-8" />
                      </CarouselPrevious>
                      <CarouselNext className="absolute right-4 top-1/2 z-10 -translate-y-1/2 text-white hover:text-primary focus:text-primary">
                        <ChevronRightIcon className="size-8" />
                      </CarouselNext>
                    </Carousel>
                  </div>
                </div>
              </div>
            ),
        )}
      </div>
    </>
  );
};

export default Booking;
