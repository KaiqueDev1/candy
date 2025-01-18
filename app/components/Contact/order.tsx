import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import Image, { StaticImageData } from "next/image";
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
const Order: React.FC<EggsCardBoxProps> = ({ egg }) => {
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
    <section className="flex gap-4 px-4">
      <Button className="w-full bg-whatsapp" onClick={handleWhatsAppClick}>
        <Send size={20} className="mr-2" />
        Encomendar
      </Button>
      <Button className="w-full bg-instagram" onClick={handleInstagramClick}>
        <Image
          src="/image/instagram.png"
          alt="Instagram"
          width={15}
          height={15}
        />
        Instagram
      </Button>
    </section>
  );
};

export default Order;
