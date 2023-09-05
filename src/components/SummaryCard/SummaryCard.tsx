import React from "react";
import TitleAndSubTitle from "../Shared/TitleAndSubTitle/TitleAndSubTitle";

const SummaryCard = () => {
  return (
    <div className="w-[370px] min-h-[375.45px] bg-[#E5F7FD] rounded-2xl">
      <p className="text-2xl h-[70px] border-b-2 border-white pr-[30px] pt-[20px]">
        ملخص
      </p>

      <div className="mt-[30px] flex flex-col gap-8 pr-[30px]">
        <TitleAndSubTitle
          title="الخدمة"
          subTitle="تنظيف المنازل"
          classNameOfTitle="text-[#7D7E82] text-lg"
          classNameOfSubTitle="text-xl"
        />

        <div>
          <p className="text-[#7D7E82] text-lg">العناصر المختارة</p>
          <ul className="list-disc pr-7">
            <li className="text-xl ">تنظيف المنازل (1)</li>
          </ul>
        </div>

        <TitleAndSubTitle
          title="اجمالي السعر"
          subTitle="55$"
          classNameOfTitle="text-[#7D7E82] text-lg"
          classNameOfSubTitle="text-xl"
        />
      </div>
    </div>
  );
};

export default SummaryCard;
