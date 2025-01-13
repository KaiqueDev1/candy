// src/components/eggsCardBox.tsx
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Image from "next/image";
import { StaticImageData } from "next/image";
interface EggsCardBoxProps {
  egg: {
    id: string;
    name: string;
    image_link: StaticImageData;
    description: string;
    bark: string;
    price: string;
    grams: string;
    ingredients: string;
    type: string;
  };
  onClose: () => void;
}

const EggsCardBox: React.FC<EggsCardBoxProps> = ({ egg, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <Card className="w-[90%] bg-secundary md:w-[600px]">
        <CardHeader className="relative">
          <CardTitle>{egg.name}</CardTitle>
          <Button
            variant="ghost"
            onClick={onClose}
            className="absolute right-2 top-2"
          >
            <X />
          </Button>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 p-4 md:flex-row">
          <div className="w-full md:w-1/2">
            <Image
              src={egg.image_link}
              alt={egg.name}
              width={350}
              height={350}
              className="mx-auto rounded-xl"
              draggable={false}
            />
          </div>
          <div className="flex w-full flex-col gap-3 md:w-1/2">
            <div className="flex flex-col">
              <h3 className="text-lg font-bold text-text">Descrição</h3>
              <p className="text-lg text-text">{egg.description}</p>
            </div>
            <p className="text-lg text-text">
              <strong>Ingredientes:</strong> {egg.ingredients}
            </p>
            <div className="flex items-center justify-around">
              <p className="text-lg text-text bg-third p-1 px-5 rounded-md">
                <strong></strong> {egg.type}
              </p>
              <p className="text-lg text-text bg-third p-1 px-5 rounded-md">
                <strong></strong> {egg.grams}
              </p>
              <p className="text-lg text-text bg-third p-1 px-5 rounded-md">
                <strong></strong> {egg.bark}
              </p>
            </div>
            <p className="text-xl font-semibold">
              Preço: <strong className="text-primary">R$ {egg.price}</strong>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EggsCardBox;
