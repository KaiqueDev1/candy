import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Order from "../Contact/order";
interface OrderProps {
  egg: {
    id: string;
    name: string;
    description: string;
    price: string;
    grams: string;
    ingredients: string;
    type: string;
    image: StaticImageData;
  };
  onClose: () => void;
}

const EggsCardBox: React.FC<OrderProps> = ({ egg, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex h-full items-center justify-center bg-background">
      <Card className="h-full w-full rounded-none border-none bg-secundary md:w-[600px]">
        <Button
          variant="ghost"
          onClick={onClose}
          className="absolute left-4 top-4 z-50 bg-shadow text-text"
        >
          <X size={30} />
        </Button>
        <CardContent className="flex h-full flex-col gap-4 overflow-y-auto p-0">
          <Image
            src={egg.image}
            alt={egg.name}
            width={460}
            height={360}
            draggable={false}
          />
          <div className="mt-0 flex h-full w-full gap-9 px-1">
            <div className="mt-0 flex w-full flex-col gap-3 px-4">
              <div className="flex flex-col gap-4">
                <CardTitle className="rounded-xl font-inter text-2xl font-medium text-primary">
                  {egg.name}
                </CardTitle>
              </div>
              <div className="flex flex-col">
                <h3 className="font-inter text-base font-semibold text-primary">
                  Descrição:
                </h3>
                <p className="text-lg font-light text-text">
                  {egg.description}
                </p>
              </div>

              <div className="py-3">
                <h3 className="flex gap-2 text-xl font-normal text-text">
                  R${egg.price}
                </h3>
              </div>
              {
                <Order
                  egg={{
                    id: egg.id,
                    name: egg.name,
                    description: egg.description,
                    price: egg.price,
                    grams: egg.grams,
                    ingredients: egg.ingredients,
                    type: egg.type,
                    image: egg.image,
                  }}
                />
              }
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EggsCardBox;
