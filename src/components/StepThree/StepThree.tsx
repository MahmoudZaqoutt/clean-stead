import Link from "next/link";
import React from "react";
import FormCard from "./FormCard";
import { useDispatch, useSelector } from "react-redux";
import {
  handleAddress,
  handleName,
  handlePhoneNumber,
  handleSurgical_address,
} from "@/redux/servicesSlice";

const StepThree = () => {
  const dispatch = useDispatch();
  const { name, phoneNumber, address, Surgical_address } = useSelector(
    (state: any) => state.servicesReducer
  );

  const handleNameChange = (e: any) => {
    dispatch(handleName(e.target.value));
  };
  const handlePhoneNumberChange = (e: any) => {
    dispatch(handlePhoneNumber(e.target.value));
  };
  const handleAddressChange = (e: any) => {
    dispatch(handleAddress(e.target.value));
  };
  const handleSurgical_addressChange = (e: any) => {
    dispatch(handleSurgical_address(e.target.value));
  };

  return (
    <div className="max-w-[95%] mx-auto">
      <p className="text-xl font-medium mb-[21px]">
        ادخل معلوماتك{" "}
        <Link href={""} className="text-[#00ADEE]">
          <span>تسجيل الدخول</span>{" "}
        </Link>
      </p>

      <div className="max-w-[570px] min-h-[196.96px] grid grid-cols-1 sm:grid-cols-2 gap-[20px] sm:gap-[30px]">
        <FormCard name="الاسم" onChange={handleNameChange} value={name} />
        <FormCard
          name="رقم الجوال"
          onChange={handlePhoneNumberChange}
          value={phoneNumber}
        />
        <FormCard
          name="العنوان"
          onChange={handleAddressChange}
          value={address}
        />
        <FormCard
          name="العنوان التفصيلي"
          onChange={handleSurgical_addressChange}
          value={Surgical_address}
        />
      </div>
    </div>
  );
};

export default StepThree;
