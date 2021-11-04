import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { MdExpandMore } from "react-icons/md";
import * as Routes from "../../routes";
import { Link } from "react-router-dom";
import { FiEdit2 } from "react-icons/fi";

const FaqDeliverer = () => {
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<MdExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <strong>How can I become a Dormdash deliverer?</strong>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can sign up to become a Dormdash deliverer{" "}
            <Link to={Routes.BECOME_DRIVER}>here</Link>. Sign up on our website
            and leave us your contact information and one of our hiring managers
            will get in touch. See you soon!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<MdExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <strong>Can anyone become a Dormdash deliverer?</strong>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            As long as you are able to work in Canada and have a bicycle, you
            can become a deliverer! We believe in quick, accessible, and
            eco-friendly delivery methods, so all our deliverers make deliveries
            on bicycles.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<MdExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <strong>
              What if I don’t have a bike? Can I still become a deliverer?
            </strong>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We prefer that all our deliverers make their deliveries via a
            bicycle. If you do not have access to a bicycle and still want to
            become a deliverer, you can still sign up to be a deliverer{" "}
            <Link to={Routes.BECOME_DRIVER}>here</Link>. When our hiring
            managers get in touch with you, we can think of a solution together.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<MdExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <strong>How many tips will I get from making deliveries?</strong>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The more deliveries you make, the more tips you make! While tips are
            not guaranteed, most Dormdash customers are very generous, meaning
            you have extra money to take home. Any and all tips that a customer
            leaves is all for you!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<MdExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <strong>
              Do I get to choose my own hours? How does that work?
            </strong>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            At Dormdash, we pride ourselves in giving our employees flexibility.
            You sign up for shifts each week based on your own schedule. Once
            you’ve signed up for your shifts, you can pick up orders in your
            Delivery Dashboard to get going.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default FaqDeliverer;
