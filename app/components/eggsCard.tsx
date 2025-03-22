"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import eggsData from "@/src/data/eggsData";
import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import EggsCardBox from "./details/eggsCardBox";

interface EggsProps {
  eggs: {
    id: string;
    name: string;
    description: string;
    price: string;
    chocolate: string;
    grams: string;
    ingredients: string;
    type: string;
    image: StaticImageData;
  };
}

const EggsCard: React.FC = () => {
  const [selectedEgg, setSelectedEgg] = useState<EggsProps["eggs"] | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (egg: EggsProps["eggs"]) => {
    setSelectedEgg(egg);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedEgg(null);
    setIsModalOpen(false);
  };

  // Dividir os dados em grupos de 4 itens para cada carrossel
  const groupedEggs = eggsData.reduce<EggsProps["eggs"][][]>(
    (groups: EggsProps["eggs"][][], egg: EggsProps["eggs"], index: number) => {
      const groupIndex = Math.floor(index / 3);
      if (!groups[groupIndex]) {
        groups[groupIndex] = [];
      }
      groups[groupIndex].push(egg);
      return groups;
    },
    [],
  );

  return (
    <section className="flex w-full flex-col bg-background pl-2 pt-5">
      {groupedEggs.map(
        (
          group: EggsProps["eggs"][],
          groupIndex: React.Key | null | undefined,
        ) => (
          <div key={groupIndex} className="mb-6 h-full w-full bg-background">
            <Carousel
              opts={{ align: "start" }}
              className="w-full bg-background"
            >
              <CarouselContent className="w-[205px] bg-background">
                {group.map((egg) => (
                  <CarouselItem
                    key={egg.id}
                    className="flex-center flex justify-center bg-transparent md:basis-1/2 lg:basis-1/3"
                  >
                    <div>
                      <Card className="border bg-background">
                        <CardContent className="flex w-[180px] flex-col p-0">
                          <Image
                            src={egg.image}
                            alt={egg.name}
                            width={185}
                            height={185}
                            draggable={false}
                            className="block h-[185px] w-[185px] rounded-lg object-cover"
                          />
                          <div className="flex flex-col gap-2 p-3">
                            <div className="flex items-center justify-center">
                              <h2 className="select-none font-inter text-lg font-bold text-text">
                                {egg.name}
                              </h2>
                            </div>
                            <div className="flex items-center justify-between pt-2">
                              <p className="select-none text-xl font-semibold text-text">
                                R$
                                {egg.price}
                              </p>
                              <Button
                                className="bg-primary"
                                onClick={() => handleOpenModal(egg)}
                              >
                                <Plus size={20} className="text-background" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        ),
      )}

      {isModalOpen && selectedEgg && (
        <EggsCardBox
          egg={{
            ...selectedEgg,
            image: selectedEgg.image,
          }}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
};

export default EggsCard;
