import { IPropsDropDownList } from "@/interfaces/interfaces/props/IPropsDropDownList";
import React from "react";

const FormCard = (props: IPropsDropDownList) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={props.name}>{props.name}</label>
      <input
        onChange={props.onChange}
        placeholder={props.name}
        type="text"
        name={props.name}
        className="w-[270px] h-[50px] outline-none border-2 border-[#F2F2F2] rounded-lg pr-2"
        value={props.value}
      />
    </div>
  );
};

export default FormCard;
