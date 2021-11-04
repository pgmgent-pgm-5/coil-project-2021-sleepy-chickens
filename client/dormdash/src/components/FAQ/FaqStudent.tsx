import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { MdExpandMore } from "react-icons/md";
import { StudentFAQProps } from "../../interfaces/interfaces";

const FaqStudent = ({ id, Q, A }: StudentFAQProps) => {
  return (
    <Accordion key={id}>
      <AccordionSummary
        expandIcon={<MdExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>
          <strong>{Q}</strong>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{A}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default FaqStudent;
