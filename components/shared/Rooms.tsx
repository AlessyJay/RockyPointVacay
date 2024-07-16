import Image from "next/image";
import React from "react";

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
      </div>
    </div>
  );
};

export default Rooms;
