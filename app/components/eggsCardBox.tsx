// src/components/eggsCardBox.tsx
import React, { useState } from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import Order from "./Contact/order";

interface EggsCardBoxProps {
  egg: {
    id: string;
    name: string;
    image_link: StaticImageData;
    image_linkC?: StaticImageData;
    description: string;
    bark: string;
    price: string;
    priceC?: string;
    grams: string;
    ingredients: string;
    type?: string;
  };
  onClose: () => void;
}

const EggsCardBox: React.FC<EggsCardBoxProps> = ({ egg, onClose }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionsClick = (option: string) => {
    setSelectedOption(option);
  };

  const selectedImage =
    selectedOption === "de colher" && egg.image_linkC
      ? egg.image_linkC
      : egg.image_link;

  const selectedPrice =
    selectedOption === "de colher" && egg.priceC ? egg.priceC : egg.price;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <Card className="h-full w-full rounded-none border-none bg-secundary md:w-[600px]">
        <Button
          variant="ghost"
          onClick={onClose}
          className="absolute left-4 top-4 z-50 bg-shadow"
        >
          <X size={30} className="text-text" />
        </Button>

        <CardContent className="flex flex-col gap-4 p-0">
          <Image
            src={selectedImage}
            alt={egg.name}
            width={460}
            height={300}
            draggable={false}
            className="md object-cover"
          />

          <div className="mt-0 flex h-full w-full gap-9 px-1">
            <div className="mt-0 flex w-full flex-col gap-9 px-4">
              <div className="flex flex-col gap-4">
                <CardTitle className="rounded-xl font-inter text-2xl font-medium text-primary">
                  {egg.name}
                </CardTitle>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-normal text-text">Opções</h3>
                <div className="flex gap-2">
                  <Button
                    onClick={() => handleOptionsClick("trufado")}
                    style={{
                      background:
                        selectedOption === "trufado"
                          ? "rgb(242,116,149)"
                          : "#6c757d",
                    }}
                  >
                    Trufado
                  </Button>
                  <Button
                    onClick={() => handleOptionsClick("de colher")}
                    style={{
                      background:
                        selectedOption === "de colher"
                          ? "rgb(242,116,149)"
                          : "#6c757d",
                    }}
                  >
                    Ovo de colher(250g)
                  </Button>
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="font-inter text-base font-semibold text-primary">
                  Descrição:
                </h3>
                <p className="text-lg font-light text-text">
                  {egg.description}
                </p>
              </div>

              <div>
                <h3 className="flex gap-2 text-xl font-normal text-text">
                  R${" "}
                  {selectedOption ? (
                    selectedPrice
                  ) : (
                    <h3>Selecione uma opção</h3>
                  )}
                </h3>
              </div>
              {selectedOption ? (
                <Order
                  egg={{
                    id: egg.id,
                    name: egg.name,
                    image_link: selectedImage,
                    description: egg.description,
                    bark: egg.bark,
                    price: selectedPrice,
                    grams: egg.price,
                    ingredients: egg.ingredients,
                    type: selectedOption,
                  }}
                  onClose={onClose}
                />
              ) : (
                <h3 className="font-inter text-base font-semibold text-text">
                  É necessario selecionar uma opção para encomendar
                </h3>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EggsCardBox;
