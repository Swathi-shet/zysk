import { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import MinusIcon from "../../assets/faq/MinusIcon";
import PlusIcon from "../../assets/faq/plusIcon";

const FAQAccordion = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqItems = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can I change my plan later?",
      answer:
        "Yes, you can change your plan at any time from your account settings.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "You can cancel your subscription at any time. Refunds may be issued based on our policy.",
    },
    {
      question: "Can other info be added to an invoice?",
      answer:
        "Yes, additional information like your company name or VAT number can be added to invoices.",
    },
    {
      question: "How does billing work?",
      answer:
        "Billing is handled automatically at the start of each billing cycle.",
    },
    {
      question: "How do I change my account email?",
      answer:
        "You can update your email in the account settings section of your dashboard.",
    },
  ];

  return (
    <Box sx={{ maxWidth: 600, margin: "0", padding: 2 }}>
      {faqItems.map((item, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          sx={{
            boxShadow: "none",
            borderBottom:
              index !== faqItems.length - 1 ? "1px solid #e0e0e0" : "none",
          }}
        >
          <AccordionSummary
            expandIcon={
              expanded === `panel${index}` ? <MinusIcon /> : <PlusIcon />
            }
            sx={{
              minHeight: "60px",
              "&.Mui-expanded": {
                minHeight: "20px",
              },
              "& .MuiAccordionSummary-content": {
                margin: 0,
                alignItems: "center",
              },
            }}
          >
            <Typography
              sx={{
                fontWeight: 500,
                margin: "0",
                color: "#101828",
                fontSize: "16px",
              }}
            >
              {item.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "text.secondary", fontSize: "14px" }}>
              {item.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQAccordion;
