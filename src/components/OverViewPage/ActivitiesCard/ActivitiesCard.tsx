import { IPropsStatusCard } from "@/interfaces/interfaces/props/IPropsStatusCard";
import Image from "next/image";
import React from "react";

const ActivitiesCard = (props: IPropsStatusCard) => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-[40px] h-[40px] rounded-lg bg-[#F7F8FC] flex items-center justify-center">
        <Image src={props.img} alt="" className="w-[16px] h-[16px]" />
      </div>
      <p className="text-[#808080]">{props.title}</p>
    </div>
  );
};

export default ActivitiesCard;
