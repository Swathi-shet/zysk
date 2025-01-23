import { Button, Stack, Typography } from "@mui/material";
import CustomAvatarGroup from "./CustomAvatarGroup";
import FAQAccordion from "./FAQAccordion";

const Faq = () => {
  return (
    <Stack justifyContent={"center"} alignItems={"center"}>
      <Stack justifyContent={"center"} alignItems={"center"} gap={1}>
        <Typography variant="h5" sx={{ color: "#101828", fontWeight: "600" }}>
          Frequently asked questions
        </Typography>
        <Typography
          sx={{ color: "#475467", fontSize: "14px", fontWeight: "400" }}
        >
          Everything you need to know about the product and billing.
        </Typography>
        <FAQAccordion />
      </Stack>

      <Stack justifyContent={"center"} alignItems={"center"} gap={1} sx={{ backgroundColor: "#F9FAFB", padding: "20px 0", width: "100%", margin: "0 80px" }}>
        <CustomAvatarGroup />
        <Typography
          sx={{ color: "#101828", fontSize: "14px", fontWeight: "600" }}
        >
          Still have questions?
        </Typography>
        <Typography sx={{ color: "#475467", fontSize: "12px" }}>
          Can’t find the answer you’re looking for? Please chat to our friendly
          team.
        </Typography>
        <Button
          variant="contained"
          color="error"
          sx={{ marginTop: "12px", textTransform: "none" }}
        >
          Get in touch
        </Button>
      </Stack>
    </Stack>
  );
};

export default Faq;
