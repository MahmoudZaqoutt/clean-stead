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
        href="/contact-us"
      />
    </Container>
  );
};

export default About;
