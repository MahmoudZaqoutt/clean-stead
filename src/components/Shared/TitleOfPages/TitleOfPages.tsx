import Image from "next/image";
import React from "react";
import img from "../../../assets/Group143.png";
import { IPropsCard } from "@/interfaces/interfaces/props/IPropsCard";

const TitleOfPages = (props: IPropsCard) => {
  return (
    <div className="flex items-center gap-2">
      <p className="text-4xl font-medium mb-5">{props.title}</p>
      <Image src={img} alt="" className="!w-[20px] !h-[34.21px] " />
    </div>
  );
};

export default TitleOfPages;
