import { Button, Stack, Typography, useTheme, useMediaQuery } from "@mui/material";

const Cta = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack
      sx={{ width: "100%", padding: { xs: "40px 0", sm: "55px 0" }, backgroundColor: "#F9FAFB" }}
      justifyContent="center"
      alignItems="center"
    >
      <Stack gap={2} sx={{ width: { xs: "90%", sm: "80%", md: "60%" }, textAlign: "center" }}>
        <Typography
          variant="h5"
          sx={{ color: "#101828", fontSize: { xs: "20px", sm: "24px", md: "28px" } }}
        >
          Start your free trial
        </Typography>
        <Typography
          sx={{ color: "#475467", fontSize: { xs: "14px", sm: "16px" } }}
        >
          Join over 4,000+ startups already growing with Untitled.
        </Typography>
        <Stack
          spacing={2}
          direction={isMobile ? "column" : "row"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ marginTop: "10px" }}
        >
          <Button
            variant="outlined"
            color="inherit"
            sx={{ textTransform: "none", width: isMobile ? "100%" : "auto", color: "#344054", borderColor: "#D0D5DD", fontWeight: "600" }}
          >
            Learn more
          </Button>
          <Button
            color="error"
            variant="contained"
            sx={{ textTransform: "none", width: isMobile ? "100%" : "auto", color: "#fff", fontWeight: "600", backgroundColor: "#E63F3A"}}
          >
            Get started
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Cta;