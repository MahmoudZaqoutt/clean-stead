import Image from "next/image";
import React from "react";
import { IPropsCard } from "@/interfaces/interfaces/props/IPropsCard";
const OurClientsCard = (props: IPropsCard) => {
  return (
    <fieldset className="w-[340px] rounded-2xl min-h-[309px] shadow-xl shadow-blue-100 ">
      <legend className="text-center m-auto ">
        <Image
          src={props.img}
          alt=""
          className="min-w-[120px] min-h-[120px] rounded-full"
        />
      </legend>

      <p className="w-[263.09px] mx-auto text-xl text-center mt-[44px] mb-[36px] font-semibold">
        {props.content}
      </p>
      <p className="text-center">{props.name}</p>
    </fieldset>
  );
};

export default OurClientsCard;
