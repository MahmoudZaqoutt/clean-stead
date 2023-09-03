import Image from "next/image";
import React from "react";
import img from "../../assets/Ellipse121.png";
const OurClientsCard = () => {
  return (
    <fieldset className="w-[340px] rounded-2xl min-h-[309px] shadow-xl shadow-blue-100 ">
      <legend className="text-center m-auto ">
        <Image
          src={img}
          alt=""
          className="min-w-[120px] min-h-[120px] rounded-full"
        />
      </legend>

      <p className="w-[263.09px] mx-auto text-xl text-center mt-[44px] mb-[36px] font-semibold">
        ندرك صعوبة القيام بتنظيف السجاد من قبل النساء
      </p>
      <p className="text-center">محمود أحمد</p>
    </fieldset>
  );
};

export default OurClientsCard;
