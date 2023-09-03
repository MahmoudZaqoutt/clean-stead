import Image from "next/image";
import React from "react";
import ShowMore from "./ShowMore";
import { IPropsCard } from "@/interfaces/interfaces/props/IPropsCard";
const ServicesCard = (props: IPropsCard) => {
  return (
    <fieldset className=" w-[370px] rounded-2xl min-h-[237.4px] shadow-xl shadow-blue-100 ">
      <legend>
        <Image
          src={props.img}
          alt="img"
          className="rounded-full  w-[130px] h-[130px] mr-[25px]"
        />
      </legend>
      <p className="text-center -mt-10 mr-20 text-xl font-bold">
        {props.title}
      </p>
      <p className="text-[#6D6E71] text-lg mt-5 w-[308.66px] mx-auto border-r-[1px] border-r-[#8FC930] pr-[10px]">
        {props.content}
      </p>
      <ShowMore content={props.contentToShow || ""} />
    </fieldset>
  );
};

export default ServicesCard;
