// src/components/eggsCardBox.tsx
import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Send, X } from "lucide-react";
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
            src={egg.image_link}
            alt={egg.name}
            width={460}
            height={300}
            draggable={false}
            className="object-cover"
          />
          <div className="mt-0 flex h-full w-full flex-col gap-9 px-4">
            <div className="mt-0 flex w-full gap-9 px-4">
              <div className="flex flex-col gap-4">
                <CardTitle className="text-2xl font-bold text-text">
                  {egg.name}
                </CardTitle>
                <div className="flex flex-col rounded-t-xl">
                  <h3 className="font-inter text-lg font-bold text-text">
                    Descrição
                  </h3>
                  <p className="font-inter text-lg text-text">
                    {egg.description}
                  </p>
                </div>

                <div className="flex items-center justify-start pt-2">
                  <p className="text-3xl font-semibold text-text">
                    <strong className="text-primary">R$ {egg.price}</strong>
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-around">
                <p className="flex w-[95px] items-center justify-center rounded-md bg-third p-1 px-5 font-inter text-base text-text">
                  <strong></strong> {egg.type}
                </p>
                <p className="flex w-[95px] items-center justify-center rounded-md bg-third p-1 px-5 font-inter text-base text-text">
                  <strong></strong> {egg.grams}
                </p>
                <p className="flex w-[95px] items-center justify-center rounded-md bg-third p-1 px-5 font-inter text-base text-text">
                  <strong></strong> {egg.bark}
                </p>
              </div>
            </div>
            <section className="flex gap-4 px-4">
              <Button className="w-full">
                <Send size={20} className="mr-2" />
                Encomendar
              </Button>
              <Button className="w-full">Teste</Button>
            </section>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EggsCardBox;
