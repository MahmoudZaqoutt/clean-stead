import { IPropsCard } from "@/interfaces/interfaces/props/IPropsCard";
import Image from "next/image";
import React from "react";

const SideBarOption = (props: IPropsCard) => {
  const { Id, activeId, onClick } = props;

  const handleClick = () => {
    onClick(Id);
  };

  const isActive = Id === activeId;
  const buttonStyle = {
    backgroundColor: isActive ? "#EBF8FE" : "",
    color: isActive ? "#00ADEE" : "",
  };

  return (
    <button
      onClick={handleClick}
      style={buttonStyle}
      className="flex items-center w-[210px] h-[56px] rounded-xl gap-3 pr-[50px] mr-[30px]"
    >
      <Image src={props.href || ""} alt="" className="w-[16px] h-[16px]" />
      <p className="text-sm font-semibold">{props.content}</p>
    </button>
  );
};

export default SideBarOption;
