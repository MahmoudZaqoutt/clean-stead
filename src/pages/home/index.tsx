import React from "react";
import homeImage from "../../assets/homeImage.png";
import Link from "next/link";
import Container from "@/components/Shared/Container/Container";
import Image from "next/image";
import TitleOfSections from "@/components/Shared/TitleOfSections/TitleOfSections";
import ServicesCard from "@/components/ServicesCard/ServicesCard";
import OurFeaturesCard from "@/components/OurFeaturesCard/OurFeaturesCard";
import img from "../../assets/image5.png";
import OurClientsCard from "@/components/OurClientsCard/OurClientsCard";
const Home = () => {
  return (
    <div>
      <Container>
        <div
          className="min-h-[550px] background-I bg-cover bg-center  bg-no-repeat bg-blue-200 pr-[50px] rounded-3xl mb-[80px]"
          style={{ backgroundImage: `url(${homeImage})`, minHeight: "550px" }}
        >
          <div className="pt-[100px] ">
            <p className="w-[340px]  text-5xl font-bold">
              اختار يلي <span className="text-[#8FC930]">بخلصك</span> من مره
              وحده!
            </p>
            <p className="text-[#7D7E82]  text-3xl w-[360.45px] mt-5">
              ما تشيل هم كلمنا بنساعدك احجز خدمة مضمونة بكبسة زر
            </p>
            <Link href={""}>
              <p className="w-[150px] h-[50px] mt-[30px] bg-white  rounded-full text-xl text-center pt-2 hover:bg-blue-50 duration-200 ">
                تواصل معنا
              </p>
            </Link>
          </div>
        </div>
        <div className="w-full">
          <TitleOfSections content="الخدمات التي نقدمها" />
          <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3  mt-[60px] mb-[80px] !justify-center !items-center">
            <ServicesCard />
            <ServicesCard />
            <ServicesCard />
            <ServicesCard />
            <ServicesCard />
            <ServicesCard />
          </div>
        </div>

        <div className="mb-[80px]">
          <TitleOfSections content="لماذا تختارنا" />
          <div className="mt-[50px] lg:flex items-center gap-[30px]">
            <Image
              src={img}
              alt=""
              className="w-[570px] h-[570px] rounded-2xl mx-auto lg:mx-0 "
            />
            <div className=" grid grid-cols-1 sm:grid-cols-2  lg:flex lg:flex-col  gap-[30px] mt-5 lg:mt-0">
              <OurFeaturesCard />
              <OurFeaturesCard />
              <OurFeaturesCard />
              <OurFeaturesCard />
            </div>
          </div>
        </div>

        <div className="mb-[80px]">
          <TitleOfSections content="ماذا يقولون عملائنا" />
          <div className="mt-[60px] flex-col flex lg:flex-row justify-center  items-center gap-[50px]">
            <OurClientsCard />
            <OurClientsCard />
            <OurClientsCard />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
