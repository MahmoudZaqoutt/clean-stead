import Logo from "@/components/Logo/Logo";
import React, { useState } from "react";
import overViewImg from "../../assets/1. overview.svg";
import booksImg from "../../assets/books.svg";
import contactImg from "../../assets/contactImg.svg";
import maskImg from "../../assets/Mask.svg";
import servicesImg from "../../assets/services.svg";
import SideBarOption from "./sideBar/SideBarOption";
import ContactUs from "../contact-us";
import { OverViewPage } from "@/components/OverViewPage/OverViewPage";
import BookPage from "@/components/BookPage/BookPage";

const index = () => {
  const [activeButtonId, setActiveButtonId] = useState<any>(1);
  const [componentToDisplay, setComponentToDisplay] = useState<any>();

  const handleButtonClick = (id: number) => {
    setActiveButtonId(id);
    switch (id) {
      case 1:
        setComponentToDisplay(<OverViewPage />);
        break;
      case 2:
        setComponentToDisplay(<BookPage />);
        break;
      case 3:
        setComponentToDisplay(<ContactUs />);
        break;
      case 4:
        setComponentToDisplay(
          <p className="text-4xl font-semibold flex justify-center items-center">
            {" "}
            ... coming soon{" "}
          </p>
        );
        break;
      case 5:
        setComponentToDisplay(
          <p className="text-4xl font-semibold flex justify-center items-center">
            {" "}
            ... coming soon{" "}
          </p>
        );
        break;
      default:
        setComponentToDisplay(null);
    }
  };

  return (
    <div className="grid grid-cols-10">
      <div className="h-[890.87px] col-span-2 ">
        <div className="pr-[50px] mt-[35px] mb-[53px]">
          <Logo />
        </div>

        <div className="flex flex-col gap-2">
          <SideBarOption
            Id={1}
            activeId={activeButtonId}
            content="نظرة عامة"
            href={overViewImg}
            onClick={handleButtonClick}
          />
          <SideBarOption
            Id={2}
            activeId={activeButtonId}
            content="الحجوزات"
            href={booksImg}
            onClick={handleButtonClick}
          />
          <SideBarOption
            Id={3}
            activeId={activeButtonId}
            content="التواصل"
            href={contactImg}
            onClick={handleButtonClick}
          />
          <SideBarOption
            Id={4}
            activeId={activeButtonId}
            content="التصنيفات"
            href={maskImg}
            onClick={handleButtonClick}
          />
          <SideBarOption
            Id={5}
            activeId={activeButtonId}
            content="الخدمات"
            href={servicesImg}
            onClick={handleButtonClick}
          />
        </div>
      </div>

      <div className="bg-[#F7F8FC] col-span-8 px-[30px]">
        {activeButtonId === 1 ? (
          <OverViewPage />
        ) : (
          <div>{componentToDisplay}</div>
        )}
      </div>
    </div>
  );
};

export default index;