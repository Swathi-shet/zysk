import { Button, Stack, Typography } from "@mui/material";

const Cta = () => {
  return (
    <Stack
      sx={{ width: "100%", padding: "96px 0", backgroundColor: "#F9FAFB" }}
      justifyContent="center"
      alignItems="center"
    >
      <Stack gap={2}>
        <Typography variant="h5" sx={{ color: "#101828", textAlign: "center" }}>
          Start your free trial
        </Typography>
        <Typography>
          Join over 4,000+ startups already growing with Untitled.
        </Typography>
        <Stack
          spacing={2}
          direction="row"
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ marginTop: "10px" }}
        >
          <Button
            variant="outlined"
            color="inherit"
            sx={{ textTransform: "none" }}
          >
            Learn more
          </Button>
          <Button
            color="error"
            variant="contained"
            sx={{ textTransform: "none" }}
          >
            Get started
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Cta;
