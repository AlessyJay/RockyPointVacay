import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { DetailLinks } from "@/lib";

const Details = () => {
  return (
    <div className="max-sm:my-10 max-sm:w-full">
      {DetailLinks.map((item) => {
        return (
          <Card
            key={item.id}
            id={item.id.toString()}
            className="flex flex-col items-center justify-center border-none shadow-none"
          >
            <CardHeader>
              <Image
                src={item.image}
                alt="cover photo"
                width={180}
                height={180}
                className="rounded-full object-contain"
              />
            </CardHeader>
            <CardContent>
              <p className="text-center">{item.desc}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default Details;
