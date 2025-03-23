"use client";
import Image from "next/image";
import Logo from "@/public/logo_candy.png";
const Header = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center rounded-b-[70px]">
      <div>
        <Image src={Logo} alt="Logo" width={100} height={100} />
      </div>
      <span className="font-playwrite text-3xl font-bold text-primary">
        Cardápio
      </span>
    </div>
  );
};

export default Header;
