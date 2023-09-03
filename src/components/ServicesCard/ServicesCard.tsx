import Image from "next/image";
import React from "react";
import img from "../../assets/image4.png";
import ShowMore from "./ShowMore";
const ServicesCard = () => {
  return (
    <fieldset className=" w-[370px] rounded-2xl min-h-[237.4px] shadow-xl shadow-blue-100 ">
      <legend>
        <Image
          src={img}
          alt="img"
          className="rounded-full  w-[130px] h-[130px] mr-[25px]"
        />
      </legend>
      <p className="text-center -mt-10 mr-20 text-xl font-bold">تنظيف السجاد</p>
      <p className="text-[#6D6E71] text-lg mt-5 w-[308.66px] mx-auto border-r-[1px] border-r-[#8FC930] pr-[10px]">
        ندرك صعوبة القيام بتنظيف السجاد من قبل النساء في البيوت لأنها تحتاج..
      </p>
      <ShowMore content="ندرك صعوبة القيام بتنظيف السجاد من قبل النساء في البيوت لأنها تحتاج.." />
    </fieldset>
  );
};

export default ServicesCard;
