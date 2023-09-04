import { IPropsCard } from "@/interfaces/interfaces/props/IPropsCard";
import Image from "next/image";
import React from "react";

const ServicesOfServiceCard = (props: IPropsCard) => {
  return (
    <div className="w-[270px] h-[80px] flex items-center gap-3 border-2 border-[#F2F2F2] rounded-xl">
      <Image src={props.img} alt="" className="w-[95.24px] h-[70px]" />
      <p>{props.content}</p>
    </div>
  );
};

export default ServicesOfServiceCard;
