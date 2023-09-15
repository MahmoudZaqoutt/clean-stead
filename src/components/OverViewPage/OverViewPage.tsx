import React from "react";
import StatusCard from "./StatusCard/StatusCard";
import icon1 from "../../assets/Icon1.svg";
import icon2 from "../../assets/Icon2.svg";
import icon3 from "../../assets/Icon3.svg";
import icon4 from "../../assets/Icon4.svg";
import icon5 from "../../assets/books.svg";
import TitleAndSubTitle from "../Shared/TitleAndSubTitle/TitleAndSubTitle";
import ActivitiesCard from "./ActivitiesCard/ActivitiesCard";
import Image from "next/image";
import mes from "../../assets/mes.svg";
import personImg from "../../assets/_header.png";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const data = [
  {
    name: "0",
    uv: 15,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "1",
    uv: 20,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "2",
    uv: 27,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "3",
    uv: 30,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "4",
    uv: 29,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "5",
    uv: 28,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "6",
    uv: 33,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "7",
    uv: 42,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "8",
    uv: 51,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "9",
    uv: 40,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "10",
    uv: 27,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "11",
    uv: 18,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "12",
    uv: 17,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "13",
    uv: 20,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "14",
    uv: 33,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "15",
    uv: 40,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "16",
    uv: 45,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "17",
    uv: 47,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "18",
    uv: 41,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "19",
    uv: 38,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "20",
  },
  {
    name: "21",
  },
];

export const OverViewPage = () => {
  return (
    <>
      <div className="mt-[35px] flex justify-between items-center mb-[53px]">
        <p className="font-bold text-3xl">نظرة عامة</p>
        <div className="flex items-center gap-4">
          <div className="w-[45px] h-[45px] bg-white rounded-xl flex justify-center items-center">
            <Image src={mes} alt="" className="w-[16px] h-[16px]" />
          </div>
          <Image src={personImg} alt="" className="w-[44px] h-[44px]" />
          <p className="text-sm font-medium">محمود زقوت</p>
        </div>
      </div>
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

          <ResponsiveContainer width="105%" height="85%">
            <AreaChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 40,
                left: 40,
                right: -40,
                bottom: 0,
              }}
            >
              <ReferenceLine y={10} />
              <ReferenceLine y={20} />
              <ReferenceLine y={30} />
              <ReferenceLine y={40} />
              <ReferenceLine y={50} />
              <ReferenceLine y={60} />

              <XAxis dataKey="name" tick={{ fill: "#9FA2B4" }} />
              <YAxis
                orientation="right"
                ticks={[10, 20, 30, 40, 50, 60]}
                axisLine={false}
                tick={{ fill: "#9FA2B4" }}
              />

              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#00ADEE"
                fill="#EBF8FE"
              />
            </AreaChart>
          </ResponsiveContainer>

          {/* <Image src={chart} alt="" className="mt-[50px]" /> */}
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
