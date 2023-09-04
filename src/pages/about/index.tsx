// import Container from "@/components/Shared/Container/Container";
// import Image from "next/image";
// import React from "react";
// import Link from "next/link";
// import img2 from "../../assets/Maskgroup.png";
// import TitleOfPages from "@/components/Shared/TitleOfPages/TitleOfPages";
// const About = () => {
//   return (
//     <Container>
//       <div className="mb-[70px] mt-[40px] flex flex-col-reverse lg:flex-row items-center gap-7 lg:justify-between ">
//         <div>
//           <TitleOfPages title="من نحن" />

//           <p className="text-2xl text-[#7D7E82] max-w-[509.38px] min-h-[312px]">
//             هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
//             النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد
//             من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا
//             كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد
//             الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية
//           </p>
//           <Link href={""}>
//             <p className="w-[150px] h-[50px] mt-[30px] bg-white text-[#00ADEE] border-2 border-[#00ADEE]  rounded-full text-xl text-center pt-2 hover:bg-blue-50 duration-200 ">
//               تواصل معنا
//             </p>
//           </Link>
//         </div>

//         <div>
//           <Image src={img2} alt="" className="lg:w-[570.24px] lg:h-[550px]" />
//         </div>
//       </div>

//       <TitleOfPages content="sdas" linkContent="sss" />
//     </Container>
//   );
// };

// export default About;

import Container from "@/components/Shared/Container/Container";
import React from "react";
import TitledBoard from "@/components/Shared/TitledBoard/TitledBoard";
const About = () => {
  return (
    <Container>
      <TitledBoard
        title="من نحن"
        content="هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية"
        linkContent="تواصل معنا"
        href=""
      />
    </Container>
  );
};

export default About;
