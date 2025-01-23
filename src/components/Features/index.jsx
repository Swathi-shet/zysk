import { Stack, Typography, useTheme, useMediaQuery } from "@mui/material";
import FeatureCard from "./featureCard";
import featuresData from "./featuresData";

const Features = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Stack sx={{ padding: { xs: "40px 0", sm: "60px 0" }, width: "100%" }}>
      <Stack
        justifyContent="center"
        alignItems="center"
        spacing={3}
        sx={{ width: "95%", maxWidth: "1200px", margin: "0 auto" }}
      >
        <Stack sx={{ width: { xs: "90%", sm: "570px" } }}>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              marginBottom: "8px",
              color: "#E63F3A",
              fontSize: { xs: "14px", sm: "16px" },
            }}
          >
            Features
          </Typography>
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              marginBottom: "18px",
              color: "#101828",
              fontSize: { xs: "20px", sm: "24px", md: "28px" },
            }}
          >
            Analytics that feels like it’s from the future
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              color: "#475467",
              fontSize: { xs: "14px", sm: "16px" },
            }}
          >
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </Typography>
        </Stack>

        <Stack
          direction="row"
          sx={{
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
            width: "100%",
          }}
        >
          {featuresData.map((item, index) => (
            <FeatureCard
              key={index}
              icon={item.icon}
              title={item.title}
              info={item.info}
              sx={{
                width: {
                  xs: "100%",
                  sm: isTablet ? "48%" : "30%",
                  md: "30%",
                },
                maxWidth: { xs: "100%", sm: "none" },
              }}
            />
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Features;
