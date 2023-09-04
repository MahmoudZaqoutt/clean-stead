import Container from "@/components/Shared/Container/Container";
import DropDownList from "@/components/Shared/DropDownList/DropDownList";
import TitleOfPages from "@/components/Shared/TitleOfPages/TitleOfPages";
import Image from "next/image";
import React from "react";
import img from "../../assets/Maskgroup.png";

const ContactUs = () => {
  return (
    <Container>
      <div className="mb-[70px] mt-[40px] flex flex-col-reverse lg:flex-row items-center gap-7 lg:justify-between">
        <form
          //   onSubmit={handleSubmit}
          className="max-w-[570.4px]md:w-[570.4px]"
        >
          <TitleOfPages title="تواصل معنا" className="!mb-1" />

          <div>
            <label
              htmlFor="service"
              className="text-lg mt-[20px] inline-block mb-[6px]"
            >
              الخدمة
            </label>
            <DropDownList
              options={[
                "تنظيف منازل",
                "تنظيف بيوت",
                "تنظيف بيوت",
                "تنظيف تجاري",
                "تنظيف بيوت",
                "تنظيف بيوت",
              ]}
              title="اسم الخدمة"
              className="border-2 border-[#F2F2F2]  h-[50px] rounded-xl  px-[12px] outline-none "
              id={"service"}
            />
          </div>

          <div className="flex items-center  my-[20px] w-full gap-4 lg:justify-between">
            <div>
              <label htmlFor="name" className="text-lg mb-[6px] inline-block">
                الاسم
              </label>
              <input
                type="text"
                placeholder="الاسم"
                //   value={formData.name}
                name="name"
                id="name"
                title="Name"
                //   onChange={handleInputChange}
                className="border-2 border-[#F2F2F2] h-[50px] rounded-xl  px-[12px] outline-none w-full   "
                // className="w-full  h-12  border-gray-300  rounded-xl  text-lg"
              />
            </div>

            <div>
              <label
                htmlFor="phoneNumber"
                className="text-lg mb-[6px] inline-block"
              >
                رقم الجوال
              </label>
              <input
                type="text"
                placeholder="رقم الجوال"
                //   value={formData.name}
                name="name"
                id="phoneNumber"
                title="Name"
                //   onChange={handleInputChange}
                className="border-2 border-[#F2F2F2] h-[50px] rounded-xl  px-[12px] outline-none w-full   "
                // className="w-full  h-12  border-gray-300  rounded-xl  text-lg"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="text-lg mb-[6px] inline-block">
              الرسالة
            </label>
            <textarea
              id="message"
              placeholder="اكتب رسالتك هنا.."
              title="."
              className="border-2 border-[#F2F2F2] min-h-[97.84px] rounded-xl  px-[12px] outline-none w-full  pt-[12px] overflow-auto resize-none"
            />
          </div>

          <div className="mt-[20px]">
            <button
              type="submit"
              className="text-xl text-white w-[150px] h-[50px] rounded-full bg-[#00ADEE] hover:bg-[#00ADff] duration-200"
            >
              أرسل
            </button>
          </div>
        </form>

        <div>
          <Image src={img} alt="" className="lg:w-[570.24px] lg:h-[550px]" />
        </div>
      </div>
    </Container>
  );
};

export default ContactUs;
