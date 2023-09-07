import ShowMore from "@/components/ServicesCard/ShowMore";
import ServicesOfServiceCard from "@/components/ServicesOfServiceCard/ServicesOfServiceCard";
import Container from "@/components/Shared/Container/Container";
import TitledBoard from "@/components/Shared/TitledBoard/TitledBoard";
import { SERVICES_OF_SERVICE } from "@/constants/servicesofservice";
import React from "react";

const Service = () => {
  return (
    <Container>
      <div>
        <TitledBoard
          title="تنظيف المنازل"
          content="هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية"
          linkContent="احجز الآن"
          linkClassName="text-white !bg-[#00ADEE]"
          href="/book"
        />
      </div>

      <div>
        <p className="text-2xl font-medium mb-[35px]">
          الخدمات المتوفرة في تنظيف المنازل
        </p>

        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] mb-[25px]">
          {SERVICES_OF_SERVICE.map((item: any, index) => (
            <ServicesOfServiceCard
              key={index}
              img={item.img}
              content={item.content}
            />
          ))}
        </div>
        <div className="mb-[50px] ">
          <ShowMore
            title="رؤية المزيد"
            contentToShow={
              <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] mb-[25px]">
                {SERVICES_OF_SERVICE.map((item: any, index) => (
                  <ServicesOfServiceCard
                    key={index}
                    img={item.img}
                    content={item.content}
                  />
                ))}
              </div>
            }
            classNameOfIcon="!text-black"
            classNameOfTitle="!text-black "
            classNameOfSubTitle="text-black "
            classNameOfContainer="flex items-start lg:items-center  flex-col "
          />
        </div>
      </div>
    </Container>
  );
};

export default Service;
