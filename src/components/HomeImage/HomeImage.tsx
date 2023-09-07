import Link from "next/link";
import React from "react";
import Container from "../Shared/Container/Container";

const HomeImage = () => {
  return (
    <div className="banner min-h-[550px] -mt-[55px] background-I bg-cover bg-center  bg-no-repeat  rounded-3xl mb-[80px]">
      <Container>
        <div className="pt-[100px] ">
          <p className="w-[340px]  text-5xl font-bold">
            اختار يلي <span className="text-[#8FC930]">بخلصك</span> من مره وحده!
          </p>
          <p className="text-[#7D7E82]  text-3xl w-[360.45px] mt-5">
            ما تشيل هم كلمنا بنساعدك احجز خدمة مضمونة بكبسة زر
          </p>
          <Link href={"/contact-us"}>
            <p className="w-[150px] h-[50px] mt-[30px] bg-white  rounded-full text-xl text-center pt-2 hover:bg-blue-50 duration-200 ">
              تواصل معنا
            </p>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default HomeImage;
