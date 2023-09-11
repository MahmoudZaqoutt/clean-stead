import React, { useState } from "react";
import ServicesForChosenCard from "./ServicesForChosenCard";
import { useSelector } from "react-redux";

const StepOne = () => {
  // const [services, setServices] = useState([
  //   {
  //     id: 0,
  //     name: "تنظيف المنازل",
  //     countOfServices: 0,
  //     serviceData: [
  //       {
  //         id: 0,
  //         name: "غرفة النوم",
  //         price: "15 $",
  //         amount: 0,
  //         isChecked: false,
  //       },
  //       // {
  //       //   id: 1,
  //       //   name: "غرفة النوم",
  //       //   price: "15 $",
  //       //   amount: 0,
  //       //   isChecked: false,
  //       // },
  //       // {
  //       //   id: 2,
  //       //   name: "غرفة النوم",
  //       //   price: "15 $",
  //       //   amount: 0,
  //       //   isChecked: false,
  //       // },
  //     ],
  //   },
  //   {
  //     id: 1,
  //     name: "التنظيف التجاري",
  //     countOfServices: 0,
  //     serviceData: [
  //       {
  //         id: 0,
  //         name: "غرفة النوم",
  //         price: "15 $",
  //         amount: 0,
  //         isChecked: false,
  //       },
  //       // {
  //       //   id: 1,
  //       //   name: "غرفة النوم",
  //       //   price: "15 $",
  //       //   amount: 0,
  //       //   isChecked: false,
  //       // },
  //       // {
  //       //   id: 2,
  //       //   name: "غرفة النوم",
  //       //   price: "15 $",
  //       //   amount: 0,
  //       //   isChecked: false,
  //       // },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     name: "تنظيف النوافذ",
  //     countOfServices: 0,
  //     serviceData: [
  //       {
  //         id: 0,
  //         name: "غرفة النوم",
  //         price: "15 $",
  //         amount: 0,
  //         isChecked: false,
  //       },
  //       // {
  //       //   id: 1,
  //       //   name: "غرفة النوم",
  //       //   price: "15 $",
  //       //   amount: 0,
  //       //   isChecked: false,
  //       // },
  //       // {
  //       //   id: 2,
  //       //   name: "غرفة النوم",
  //       //   price: "15 $",
  //       //   amount: 0,
  //       //   isChecked: false,
  //       // },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     name: "تنظيف السجاد",
  //     countOfServices: 0,
  //     serviceData: [
  //       {
  //         id: 0,
  //         name: "غرفة النوم",
  //         price: "15 $",
  //         amount: 0,
  //         isChecked: false,
  //       },
  //       // {
  //       //   id: 1,
  //       //   name: "غرفة النوم",
  //       //   price: "15 $",
  //       //   amount: 0,
  //       //   isChecked: false,
  //       // },
  //       // {
  //       //   id: 2,
  //       //   name: "غرفة النوم",
  //       //   price: "15 $",
  //       //   amount: 0,
  //       //   isChecked: false,
  //       // },
  //     ],
  //   },
  // ]);

  // const services = useSelector((state: any) => state.servicesReducer.services);
  // console.log(services);

  return (
    <div className="max-w-[95%] mx-auto">
      {/* <p className="min-w-[417px] text-xl font-medium mb-[21px]">
        اختر الخدمات التي تحتاج تنظيفها من أي تصنيف تريده
      </p>
      <div className="flex flex-col justify-center gap-[15px]">
        {services.map((item: any, index: number) => (
          <ServicesForChosenCard
            id={item.id}
            key={index}
            name={item.name}
            serviceData={item.serviceData}
            countOfServices={item.countOfServices}
          />
        ))}
      </div> */}
    </div>
  );
};

export default StepOne;
