import Link from "next/link";
import React from "react";
import FormCard from "./FormCard";

const StepThree = () => {
  const handleInputChange = (e: any) => {};
  return (
    <div className="max-w-[95%] mx-auto">
      <p className="text-xl font-medium mb-[21px]">
        ادخل معلوماتك{" "}
        <Link href={""} className="text-[#00ADEE]">
          <span>تسجيل الدخول</span>{" "}
        </Link>
      </p>

      <div className="max-w-[570px] min-h-[196.96px] grid grid-cols-1 sm:grid-cols-2 gap-[20px] sm:gap-[30px]">
        <FormCard name="الاسم" onChange={handleInputChange} />
        <FormCard name="رقم الجوال" onChange={handleInputChange} />
        <FormCard name="العنوان" onChange={handleInputChange} />
        <FormCard name="العنوان التفصيلي" onChange={handleInputChange} />
      </div>
    </div>
  );
};

export default StepThree;
