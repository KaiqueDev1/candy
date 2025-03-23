import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import Order from "../Contact/order";
import { MoveLeftIcon } from "lucide-react";
interface OrderProps {
  egg: {
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
  onClose: () => void;
}

const EggsCardBox: React.FC<OrderProps> = ({ egg, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex h-full items-center justify-center bg-background">
      <Card className="h-full w-full rounded-none border-none md:w-[600px]">
        <MoveLeftIcon size={30} onClick={onClose} className="m-2" />

        <CardContent className="flex h-full flex-col gap-4 overflow-y-auto p-0">
          <Image
            src={egg.image}
            alt={egg.name}
            width={460}
            height={360}
            draggable={false}
            className="rounded-3xl p-2"
          />
          <div className="mt-0 flex h-full w-full gap-9 px-1">
            <div className="mt-0 flex w-full flex-col gap-3 px-4">
              <div className="mb-4 flex items-center justify-between gap-4">
                <CardTitle className="rounded-xl font-inter text-2xl font-semibold text-text">
                  {egg.name}
                </CardTitle>
                <h3 className="flex gap-2 font-playwrite text-base font-bold text-primary">
                  R${egg.price}
                </h3>
              </div>

              <div className="flex flex-col">
                <p className="font-poppins text-lg font-normal text-text">
                  {egg.description}
                </p>
              </div>
              <div className="flex items-center justify-evenly">
                <p className="select-none rounded-full bg-secundary px-5 py-2 font-poppins text-base font-medium text-primary">
                  {egg.grams}
                </p>
                <p className="select-none rounded-full bg-secundary px-5 py-2 font-poppins text-base font-medium text-primary">
                  {egg.chocolate}
                </p>
                <p className="select-none rounded-full bg-secundary px-5 py-2 font-poppins text-base font-medium text-primary">
                  {egg.type}
                </p>
              </div>
              <div className="py-3"></div>
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
