import TitleOfPages from "@/components/Shared/TitleOfPages/TitleOfPages";
import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import Container from "@/components/Shared/Container/Container";
import SummaryCard from "@/components/SummaryCard/SummaryCard";
import StepOne from "@/components/StepOne/StepOne";
import StepTwo from "@/components/StepTwo/StepTwo";

const steps = ["اختر الخدمات", "التاريخ والوقت", "معلوماتك"];

const Book = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return <StepOne />;
      case 1:
        return <StepTwo />;
      case 2:
        return "3";
      default:
        return null;
    }
  };

  return (
    <Container>
      <div className="mb-[80px]">
        <TitleOfPages title="احجز الآن" />
        <div className="flex justify-between mt-[35px]">
          <div className="w-[770px] min-h-[602.83px] border-[#E5F7FD] border-2 shadow-xl shadow-[#E5F7FD] rounded-2xl ">
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
                <Typography>All steps completed</Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <div className="min-h-[442px] border-b-2 border-[#E5F7FD]">
                  <div className="max-w-[708.98px] mx-auto my-[30px]  min-h-[442px]">
                    {renderStepContent()}
                  </div>
                </div>
                <div className=" flex justify-between items-center h-[90px] w-[708.98px] mx-auto">
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
