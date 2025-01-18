"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import eggsData from "@/src/data/eggsData";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import EggsCardBox from "./eggsCardBox";
import { StaticImageData } from "next/image";

interface EggsCardProps {
  id: string;
  name: string;
  description: string;
  bark: string;
  price: string;
  priceC: string;
  grams: string;
  ingredients: string;
  type: string;
  image_link: StaticImageData;
  image_linkC?: StaticImageData;
}

const EggsCard: React.FC = () => {
  const [selectedEgg, setSelectedEgg] = useState<EggsCardProps | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (egg: EggsCardProps) => {
    setSelectedEgg(egg);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedEgg(null);
    setIsModalOpen(false);
  };

  // Dividir os dados em grupos de 4 itens para cada carrossel
  const groupedEggs = eggsData.reduce<EggsCardProps[][]>(
    (groups, egg, index) => {
      const groupIndex = Math.floor(index / 4);
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
      {groupedEggs.map((group, groupIndex) => (
        <div key={groupIndex} className="mb-6 h-full w-full">
          <Carousel opts={{ align: "start" }} className="w-full">
            <CarouselContent className="w-[205px]">
              {group.map((egg) => (
                <CarouselItem
                  key={egg.id}
                  className="flex-center flex justify-center bg-transparent md:basis-1/2 lg:basis-1/3"
                >
                  <div>
                    <Card className="border-transparent bg-secundary p-2">
                      <CardContent className="flex w-[180px] flex-col p-0">
                        <Image
                          src={egg.image_link}
                          alt={egg.name}
                          width={155}
                          height={155}
                          draggable={false}
                          className="block w-full rounded-xl"
                        />
                        <div className="flex flex-col gap-2 pt-2">
                          <div className="flex items-center justify-center">
                            <h2 className="select-none font-inter text-xl font-bold text-text">
                              {egg.name}
                            </h2>
                          </div>
                          <div className="flex items-center justify-evenly">
                            <p className="select-none rounded-md bg-third px-3 py-1 text-xs text-text">
                              {egg.bark}
                            </p>
                            <p className="select-none rounded-md bg-third px-3 py-1 text-xs text-text">
                              {egg.grams}
                            </p>
                          </div>
                          <div className="flex items-center justify-between pt-2">
                            <p className="select-none text-xl font-semibold text-text">
                              <strong className="select-none text-lg font-semibold text-primary">
                                R$
                              </strong>{" "}
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
      ))}

      {isModalOpen && selectedEgg && (
        <EggsCardBox egg={selectedEgg} onClose={handleCloseModal} />
      )}
    </section>
  );
};

export default EggsCard;
