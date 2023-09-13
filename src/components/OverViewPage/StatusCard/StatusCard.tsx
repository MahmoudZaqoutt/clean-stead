import React from "react";
import Image from "next/image";
import TitleAndSubTitle from "@/components/Shared/TitleAndSubTitle/TitleAndSubTitle";
import { IPropsStatusCard } from "@/interfaces/interfaces/props/IPropsStatusCard";

const StatusCard = (props: IPropsStatusCard) => {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`w-[70px] h-[70px] rounded-xl  flex items-center justify-center ${props.classNameOfImage}`}
      >
        <Image src={props.img} alt="" className="w-[24px] h-[24px]" />
      </div>
      <div>
        <TitleAndSubTitle
          title={props.title}
          classNameOfTitle="text-2xl font-bold"
          subTitle={props.subTitle}
          classNameOfSubTitle="text-[#808080] text-lg"
        />
      </div>
    </div>
  );
};

export default StatusCard;
