import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

import { IPropsCard } from "@/interfaces/interfaces/props/IPropsCard";

const CenteredContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion elevation={0} square {...props} />
))(({ theme }) => ({
  border: "none",
  "&:not(:last-child)": {
    borderBottom: "none",
  },
  "&:before": {
    display: "none",
  },
}));

const CustomAccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary {...props} />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  border: "none",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderBottom: "none",
}));

export default function ShowMore(props: IPropsCard) {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");
  const [open, setOpen] = React.useState(false);

  const handlebanle = (e: any) => {
    e.preventDefault();
    setOpen(!open);
  };

  const handleChange = (panel: string) => () => {
    setExpanded(!open ? panel : false);
  };

  return (
    <CenteredContainer>
      <Accordion
        className={`rounded-2xl w-full ${props.classNameOfContainer} `}
        expanded={expanded === "panel"}
        onChange={handleChange("panel")}
      >
        <CustomAccordionSummary
          className={`bg-white flex !items-center justify-center rounded-b-2xl  ${props.classNameOfTitle}`}
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          {expanded === "panel" ? (
            <>
              <div className={` ${props.classNameOfTitle}`}>
                <div className={props.classNameOfSubTitle}>
                  {props.subTitle}
                </div>

                <button
                  onClick={handlebanle}
                  className="text-[#00ADEE] text-lg  mr-[10px]"
                >
                  {props.hiddenTitle ? props.hiddenTitle : props.title}
                </button>
              </div>

              <ArrowForwardIosSharpIcon
                onClick={handlebanle}
                className={`mt-2 mr-1 text-[#00ADEE] ${props.classNameOfIcon}`}
                sx={{ fontSize: "0.9rem", transform: "rotate(90deg)" }}
              />
            </>
          ) : (
            <>
              <div className={` ${props.classNameOfTitle}`}>
                <div className={props.classNameOfSubTitle}>
                  {props.subTitle}
                </div>
                <Accordion>
                  <button
                    onClick={handlebanle}
                    className="text-[#00ADEE] text-lg  mr-[10px]"
                  >
                    {props.title}
                  </button>
                </Accordion>
              </div>

              <ArrowForwardIosSharpIcon
                onClick={handlebanle}
                className={`mt-2 mr-1 text-[#00ADEE] ${props.classNameOfIcon}`}
                sx={{ fontSize: "0.9rem", transform: "rotate(180deg)" }}
              />
            </>
          )}
        </CustomAccordionSummary>
        <AccordionDetails>
          <div>{props.contentToShow}</div>
        </AccordionDetails>
      </Accordion>
    </CenteredContainer>
  );
}
