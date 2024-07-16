import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="mb-10 flex flex-col space-y-5">
      <div>
        <h1 className="text-center text-4xl">
          So, what is Puerto Peñasco exactly?
        </h1>
      </div>

      <div className="w-full border" />

      <div className="flex justify-between py-10">
        <Image
          src="/images/PuertoPeasco.png"
          alt="beach photo"
          width={120}
          height={120}
          className="size-[140px] rounded-full border-4 border-primary object-contain"
        />

        <div className="w-1/2">
          <h1 className="text-start">
            <span className="text-[22px]">Puerto Peñasco</span> is a great
            destination year round. Winter season gives you the opportunity to
            have the beaches to yourself, enjoy whale watching.
          </h1>
        </div>
      </div>

      <div className="w-full border" />

      <div className="flex justify-between py-10">
        <Image
          src="/images/beach.png"
          alt="beach photo"
          width={120}
          height={120}
          className="size-[140px] rounded-full border-4 border-primary object-contain"
        />

        <div className="w-1/2">
          <h1 className="text-start">
            Spring break and Semana Santa jolts the town back into action.
            Summer brings all the beach lovers to enjoy the warm tranquil waters
            of the sea. Fall season is full of sand dune activities for everyone
            to enjoy.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
