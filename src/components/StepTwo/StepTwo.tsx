import React from "react";
import FrequencyOfServiceCard from "./FrequencyOfServiceCard";

const StepTwo = () => {
  const handleInputChange = (e: any) => {
    console.log(e.target.id);
  };

  return (
    <div className="max-w-[95%] mx-auto">
      <p className="text-xl font-medium mb-[21px]">اختر موعد الحجز</p>
      <div>
        <p className="text-lg">تكرار الخدمة</p>

        <div className="flex flex-col sm:items-center sm:flex-row gap-5 lg:gap-10 mt-[6px] mb-[20px]">
          <FrequencyOfServiceCard
            name="مرة واحدة"
            className="w-[123.18px]"
            onChange={handleInputChange}
          />
          <FrequencyOfServiceCard
            name="يوميا"
            className="w-[93.97px]"
            onChange={handleInputChange}
          />
          <FrequencyOfServiceCard
            name="اسبوعيا"
            className="w-[109.07px]"
            onChange={handleInputChange}
          />
          <FrequencyOfServiceCard
            name="شهريا"
            className="w-[97.87px]"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <p className="text-lg">التاريخ والوقت</p>
          <input
            onChange={handleInputChange}
            placeholder="التاريخ والوقت"
            type="date"
            id="date"
            title="date"
            className=" w-[270px] h-[50px] outline-none border-2 border-[#F2F2F2] rounded-lg mt-[5px] px-2 text-lg flex flex-row-reverse justify-between gap-28"
          />
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
