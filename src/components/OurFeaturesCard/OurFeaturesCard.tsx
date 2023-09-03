import Image from "next/image";
import React from "react";
import TitleAndSubTitle from "../Shared/TitleAndSubTitle/TitleAndSubTitle";
import { IPropsTitleAndSubTitle } from "@/interfaces/interfaces/props/IPropsTitleAndSubTitle";
const OurFeaturesCard = (props: IPropsTitleAndSubTitle) => {
  return (
    <div className="flex items-center gap-[20px]">
      <div className="bg-[#E5F7FD] rounded-lg min-h-[100px] min-w-[100px] relative">
        <Image
          src={props.img}
          alt="img"
          className="min-w-[50px] min-h-[50px] absolute top-6 right-5"
        />
      </div>
      <TitleAndSubTitle
        title={props.title}
        subTitle={props.subTitle}
        classNameOfSubTitle="text-[#6D6E71] text-xl"
        classNameOfTitle="text-xl font-semibold"
      />
    </div>
  );
};

export default OurFeaturesCard;
