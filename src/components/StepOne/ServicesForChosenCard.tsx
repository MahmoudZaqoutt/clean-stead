import React from "react";
import ShowMore from "../ServicesCard/ShowMore";
import { IPropsDropDownList } from "@/interfaces/interfaces/props/IPropsDropDownList";
import Image from "next/image";
import img from "../../assets/Mask1group.png";

const ServicesForChosenCard = (props: IPropsDropDownList) => {
  return (
    <div className="border-[#F2F2F2] border-2 rounded-2xl">
      <ShowMore
        title="رؤية الخدمات"
        subTitle="تنظيف المنازل"
        classNameOfTitle="flex justify-between items-center w-full !mr-0 rounded-2xl min-h-[51.42px] max-w-[770px]"
        classNameOfSubTitle="text-lg "
        classNameOfIcon="!mt-[20px]"
        hiddenTitle="اخفاء الخدمات"
        classNameOfDetails="max-w-[770px]"
        contentToShow={
          <div className="border-[#F2F2F2] border-2 rounded-2xl ">
            <ShowMore
              title="رؤية التفاصيل"
              subTitle={
                <div className="flex flex-col gap-2 lg:flex-row lg:gap-0 items-center">
                  <input
                    onChange={props.onChange}
                    type="checkbox"
                    title="check"
                    className="w-[30px] h-[30px] "
                  />
                  <Image
                    src={img}
                    alt=""
                    className="w-[80px] h-[80px] mr-[20px] ml-[16px]"
                  />
                  <p className="text-lg">غرفة النوم</p>
                  <p className="text-lg lg:mr-[34px] lg:ml-[64px] ">15 $</p>

                  <div className="flex items-center gap-3 ">
                    <button
                      onClick={props.handleIncrementAmount}
                      className="w-[30px] h-[30px] bg-[#E5F7FD] rounded-md "
                    >
                      +
                    </button>
                    <p className="w-[30px] h-[30px] border-[1px] border-[#E5F7FD] rounded-md text-center">
                      {props.amount}
                    </p>
                    <button
                      onClick={props.handleDecrementAmount}
                      className="w-[30px] h-[30px] bg-[#E5F7FD] rounded-md"
                    >
                      -
                    </button>
                  </div>
                </div>
              }
              classNameOfTitle="flex justify-between items-center w-full !mr-0 rounded-2xl min-h-[110px]  max-w-[770px]"
              classNameOfSubTitle="text-lg "
              classNameOfIcon="!mt-[110px] lg:!mt-[50px]"
              hiddenTitle="اخفاء التفاصيل"
              classNameOfDetails=" max-w-[770px]"
              contentToShow={
                <div className="pr-[50px]">
                  <p className="text-md text-[#7D7E82]">
                    العناصر التي ستيم تنظيفها في هذه الغرفة
                  </p>
                  <ul className="list-disc pr-4 flex flex-col gap-5 mt-4 mb-5">
                    <li>العناصر المختارة</li>
                    <li>العناصر المختارة</li>
                    <li>العناصر المختارة</li>
                  </ul>
                </div>
              }
            />
          </div>
        }
      />
    </div>
  );
};

export default ServicesForChosenCard;
