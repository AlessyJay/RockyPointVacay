import About from "@/components/shared/About";
import Details from "@/components/shared/Details";
import Rooms from "@/components/shared/Rooms";
import Testimonials from "@/components/shared/testimonials";
import { Button } from "@/components/ui/button";
import { InfiniteMovingCards } from "@/components/ui/infiniteScrollCards";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <main className="relative overflow-hidden p-10">
      <div className="mt-16 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center xl:mt-36 xl:h-screen">
          <h1 className="relative z-10 mb-5 text-center max-sm:text-7xl md:text-7xl xl:w-3/4 xl:text-8xl">
            Welcome to Puerto Peñasco
          </h1>

          <p className="relative z-10 my-8 text-center text-xl md:text-2xl xl:text-3xl">
            Luxury condos in the beautiful Bella Sirena & Princesa Resorts
          </p>

          <Button className="relative z-10 text-lg font-semibold max-sm:w-1/2 xl:mb-24 xl:h-[2em] xl:w-1/2 xl:text-3xl">
            Let&apos;s get started!
          </Button>

          <Image
            src="https://i.ibb.co/pvkTx69/penasco.jpg"
            alt="image"
            width={500}
            height={500}
            className="mb-10 mt-16 size-[300px] overflow-hidden rounded-2xl border-4 border-primary md:size-[30rem] xl:size-[50em]"
            priority
          />
        </div>

        <h1 className="rounded-md p-3 text-2xl font-semibold">Activities</h1>

        <Details />

        {/* About section */}
        <Image
          src="https://i.ibb.co/BsxtgDP/Drawline.png"
          alt="draw line"
          width={350}
          height={350}
          className="size-auto object-cover"
        />

        <About />

        {/* Testimonials section */}
        <Testimonials />
        <InfiniteMovingCards
          items={[
            {
              quote:
                "The condos location was a short walk to the beach and stocked with everything we needed for our 5 day stay. The grounds at Bella Sirena are beautiful and well maintained. Luis and Cindy responded quickly the couple time I reached out to them. I would definately rent from them again. Thanks again and we had a great time.",
              name: "Sean",
              title: "Stayed with kids",
              star: 5,
            },
            {
              quote:
                "had a good stay, host was very responsive , staff was awesome.",
              name: "Jeremy",
              title: "Stayed with kids",
              star: 5,
            },
            {
              quote:
                "Beautiful and so quiet. All staff very nice. Views are Amazing. Thank you so much",
              name: "Irma",
              title: "Stayed with kids",
              star: 5,
            },
            {
              quote:
                "It was the perfect condo! Awesome amenities and the most comfortable beds after a day spent in the sun. It’s a great space with amazing views of the pool, beach and ocean.",
              name: "Kayla",
              title: "Stayed with kids",
              star: 5,
            },
          ]}
          speed="slow"
          className="mb-10"
        />

        {/* Room section */}
        <Rooms />
      </div>
    </main>
  );
};

export default Home;
