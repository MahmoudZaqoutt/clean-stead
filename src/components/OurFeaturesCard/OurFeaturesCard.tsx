import Image from "next/image";
import React from "react";
import img from "../../assets/Edit_duotone.png";
import TitleAndSubTitle from "../Shared/TitleAndSubTitle/TitleAndSubTitle";
const OurFeaturesCard = () => {
  return (
    <div className="flex items-center gap-[20px]">
      <div className="bg-[#E5F7FD] rounded-lg min-h-[100px] min-w-[100px] relative">
        <Image
          src={img}
          alt="img"
          className="min-w-[50px] min-h-[50px] absolute top-6 right-5"
        />
      </div>
      <TitleAndSubTitle
        title="الموثقية"
        subTitle="ندرك صعوبة القيام بتنظيف السجاد من قبل النساء"
        classNameOfSubTitle="text-[#6D6E71] text-xl"
        classNameOfTitle="text-xl font-semibold"
      />
    </div>
  );
};

export default OurFeaturesCard;
