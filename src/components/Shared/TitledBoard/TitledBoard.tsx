import React from "react";
import TitleOfPages from "../TitleOfPages/TitleOfPages";
import Image from "next/image";
import img2 from "../../../assets/Maskgroup.png";
import { IPropsCard } from "@/interfaces/interfaces/props/IPropsCard";
import { useRouter } from "next/router";

const TitledBoard = (props: IPropsCard) => {
  const router = useRouter();
  return (
    <div className="mb-[70px] mt-[40px] flex flex-col-reverse lg:flex-row items-center gap-7 lg:justify-between ">
      <div>
        <TitleOfPages title={props.title} />

        <p className="text-2xl text-[#7D7E82] max-w-[509.38px] min-h-[312px]">
          {props.content}
        </p>

        <button onClick={() => router.push(props.href || "")}>
          <p
            className={`${props.linkClassName} w-[150px] h-[50px] mt-[30px] bg-white text-[#00ADEE] border-2 border-[#00ADEE]  rounded-full text-xl text-center pt-2 hover:bg-blue-50 duration-200  `}
          >
            {props.linkContent}
          </p>
        </button>
      </div>

      <div>
        <Image src={img2} alt="" className="lg:w-[570.24px] lg:h-[550px]" />
      </div>
    </div>
  );
};

export default TitledBoard;
