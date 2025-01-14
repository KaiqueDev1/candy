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
  const handleWhatsAppClick = () => {
    const mensagem = `Olá, gostaria de fazer um pedido de um ovo ${egg.type} de ${egg.name}, no valor de R$ ${egg.price}!`;
    const encodedMessage = encodeURIComponent(mensagem);
    const url = `https://api.whatsapp.com/send?phone=5511919462746&text=${encodedMessage}`;
    window.open(url, "_blank");
  };

  const handleInstagramClick = () => {
    const url = `https://www.instagram.com/kah_candylover`;
    window.open(url, "_blank");
  };
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
        <CardTitle className="bg-shadow2 absolute left-32 top-3 flex items-center justify-center rounded-xl px-4 py-2 font-playwrite text-lg font-medium text-primary">
          {egg.name}
        </CardTitle>
        <CardContent className="flex flex-col gap-4 p-0">
          <Image
            src={egg.image_link}
            alt={egg.name}
            width={460}
            height={300}
            draggable={false}
            className="object-cover"
          />
          <div className="mt-0 flex h-full w-full flex-col gap-9 px-1">
            <div className="mt-0 flex w-full gap-9 px-4">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2 rounded-t-xl">
                  <h3 className="font-inter font-semibold text-text">
                    Descrição
                  </h3>
                  <p className="font-poppins text-fourth text-base font-light">
                    {egg.description}
                  </p>
                </div>
                <div className="flex items-center justify-start">
                  <p className="text-3xl font-semibold text-text">
                    <strong className="text-primary">R$ {egg.price}</strong>
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-around">
                <p className="font-poppins flex w-[95px] items-center justify-center rounded-md bg-third p-1 px-5 text-sm font-light text-text">
                  <strong></strong> {egg.type}
                </p>
                <p className="font-poppins flex w-[95px] items-center justify-center rounded-md bg-third p-1 px-5 text-sm font-light text-text">
                  <strong></strong> {egg.grams}
                </p>
                <p className="font-poppins flex w-[95px] items-center justify-center rounded-md bg-third p-1 px-5 text-sm font-light text-text">
                  <strong></strong> {egg.bark}
                </p>
              </div>
            </div>
            <section className="flex gap-4 px-4">
              <Button
                className="bg-whatsapp w-full"
                onClick={handleWhatsAppClick}
              >
                <Send size={20} className="mr-2" />
                Encomendar
              </Button>
              <Button
                className="bg-instagram w-full"
                onClick={handleInstagramClick}
              >
                <Image
                  src="/image/instagram.png"
                  alt="Instagram"
                  width={15}
                  height={15}
                />
                Instagram
              </Button>
            </section>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EggsCardBox;
