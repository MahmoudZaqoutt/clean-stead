import Container from "@/components/Shared/Container/Container";
import DropDownList from "@/components/Shared/DropDownList/DropDownList";
import TitleOfPages from "@/components/Shared/TitleOfPages/TitleOfPages";
import Image from "next/image";
import React from "react";
import * as yup from "yup";
import img from "../../assets/Maskgroup.png";
import { useRouter } from "next/router";

const ContactUs = () => {
  const router = useRouter();
  const [errors, setErrors] = React.useState<any>([]);
  const [error, setError] = React.useState<any>("");
  const [formData, setFormData] = React.useState({
    nameOfServices: "",
    name: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const schema = yup.object().shape({
    name: yup.string().required("هذا الحقل مطلوب"),
    nameOfServices: yup.string().required("هذا الحقل مطلوب"),
    phone: yup
      .number()
      .typeError("رقم الجوال يجب أن يكون رقمًا")
      .required("هذا الحقل مطلوب"),
    message: yup.string().required("هذا الحقل مطلوب"),
  });

  const handleSubmit = (event: any) => {
    event.preventDefault();
    schema
      .validate(formData, { abortEarly: false })
      .then(async () => {
        try {
          const res = await fetch(
            "http://casting-ec2-1307338951.us-east-2.elb.amazonaws.com:7001/auth/login",
            {
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              method: "POST",
              body: JSON.stringify(formData),
            }
          );
          if (res) {
            // localStorage.setItem("token", res.data.accessToken);
            // router.push("/creator");
            console.log(res);
          }
        } catch (error: any) {
          setError(
            error.response.data.code || "أدخلت ايميل او كلمة مرور خاطئة"
          );
        }
      })
      .catch((error: any) => {
        const Errors: any = {};
        error.inner.forEach((error: any) => {
          Errors[error.path] = error.message;
        });
        setErrors(Errors);
      });
  };

  return (
    <Container>
      <div className="mb-[70px] mt-[40px] flex flex-col-reverse lg:flex-row items-center gap-7 lg:justify-between">
        <form
          onSubmit={handleSubmit}
          className="max-w-[570.4px] md:w-[570.4px]"
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
              name="nameOfServices"
              value={formData.nameOfServices}
              onChange={handleInputChange}
              className="border-2 border-[#F2F2F2]  h-[50px] rounded-xl  px-[12px] outline-none "
              id={"service"}
            />
            <p className="text-sm  text-red-500  p-2 inline-block ">
              {errors.nameOfServices ? errors.nameOfServices : ""}
            </p>
          </div>

          <div className="flex items-center   w-full gap-4 lg:justify-between">
            <div>
              <label htmlFor="name" className="text-lg mb-[6px] inline-block">
                الاسم
              </label>
              <input
                type="text"
                placeholder="الاسم"
                value={formData.name}
                name="name"
                id="name"
                title="Name"
                onChange={handleInputChange}
                className="border-2 border-[#F2F2F2] h-[50px] rounded-xl  px-[12px] outline-none w-full   "
              />
              <p className="text-sm  text-red-500  p-2 inline-block ">
                {errors.name ? errors.name : ""}
              </p>
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
                value={formData.phone}
                name="phone"
                id="phone"
                title="phone"
                onChange={handleInputChange}
                className="border-2 border-[#F2F2F2] h-[50px] rounded-xl  px-[12px] outline-none w-full   "
              />
              <p className="text-sm  text-red-500  p-2 inline-block ">
                {errors.phone ? errors.phone : ""}
              </p>
            </div>
          </div>
          <div>
            <label htmlFor="message" className="text-lg mb-[6px] inline-block">
              الرسالة
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              id="message"
              placeholder="اكتب رسالتك هنا.."
              title="."
              className="border-2 border-[#F2F2F2] min-h-[97.84px] rounded-xl  px-[12px] outline-none w-full  pt-[12px] overflow-auto resize-none"
            />
            <p className="text-sm  text-red-500  p-2 inline-block ">
              {errors.message ? errors.message : ""}
            </p>
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
