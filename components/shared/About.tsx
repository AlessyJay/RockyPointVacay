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

      <hr className="w-full border-gray-300" />

      <div>
        <section className="p-8 max-sm:p-0">
          <div className="mx-auto max-w-4xl">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <Image
                  src="/images/PuertoPeasco.png"
                  alt="beach photo"
                  width={120}
                  height={120}
                  className="size-[140px] rounded-full border-4 border-primary object-contain md:size-[220px]"
                />
                <div>
                  <p className="text-lg">
                    <strong>Puerto Peñasco</strong> is a great destination year
                    round. Winter season gives you the opportunity to have the
                    beaches to yourself, enjoy whale watching.
                  </p>
                </div>
              </div>
              <hr className="border-gray-300" />
              <div className="flex items-center space-x-4">
                <Image
                  src="/images/beach.png"
                  alt="beach photo"
                  width={120}
                  height={120}
                  className="size-[140px] rounded-full border-4 border-primary object-contain md:size-[220px]"
                />
                <div>
                  <p className="text-lg">
                    Spring break and Semana Santa jolts the town back into
                    action. Summer brings all the beach lovers to enjoy the warm
                    tranquil waters of the sea. Fall season is full of sand dune
                    activities for everyone to enjoy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <div className="flex items-center justify-between py-10">
          <Image
            src="/images/PuertoPeasco.png"
            alt="beach photo"
            width={120}
            height={120}
            className="size-[140px] rounded-full border-4 border-primary object-contain md:size-[220px]"
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

        <div className="flex items-center justify-between py-10">
          <Image
            src="/images/beach.png"
            alt="beach photo"
            width={120}
            height={120}
            className="size-[140px] rounded-full border-4 border-primary object-contain md:size-[220px]"
          />

          <div className="w-1/2">
            <h1 className="text-start">
              Spring break and Semana Santa jolts the town back into action.
              Summer brings all the beach lovers to enjoy the warm tranquil
              waters of the sea. Fall season is full of sand dune activities for
              everyone to enjoy.
            </h1>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;
