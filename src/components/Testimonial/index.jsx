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
        padding: { xs: "40px 0", sm: "60px 0" },
      }}
      spacing={2}
    >
      <SisyphusLogo />
      <Typography
        variant="h5"
        sx={{
          color: "#101828",
          width: { xs: "90%", sm: "70%", md: "60%" },
          fontSize: { xs: "20px", sm: "24px", md: "28px" },
        }}
      >
        We’ve been using Untitled to kick start every new project and can’t
        imagine working without it.
      </Typography>
      <Avatar
        src={TestimonialProfile}
        sx={{ width: { xs: "48px", sm: "64px" }, height: { xs: "48px", sm: "64px" } }}
      />
      <Stack>
        <Typography
          variant="body1"
          sx={{ color: "#101828", fontWeight: 600, fontSize: { xs: "14px", sm: "16px" } }}
        >
          Candice Wu
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "#475467", fontSize: { xs: "12px", sm: "14px" } }}
        >
          Product Manager, Sisyphus
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Testimonial;