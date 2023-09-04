import Container from "@/components/Shared/Container/Container";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import img2 from "../../assets/Maskgroup.png";
import TitleOfPages from "@/components/Shared/TitleOfPages/TitleOfPages";
const About = () => {
  return (
    <Container>
      <div className="mb-[70px] mt-[40px] flex items-center justify-between">
        <div>
          <TitleOfPages title="من نحن" />

          <p className="text-2xl text-[#7D7E82] w-[509.38px] min-h-[312px]">
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
            النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد
            من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا
            كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد
            الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية
          </p>
          <Link href={""}>
            <p className="w-[150px] h-[50px] mt-[30px] bg-white text-[#00ADEE] border-2 border-[#00ADEE]  rounded-full text-xl text-center pt-2 hover:bg-blue-50 duration-200 ">
              تواصل معنا
            </p>
          </Link>
        </div>

        <div>
          <Image src={img2} alt="" className="w-[570.24px] h-[550px]" />
        </div>
      </div>
    </Container>
  );
};

export default About;
