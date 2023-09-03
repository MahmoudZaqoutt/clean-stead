import React from "react";
import Container from "@/components/Shared/Container/Container";
import Image from "next/image";
import TitleOfSections from "@/components/Shared/TitleOfSections/TitleOfSections";
import ServicesCard from "@/components/ServicesCard/ServicesCard";
import OurFeaturesCard from "@/components/OurFeaturesCard/OurFeaturesCard";
import img from "../../assets/image5.png";
import OurClientsCard from "@/components/OurClientsCard/OurClientsCard";
import HomeImage from "@/components/HomeImage/HomeImage";

const Home = () => {
  return (
    <div>
      <HomeImage />
      <Container>
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
