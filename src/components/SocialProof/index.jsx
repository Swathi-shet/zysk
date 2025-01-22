import { Stack, Typography } from "@mui/material";
import BoltShiftIcon from "../../assets/socials/BoltShiftIcon.png";
import FeatherDevIcon from "../../assets/socials/FeatherDevIcon.png";
import GlobalBankIcon from "../../assets/socials/GlobalBankIcon.png";
import LightboxIcon from "../../assets/socials/LightboxIcon.png";
import NietzscheIcon from "../../assets/socials/NietzscheIcon.png";
import SpheruleIcon from "../../assets/socials/SpheruleIcon.png";
import styled from "styled-components";

const Wrapper = styled(Stack)`
  align-items: center;
  padding: 90px 0;
`;

const ImageContainer = styled(Stack)`
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
  overflow: hidden;
`;

const CompanyLogo = styled.img`
  object-fit: contain;
`;

const SocialProof = () => {
  return (
    <Wrapper direction="column" spacing={2}>
      <Typography variant="body1">
        Join 4,000+ companies already growing
      </Typography>
      <ImageContainer direction="row">
        <CompanyLogo src={BoltShiftIcon} alt="boltshift icon" />
        <CompanyLogo src={FeatherDevIcon} alt="featherdev icon" />
        <CompanyLogo src={GlobalBankIcon} alt="globalbank icon" />
        <CompanyLogo src={LightboxIcon} alt="lightbox icon" />
        <CompanyLogo src={NietzscheIcon} alt="nietzsche icon" />
        <CompanyLogo src={SpheruleIcon} alt="spherule icon" />
      </ImageContainer>
    </Wrapper>
  );
};

export default SocialProof;
