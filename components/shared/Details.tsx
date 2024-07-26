import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { DetailLinks } from "@/lib";

const Details = () => {
  return (
    <div>
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
