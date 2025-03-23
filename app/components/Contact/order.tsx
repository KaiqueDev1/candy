import { Button } from "@/components/ui/button";
import { Eye, Send } from "lucide-react";
import { StaticImageData } from "next/image";

interface EggsCardBoxProps {
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
}

const Order: React.FC<EggsCardBoxProps> = ({ egg }) => {
  const handleWhatsAppClick = () => {
    const mensagem = `Olá, gostaria de fazer um pedido de um ovo ${egg.type} de ${egg.name}, no valor de R$ ${egg.price}!`;
    const encodedMessage = encodeURIComponent(mensagem);
    const url = `https://api.whatsapp.com/send?phone=5511919462746&text=${encodedMessage}`;
    window.open(url, "_blank");
  };
  const handleInstagramClick = () => {
    const url = `https://www.instagram.com/kah_candylover/`;
    window.open(url, "_blank");
  };

  return (
    <section className="flex gap-2">
      <Button
        className="flex w-full items-center justify-center bg-whatsapp font-inter text-base font-semibold text-secundary hover:text-text"
        onClick={handleWhatsAppClick}
      >
        <Send size={20} className="mr-2" />
        Encomendar
      </Button>
      <Button
        className="flex w-full items-center justify-center bg-instagram font-inter text-base font-semibold text-secundary hover:text-text"
        onClick={handleInstagramClick}
      >
        <Eye size={20} className="mr-2" />
        Ver mais
      </Button>
    </section>
  );
};

export default Order;
