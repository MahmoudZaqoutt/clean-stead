import Image from "next/image";
import React from "react";
import img from "../../assets/image1.png";
import Link from "next/link";
const Logo = () => {
  return (
    <Link href={"/home"} className="flex items-center gap-1">
      <Image src={img} alt="LogoImage" className="max-w-[30.52px]" />
      <p className="flex items-center gap-1 text-[#00ADEE] font-semibold text-xl">
        <span className="!text-black">كلين</span>ستيد
      </p>
    </Link>
  );
};

export default Logo;
