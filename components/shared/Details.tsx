import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { DetailLinks } from "@/lib";

const Details = () => {
  return (
    <div>
      <div className="overflow-y-hidden">
        <Image
          src="/images/wine_trans.png"
          alt="wine"
          width={350}
          height={350}
          className="absolute inset-x-0 top-[50rem] -z-10 w-full overflow-y-hidden opacity-45"
        />
        <Image
          src="/images/people-trans.png"
          alt="people"
          width={400}
          height={400}
          className="absolute -left-28 top-[78rem] -z-10 w-full opacity-45 md:top-[90rem] md:w-2/3"
        />
        <Image
          src="/images/horsingRiding-trans.png"
          alt="horse"
          width={350}
          height={350}
          className="absolute -right-36 top-[103rem] -z-10 w-full overflow-y-hidden opacity-45 md:-right-52 md:w-2/3"
        />
      </div>
      {DetailLinks.map((item) => {
        return (
          <Card
            key={item.id}
            id={item.id.toString()}
            className="flex flex-col items-center justify-center border-none bg-transparent shadow-none"
          >
            <CardHeader>
              <Image
                src={item.image}
                alt="cover photo"
                width={180}
                height={180}
                className="rounded-full border-4 border-primary object-cover md:size-[15em]"
              />
            </CardHeader>
            <CardContent>
              <p className="text-center md:text-xl">{item.desc}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default Details;
