"use client";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
} from "@/components/ui/carousel";

const EggsCard = () => {
  return (
    <section className="flex w-full flex-col bg-background">
      <div className="w-full py-3">
        <Carousel
          opts={{
            align: "start",
          }}
          className="h-full w-full"
        >
          <CarouselContent className="h-full w-[170px]">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="w-full">
                  <Card className="h-[150px] w-[150px]">
                    <CardContent className="flex aspect-square flex-col items-center justify-between">
                      <span className="text-3xl font-semibold">img</span>
                    </CardContent>
                  </Card>
                  <div className="relative top-[-10px] h-full w-[150px] rounded-b-md bg-primary">
                    teste
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          {/* <CarouselNext /> */}
        </Carousel>
      </div>
    </section>
  );
};

export default EggsCard;
