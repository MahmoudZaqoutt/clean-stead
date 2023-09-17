import React from "react";
import FrequencyOfServiceCard from "./FrequencyOfServiceCard";
import { useDispatch, useSelector } from "react-redux";
import { handleDate, handleRepetition } from "@/redux/servicesSlice";

const StepTwo = () => {
  const book = useSelector((state: any) => state.servicesReducer.newBook);
  const dispatch = useDispatch();


  const handleRepetitionChange = (e: any) => {
    dispatch(handleRepetition(e.target.id));
  };

  const handleDateChange = (e: any) => {
    dispatch(handleDate(e.target.value));
  };

  return (
    <div className="max-w-[95%] mx-auto">
      <p className="text-xl font-medium mb-[21px]">اختر موعد الحجز</p>
      <div>
        <p className="text-lg">تكرار الخدمة</p>

        <div>
          <div className="flex flex-col sm:items-center sm:flex-row gap-5 lg:gap00 mt-[6px] mb-[20px]">
            <FrequencyOfServiceCard
              id={book.repetition}
              name="مرة واحدة"
              className="w-[123.18px]"
              onChange={handleRepetitionChange}
            />
            <FrequencyOfServiceCard
              id={book.repetition}
              name="يوميا"
              className="w-[93.97px]"
              onChange={handleRepetitionChange}
            />
            <FrequencyOfServiceCard
              id={book.repetition}
              name="اسبوعيا"
              className="w-[109.07px]"
              onChange={handleRepetitionChange}
            />
            <FrequencyOfServiceCard
              id={book.repetition}
              name="شهريا"
              className="w-[97.87px]"
              onChange={handleRepetitionChange}
            />
          </div>
          <div>
            <p className="text-lg">التاريخ والوقت</p>
            <input
              onChange={handleDateChange}
              placeholder="التاريخ والوقت"
              value={book.date}
              type="date"
              id="date"
              title="date"
              className=" w-[270px] h-[50px] outline-none border-2 border-[#F2F2F2] rounded-lg mt-[5px] px-2 text-lg flex flex-row-reverse justify-between gap-28"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
