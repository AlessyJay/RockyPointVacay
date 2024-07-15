import Details from "@/components/shared/Details";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <main className="p-10">
      <div className="mt-16 flex flex-col items-center justify-center">
        <h1 className="mb-5 text-center max-sm:text-7xl">
          Welcome to Puerto Peñasco
        </h1>

        <p className="my-8 text-center text-xl">
          Luxury condos in the beautiful Bella Sirena & Princesa Resorts
        </p>

        <Button className="text-lg font-semibold max-sm:w-1/2">
          Let&apos;s get started!
        </Button>

        <Image
          src="/images/penasco.jpg"
          alt="image"
          width={500}
          height={500}
          className="mb-10 mt-16 size-[300px] overflow-hidden rounded-2xl border-4 border-primary"
        />

        <h1 className="text-2xl font-semibold">Activities</h1>

        <Details />
      </div>
    </main>
  );
};

export default Home;
