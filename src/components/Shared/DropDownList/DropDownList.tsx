import React, { Fragment } from "react";
import { IPropsDropDownList } from "@/interfaces/interfaces/props/IPropsDropDownList";
const DropDownList = (props: IPropsDropDownList) => {
  return (
    <select
      name={props.name}
      value={props.value}
      title={props.label}
      onChange={props.onChange}
      className={`w-full ${props.className}`}
    >
      <option hidden value={"اسم الخدمة"}>
        اسم الخدمة
      </option>

      {props.options?.map((item: any, index) => (
        <Fragment key={index}>
          <option value={item} className="text-black text-lg ">
            {item}
          </option>
        </Fragment>
      ))}
    </select>
  );
};

export default DropDownList;
