import React, { useState } from "react";
import ServicesForChosenCard from "./ServicesForChosenCard";

const StepOne = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckedChange = (e: any) => {
    setIsChecked(e.target.checked);
  };

  const [amounts, setAmounts] = useState([0, 0, 0, 0]);

  const handleIncrementAmount = (index: any) => {
    const newQuantities = [...amounts];
    newQuantities[index]++;
    setAmounts(newQuantities);
  };

  const handleDecrementAmount = (index: any) => {
    const newQuantities = [...amounts];
    if (newQuantities[index] > 0) {
      newQuantities[index]--;
    }
    setAmounts(newQuantities);
  };

  return (
    <div>
      <p className="min-w-[417px] text-xl font-medium mb-[21px]">
        اختر الخدمات التي تحتاج تنظيفها من أي تصنيف تريده
      </p>
      <div className="flex flex-col justify-center gap-[15px]">
        {amounts.map((_, index) => (
          <ServicesForChosenCard
            key={index}
            onChange={handleCheckedChange}
            handleIncrementAmount={() => handleIncrementAmount(index)}
            handleDecrementAmount={() => handleDecrementAmount(index)}
            amount={amounts[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default StepOne;
