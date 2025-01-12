"use client";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselPrevious,
} from "@/components/ui/carousel";
import eggsData from "@/src/data/eggsData";
import Image from "next/image";

interface EggsCardProps {
  id: string;
  name: string;
  description: string;
  bark: string;
  price: string;
  grams: string;
  ingredients: string;
  type: string;
}

const EggsCard: React.FC<EggsCardProps> = () => {
  return (
    <section className="flex w-full flex-col bg-background pl-2 pt-5">
      <div className="h-full w-full">
        <Carousel opts={{ align: "start" }} className="w-full">
          <CarouselContent className="w-[220px]">
            {eggsData.slice(0, 4).map((egg) => (
              <CarouselItem
                key={egg.id}
                className="flex items-center justify-center bg-transparent md:basis-1/2 lg:basis-1/3"
              >
                <div>
                  <Card className="border-transparent bg-secundary p-2">
                    <CardContent className="flex w-[180px] flex-col p-0">
                      <Image
                        src={!!egg.image_link ? egg.image_link.toString() : ""}
                        alt={egg.name}
                        width={155}
                        height={155}
                        draggable="false"
                        className="block w-full rounded-xl"
                      />
                      <div className="flex flex-col gap-2 pt-2">
                        <h2 className="font-inter select-none text-xl font-bold text-[#dee2e6]">
                          {egg.name}
                        </h2>
                        <div className="flex items-center justify-between">
                          <p className="bg-third select-none rounded-md px-3 py-1 text-xs text-[#dee2e6]">
                            {egg.bark}
                          </p>
                          <p className="bg-third select-none rounded-md px-3 py-1 text-xs text-[#dee2e6]">
                            {egg.grams}
                          </p>
                          <p className="bg-third select-none rounded-md px-3 py-1 text-xs text-[#dee2e6]">
                            {egg.type}
                          </p>
                        </div>
                        <p className="select-none text-sm text-[#dee2e6]">
                          {egg.price}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default EggsCard;
