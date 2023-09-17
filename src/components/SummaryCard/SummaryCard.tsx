import React, { Fragment, useEffect, useState } from "react";
import TitleAndSubTitle from "../Shared/TitleAndSubTitle/TitleAndSubTitle";
import { useDispatch, useSelector } from "react-redux";
import { handleTotalPrice } from "@/redux/servicesSlice";

const SummaryCard = () => {
  const summaryData = useSelector((state: any) => state.servicesReducer.book);
  let totalPrice = 0;
  {
    summaryData.map((item: any, index: number) => (
      <p key={index}>
        {item.countOfServices >= 1 ? (
          <>
            {item.services.map((item: any, index: number) => (
              <p key={index}>
                {item.isChecked
                  ? (totalPrice += Number(
                      item.price.split(" ").shift() * item.amount
                    ))
                  : ""}
              </p>
            ))}
          </>
        ) : (
          ""
        )}
      </p>
    ));
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleTotalPrice(totalPrice));
  }, [totalPrice]);

  return (
    <div className="w-[370px] min-h-[375.45px] bg-[#E5F7FD] rounded-2xl pb-5">
      <p className="text-2xl h-[70px] border-b-2 border-white pr-[30px] pt-[20px]">
        ملخص
      </p>

      <div className="mt-[30px] flex flex-col gap-8 pr-[30px]">
        <TitleAndSubTitle
          title="الخدمة"
          subTitle={
            <ul className=" pr-7">
              {summaryData.map((item: any, index: number) =>
                item.countOfServices >= 1 ? (
                  <Fragment key={index}>
                    {item.services.map((service: any, index: number) => (
                      <li className="text-xl mb-1" key={index}>
                        {service.isChecked ? service.name : ""}
                      </li>
                    ))}
                  </Fragment>
                ) : (
                  ""
                )
              )}
            </ul>
          }
          classNameOfTitle="text-[#7D7E82] text-lg"
          classNameOfSubTitle="text-xl"
        />

        <div>
          <p className="text-[#7D7E82] text-lg">العناصر المختارة</p>
          <ul className="list-disc pr-7">
            {summaryData.map((item: any, index: number) =>
              item.countOfServices >= 1 ? (
                <li className="text-xl mb-1" key={index}>
                  {item.name} ({item.countOfServices})
                </li>
              ) : (
                ""
              )
            )}
          </ul>
        </div>

        <TitleAndSubTitle
          title="اجمالي السعر"
          subTitle={`$ ${totalPrice}`}
          classNameOfTitle="text-[#7D7E82] text-lg"
          classNameOfSubTitle="text-xl"
        />
      </div>
    </div>
  );
};

export default SummaryCard;
