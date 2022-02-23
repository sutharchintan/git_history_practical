import React from "react";
import {
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import { sectionStyle } from "./styles";

const AccordionSection = ({ title, children }) => {
  const classes = sectionStyle();
  
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        className={classes.sectionTitle}
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

export default AccordionSection;
