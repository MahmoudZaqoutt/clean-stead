import { IPropsTitleAndSubTitle } from "@/interfaces/interfaces/props/IPropsTitleAndSubTitle";
import React from "react";

const TitleAndSubTitle = (props: IPropsTitleAndSubTitle) => {
  return (
    <div className={props.className}>
      <p className={props.classNameOfTitle}>{props.title}</p>
      <div className={props.classNameOfSubTitle}>{props.subTitle}</div>
    </div>
  );
};

export default TitleAndSubTitle;
