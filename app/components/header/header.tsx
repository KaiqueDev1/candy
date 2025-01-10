"use client";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex w-full items-center justify-center rounded-b-[70px] bg-primary px-4">
      <Image src="/image/logo_candy.png" alt="Logo" width={150} height={150} />
    </div>
  );
};

export default Header;
