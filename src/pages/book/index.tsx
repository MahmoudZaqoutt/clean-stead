import TitleOfPages from "@/components/Shared/TitleOfPages/TitleOfPages";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Container from "@/components/Shared/Container/Container";
import SummaryCard from "@/components/SummaryCard/SummaryCard";
import StepTwo from "@/components/StepTwo/StepTwo";
import StepThree from "@/components/StepThree/StepThree";
import StepOne from "@/components/StepOne/StepOne";
import { useDispatch, useSelector } from "react-redux";
import { handleBackToFirstStep } from "@/redux/servicesSlice";

const steps = ["اختر الخدمات", "التاريخ والوقت", "معلوماتك"];

const Book = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [error, setError] = useState("");
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.servicesReducer);
  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    if (activeStep === steps.length - 1) {
      const selectedService = data.book.find(
        (item: any) => item.countOfServices > 0
      );

      if (!selectedService) {
        setError("الرجاء اختيار خدمة على الأقل ...");
        setTimeout(() => {
          setError("");
        }, 2000);
        return;
      } else {
        dispatch(handleBackToFirstStep(data.newBook));
        setActiveStep(0);
      }
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }

    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setError("");
  };

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return <StepOne />;
      case 1:
        return <StepTwo />;
      case 2:
        return <StepThree />;
      default:
        return null;
    }
  };

  return (
    <Container>
      <div className="mb-[80px]">
        <TitleOfPages title="احجز الآن" />
        {error ? (
          <p className="mt-5 text-xl text-red-500 font-semibold">{error}</p>
        ) : (
          ""
        )}
        <div className="flex flex-col xl:flex-row items-center xl:items-start justify-between  gap-10  mt-[35px]">
          <div className="lg:w-[770px] sm:w-[600px] min-h-[602.83px] border-[#E5F7FD] border-2 shadow-xl shadow-[#E5F7FD] rounded-2xl ">
            <div className="border-b-2 border-[#E5F7FD] h-[70px] flex flex-col justify-center ">
              <Stepper activeStep={activeStep}>
                {steps.map((label: any, index: number) => {
                  return (
                    <Step key={index}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
            </div>
            {activeStep === steps.length ? (
              <React.Fragment>
                <>good</>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <div className="min-h-[442px] border-b-2 border-[#E5F7FD]">
                  <div className=" mx-auto my-[30px]  min-h-[442px]">
                    {renderStepContent()}
                  </div>
                </div>
                <div className=" flex justify-between items-center h-[90px] max-w-[95%] mx-auto">
                  <button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className="text-[#00ADEE] text-xl w-[150px] h-[50px] border-2 border-[#00ADEE] rounded-full hover:bg-blue-100 duration-200 pb-2"
                  >
                    الرجوع
                  </button>
                  <Box sx={{ flex: "1 1 auto" }} />
                  <button
                    className="text-white bg-[#00ADEE] text-xl w-[150px] h-[50px] border-2  rounded-full hover:bg-blue-400 duration-200 pb-2"
                    onClick={handleNext}
                  >
                    {activeStep === steps.length - 1 ? "ارسال" : "استمرار"}
                  </button>
                </div>
              </React.Fragment>
            )}
          </div>
          <div>
            <SummaryCard />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Book;
