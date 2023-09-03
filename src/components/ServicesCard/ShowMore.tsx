import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { IPropsTitleOfSections } from "@/interfaces/interfaces/props/IPropsTitleOfSections";

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

export default function ShowMore(props: IPropsTitleOfSections) {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion
        className="rounded-2xl"
        expanded={expanded === "panel"}
        onChange={handleChange("panel")}
      >
        <CustomAccordionSummary
          className="bg-white flex !items-center rounded-b-2xl"
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Typography className="text-[#00ADEE] text-lg  mr-[10px] ">
            رؤية المزيد
          </Typography>
          {expanded === "panel" ? (
            <ArrowForwardIosSharpIcon
              className="mt-2 mr-1 text-[#00ADEE]"
              sx={{ fontSize: "0.9rem", transform: "rotate(90deg)" }}
            />
          ) : (
            <ArrowForwardIosSharpIcon
              className="mt-2 mr-1 text-[#00ADEE]"
              sx={{ fontSize: "0.9rem", transform: "rotate(180deg)" }}
            />
          )}
        </CustomAccordionSummary>
        <AccordionDetails>
          <Typography>{props.content}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}