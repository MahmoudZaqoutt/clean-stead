import { IPropsDropDownList } from "@/interfaces/interfaces/props/IPropsDropDownList";
import React from "react";

const FrequencyOfServiceCard = (props: IPropsDropDownList) => {
  return (
    <div
      className={`text-[#7D7E82] flex items-center justify-center gap-2 border-2 border-[#F2F2F2]  rounded-lg h-[50px] ${props.className}`}
    >
      <input
        onChange={props.onChange}
        type="radio"
        id={props.name}
        name="input"
        className="w-[24px] h-[24px]"
        checked={props.name === props.id}
      />
      <label htmlFor={props.name}>{props.name}</label>
    </div>
  );
};

export default FrequencyOfServiceCard;
