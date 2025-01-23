import { Avatar, Stack, Typography } from "@mui/material";
import SisyphusLogo from "../../assets/testimonial/SisyphusLogo";
import TestimonialProfile from "../../assets/testimonial/TestimonialProfile.png";

const Testimonial = () => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{
        width: "100%",
        textAlign: "center",
        backgroundColor: "#F9FAFB",
        padding: "60px 0",
      }}
      spacing={2}
    >
      <SisyphusLogo />
      <Typography variant="h4" sx={{ color: "#101828", width: "60%" }}>
        We’ve been using Untitled to kick start every new project and can’t
        imagine working without it.
      </Typography>
      <Avatar src={TestimonialProfile} sx={{ width: "64px", height: "64px" }} />
      <Stack>
        <Typography variant="body1" sx={{ color: "#101828", fontWeight: 600 }}>
          Candice Wu
        </Typography>
        <Typography variant="body2" sx={{ color: "#475467" }}>
          Product Manager, Sisyphus
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Testimonial;
