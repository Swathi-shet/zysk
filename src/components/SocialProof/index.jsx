import { Stack, Typography, useTheme, useMediaQuery } from "@mui/material";
import BoltShiftIcon from "../../assets/socials/BoltShiftIcon";
import FeatherIcon from "../../assets/socials/FeatherIcon";
import GlobalbankIcon from "../../assets/socials/GlobalbankIcon";
import LightboxIcon from "../../assets/socials/LightboxIcon";
import NietzscheIcon from "../../assets/socials/NietzscheIcon";
import SpheruleIcon from "../../assets/socials/SpheruleIcon";
import styled from "styled-components";

const Wrapper = styled(Stack)`
  align-items: center;
  padding: 80px 30px;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const ImageContainer = styled(Stack)`
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
  overflow: hidden;

  @media (max-width: 768px) {
    gap: 16px;
  }
`;

const SocialProof = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isSmallDesktop = useMediaQuery(theme.breakpoints.between("md", "lg"));

  return (
    <Wrapper direction="column" spacing={2}>
      <Typography variant="body1" sx={{ textAlign: "center", fontSize: { xs: "14px", sm: "16px" } }}>
        Join 4,000+ companies already growing
      </Typography>
      <ImageContainer
        direction="row"
        sx={{
          maxWidth: "100%",
          flexWrap: isMobile || isTablet || isSmallDesktop ? "wrap" : "nowrap",
          gap: isSmallDesktop ? "24px" : "32px",
        }}
      >
        <BoltShiftIcon />
        <LightboxIcon />
        <FeatherIcon />
        <SpheruleIcon />
        <GlobalbankIcon />
        <NietzscheIcon />
      </ImageContainer>
    </Wrapper>
  );
};

export default SocialProof;