import { Stack, Typography } from "@mui/material";
// import BoltShiftIcon from "../../assets/socials/BoltShiftIcon.png";
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
`;

const ImageContainer = styled(Stack)`
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
  overflow: hidden;
`;

const SocialProof = () => {
  return (
    <Wrapper direction="column" spacing={2}>
      <Typography variant="body1">
        Join 4,000+ companies already growing
      </Typography>
      <ImageContainer direction="row">
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
