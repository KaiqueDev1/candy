"use client";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center rounded-b-[70px]">
      <div>
        <Image
          src="/image/logo_candy.png"
          alt="Logo"
          width={100}
          height={100}
        />
      </div>
      <span className="text-3xl font-bold text-primary font-playwrite">Cardápio</span>
    </div>
  );
};

export default Header;
