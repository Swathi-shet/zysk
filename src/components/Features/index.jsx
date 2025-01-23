import { Stack, Typography } from "@mui/material";
import FeatureCard from "./featureCard";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <Stack justifyContent="center" alignItems="center" sx={{ padding: "60px 0" }} spacing={3}>
      <Stack sx={{ width: "570px" }}>
        <Typography variant="body1" sx={{ textAlign: "center", marginBottom: "8px", color: "#E63F3A" }}>Features</Typography>
        <Typography variant="h5" sx={{ textAlign: "center", marginBottom: "18px", color: "#101828" }}>
          Analytics that feels like it’s from the future
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "center", color: "#475467" }}>
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </Typography>
      </Stack>

      <Stack direction="row" sx={{ flexWrap: "wrap", justifyContent: "center" }}>
        {featuresData.map((item, index) => (
          <FeatureCard 
            key={index}
            icon={item.icon}
            title={item.title}
            info={item.info}
            sx={{
              width: {
                xs: "100%",   
                sm: "50%",    
                md: "33.33%",
              },
            }}
          />
          
        ))}
      </Stack>
    </Stack>
  );
};

export default Features;
