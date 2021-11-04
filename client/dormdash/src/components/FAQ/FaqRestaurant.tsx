import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  Typography,
} from "@mui/material";
import { MdExpandMore } from "react-icons/md";
import * as Routes from "../../routes";
import { Link } from "react-router-dom";
import { FiEdit2 } from "react-icons/fi";
import styled from "styled-components";

const UnorderedList = styled.ul`
  margin-top: 0.5rem;
  margin-left: 2rem;
  li {
    list-style: circle;
  }
`;

const FaqRestaurant = () => {
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<MdExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <strong>How does Dormdash work for Restaurants?</strong>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Dormdash is a food delivery application that connects restaurants
            with the students in their city. Restaurants can use it to upload
            menus, view order statuses, and track sales revenue. At Dormdash we
            value transparency - you know exactly where your money is going, and
            how it’s working for you.
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
            <strong>What are the fees for using Dormdash?</strong>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Dormdash believes in saving you money. That’s why we offer
            competitive rates for connecting you with your customers. We
            currently require:
            <UnorderedList>
              <li>A 15% fee for delivery</li>
              <li>A 10% fee for order pickup</li>
              <li>
                A one-time activation fee of $300 when you first sign up so that
                we can equip you with a tablet with our software, a menu
                photoshoot, and unlimited setup support.
              </li>
            </UnorderedList>
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
            <strong>How do I sign up?</strong>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can sign up to become a partner{" "}
            <Link to={Routes.BECOME_PARTNER}>here</Link>. You will be asked to
            enter a number of details about your restaurant, including:
            <UnorderedList>
              <li>Your restaurant name</li>
              <li>The type of cuisine you make</li>
              <li>Your logo</li>
              <li>Your address</li>
              <li>Your first and last name</li>
            </UnorderedList>
            Once you fill in this information, we can get you set up with a
            profile and dashboard for your business. We can’t wait to get
            started with you!
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
            <strong>How do I view my orders?</strong>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Your restaurant dashboard will tell you everything you need to know
            about your orders, including:
            <UnorderedList>
              <li>The order number</li>
              <li>Customer name</li>
              <li>Customer address</li>
              <li>Order status</li>
              <li>Order details</li>
            </UnorderedList>
            As you fill the order, you can update the status from Preparing to
            Delivering, and mark it as Completed once the customer has received
            the order. This way you know exactly what your orders are, where
            they’re going, and when they’ve arrived.
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
            <strong>How can I edit my restaurant profile settings?</strong>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can change your restaurant profile settings at any time by
            clicking the <FiEdit2 /> icon beside each of your settings. By
            clicking the icon, you can update your:
            <UnorderedList>
              <li>Hours of Operation</li>
              <li>Restaurant Description</li>
              <li>Company Logo</li>
            </UnorderedList>
            If you need further support, you can contact us at
            <a href="mailto:dormdash@hotmail.com"> dormdash@hotmail.com</a>.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default FaqRestaurant;
