import Image from "next/image";
import React from "react";
import img from "../../assets/image1.png";
import map from "../../assets/map.png";
import Container from "../Shared/Container/Container";
import { List } from "../Shared/List/List";
import { BsTelephoneFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { BiLogoFacebook } from "react-icons/bi";
import { FiTwitter, FiYoutube } from "react-icons/fi";
import { AiOutlineWhatsApp, AiOutlineInstagram } from "react-icons/ai";
import { RiGoogleLine } from "react-icons/ri";

const Footer = (props: any) => {
  return (
    <>
      {props.isDashboradPath ? (
        ""
      ) : (
        <footer className="bg-[#E5F7FD] min-h-[377.95px]">
          <Container>
            <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-7 pt-[30px] gap-10">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2">
                  <p className="flex items-center gap-1 text-[#00ADEE] font-bold text-3xl">
                    <span className="!text-black">كلين</span>ستيد
                  </p>
                  <Image src={img} alt="Image" className="max-w-[42.56px]" />
                </div>
                <p className="text-[#7D7E82] mt-[20px]">
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                  توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا
                  النص.
                </p>
              </div>

              <div>
                <p className="text-lg">خدماتنا</p>
                <List
                  className="flex flex-col text-[#7D7E82] gap-3 mt-[20px]"
                  options={[
                    {
                      href: "/",
                      content: "  تنظيف المنازل ",
                    },
                    {
                      href: "/",
                      content: "التنظيف التجاري ",
                    },
                    {
                      href: "/",
                      content: " تنظيف السجاد",
                    },
                    {
                      href: "/",
                      content: "   تنظيف النوافذ",
                    },
                    {
                      href: "/",
                      content: "تنظيف السيارات",
                    },

                    {
                      href: "/",
                      content: "تنظيف بعد البناء ",
                    },
                  ]}
                />
              </div>

              <div className="lg:col-span-2">
                <p className="text-lg">تواصل معنا</p>
                <List
                  className="flex flex-col text-[#7D7E82] gap-3 mt-[20px]"
                  options={[
                    {
                      href: "tel:0594113731",
                      content: (
                        <p className="flex items-center gap-2 ">
                          <BsTelephoneFill className="text-xl" /> 0594113731
                        </p>
                      ),
                    },
                    {
                      href: "mailto:mahmoudzaqoutt12333@gmail.com",
                      content: (
                        <p className="flex items-center gap-2 ">
                          <HiOutlineMail className="text-xl" />
                          eng.mahmoudzaqoutt12333@gmail.com
                        </p>
                      ),
                    },
                  ]}
                />
              </div>

              <div className="lg:col-span-2">
                <p className="text-lg"> تابعنا على</p>
                <List
                  className="flex items-center gap-3 text-2xl text-[#7D7E82] mt-[20px]"
                  options={[
                    {
                      href: "https://www.facebook.com/profile.php?id=100006261949404",
                      content: <BiLogoFacebook />,
                      classNameOfLI: " w-[24px] h-[24px]",
                    },
                    {
                      href: "",
                      content: <FiTwitter />,
                    },
                    {
                      href: "",
                      content: <FiYoutube />,
                    },
                    {
                      href: "",
                      content: <AiOutlineWhatsApp />,
                    },
                    {
                      href: "",
                      content: <AiOutlineInstagram />,
                    },
                    {
                      href: "",
                      content: <RiGoogleLine />,
                    },
                  ]}
                />
                <Image src={map} alt="map" className="mt-[50px]" />
              </div>
            </div>
            <hr className="h-1 bg-white  mt-10" />
            <p className="text-center text-xl font-semibold py-5 ">
              جميع الحقوق محفوظة © 2023
            </p>
          </Container>
        </footer>
      )}
    </>
  );
};

export default Footer;
