import React from "react";
import StatusCard from "./StatusCard/StatusCard";
import icon1 from "../../assets/Icon1.svg";
import icon2 from "../../assets/Icon2.svg";
import icon3 from "../../assets/Icon3.svg";
import icon4 from "../../assets/Icon4.svg";
import icon5 from "../../assets/books.svg";
import chart from "../../assets/chart.svg";
import TitleAndSubTitle from "../Shared/TitleAndSubTitle/TitleAndSubTitle";
import ActivitiesCard from "./ActivitiesCard/ActivitiesCard";
import Image from "next/image";

export const OverViewPage = () => {
  return (
    <>
      <div className="flex items-center justify-between h-[130px] bg-white px-[30px] rounded-xl mb-[30px]">
        <StatusCard
          img={icon1}
          title="55"
          subTitle="اجمالي الحجوزات"
          classNameOfImage="bg-[#EEEDFD]"
        />
        <StatusCard
          img={icon2}
          title="41"
          subTitle="معلق"
          classNameOfImage="bg-[#FFF3E8]"
        />
        <StatusCard
          img={icon3}
          title="67"
          subTitle="تم تأكيده"
          classNameOfImage="bg-[#E5F8EE]"
        />
        <StatusCard
          img={icon4}
          title="24"
          subTitle="تم رفضه"
          classNameOfImage="bg-[#FCEAEB]"
        />
      </div>

      <div className="flex gap-[30px]">
        <div className="w-[750px] h-[547px] bg-white rounded-xl px-[30px] pt-[30px]">
          <div className="flex justify-between">
            <div>
              <TitleAndSubTitle
                title="حجوزات اليوم"
                className=""
                classNameOfTitle="text-xl font-bold leading-10"
                subTitle={"as of 25 May 2022, 09:41 PM"}
                classNameOfSubTitle="text-sm text-[#808080]"
              />
            </div>
            <div className="flex gap-4">
              <button className="w-[80px] h-[45px] bg-[#EBF8FE] text-[#00ADEE] rounded-lg">
                اليوم
              </button>
              <button className="w-[80px] h-[45px]  rounded-lg">الاسبوع</button>
              <button className="w-[80px] h-[45px]  rounded-lg">الشهر</button>
            </div>
          </div>
          <Image src={chart} alt="" className="mt-[50px]" />
        </div>

        <div className="w-[373.47px] h-[545.43px] bg-white rounded-xl px-[30px] overflow-auto">
          <p className="text-xl font-bold my-[30px] ">أخر النشاطات</p>
          <div className="flex flex-col gap-3">
            <ActivitiesCard img={icon5} title="محمد حجز موعد جديد" />
            <ActivitiesCard img={icon5} title="محمد حجز موعد جديد" />
            <ActivitiesCard img={icon5} title="محمد حجز موعد جديد" />
            <ActivitiesCard img={icon5} title="محمد حجز موعد جديد" />
            <ActivitiesCard img={icon5} title="محمد حجز موعد جديد" />
            <ActivitiesCard img={icon5} title="محمد حجز موعد جديد" />
            <ActivitiesCard img={icon5} title="محمد حجز موعد جديد" />
            <ActivitiesCard img={icon5} title="محمد حجز موعد جديد" />
          </div>
        </div>
      </div>
    </>
  );
};
