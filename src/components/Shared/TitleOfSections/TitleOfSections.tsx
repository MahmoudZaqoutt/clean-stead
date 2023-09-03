import Image from "next/image";
import React from "react";
import img1 from "../../../assets/Group142.png";
import img2 from "../../../assets/Group143.png";
import { IPropsTitleOfSections } from "@/interfaces/interfaces/props/IPropsTitleOfSections";
const TitleOfSections = (props: IPropsTitleOfSections) => {
  return (
    <div className="flex gap-2 items-center justify-center">
      <Image src={img1} alt="" />
      <p className="text-3xl "> {props.content} </p>
      <Image src={img2} alt="" />
    </div>
  );
};

export default TitleOfSections;
