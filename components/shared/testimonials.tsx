import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <div className="mb-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center text-4xl">
          Let&apos;s see what our travellers said
        </h1>
      </div>

      <div className="mt-10 flex justify-center">
        <Image
          src="/images/golden-leaf.avif"
          alt="golden leaf left"
          width={70}
          height={70}
        />
        <h1 className="text-[6rem] font-bold">4.97</h1>
        <Image
          src="/images/golden-leaf-right.avif"
          alt="golden leaf right"
          width={70}
          height={70}
        />
      </div>

      <h1 className="text-center">
        <span className="mt-10 text-2xl">Guest favorite</span> <br />
        This home is in the <span className="font-semibold">top 5%</span> of
        eligible listings based on ratings, reviews, and reliability
      </h1>
    </div>
  );
};

export default Testimonials;
