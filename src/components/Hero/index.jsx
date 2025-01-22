import { Button, Stack, Typography } from "@mui/material";
import PlayIcon from "../../assets/hero/PlayIcon.png";
import ArrowRight from "../../assets/hero/ArrowRight.png";
import ContainerImg from "../../assets/hero/ContainerImg.png";
import styled from "styled-components";

const StyledTypography = styled(Typography)`
  font-weight: 600;
  font-size: 50px;
  line-height: 72px;
  color: #101828;
  text-align: center;
`;

const StyledInfo = styled(Typography)`
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #475467;
  width: 600px;
  text-align: center;
`;
const ResponsiveImageContainer = styled(Stack)`
  position: relative;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const ResponsiveImage = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto;
  object-fit: contain;
`;

const Hero = () => {
  return (
    <Stack
      sx={{
        paddingTop: "100px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        variant="outlined"
        color="error"
        sx={{
          borderRadius: "170px",
          padding: "3px 16px 3px 3px",
          textTransform: "none",
          marginBottom: "15px",
          backgroundColor: "rgba(230, 63, 58, 0.1)",
        }}
        endIcon={
          <img src={ArrowRight} alt="play icon" width={12} height={12} />
        }
      >
        <Button
          variant="outlined"
          color="error"
          sx={{
            borderRadius: "30px",
            marginRight: "10px",
            padding: "0.2px 10px",
            textTransform: "none",
            backgroundColor: "#fff",
          }}
        >
          New feature
        </Button>
        Check out the team dashboard
      </Button>
      <StyledTypography variant="h3" sx={{ marginBottom: "20px" }}>
        Beautiful analytics to grow smarter
      </StyledTypography>
      <StyledInfo variant="body1" sx={{ marginBottom: "40px" }}>
        Powerful, self-serve product and growth analytics to help you convert,
        engage, and retain more users. Trusted by over 4,000 startups.
      </StyledInfo>

      <Stack direction="row" spacing={2} sx={{ marginBottom: "35px" }}>
        <Button
          variant="outlined"
          color="inherit"
          startIcon={
            <img src={PlayIcon} alt="play icon" width={16} height={16} />
          }
          sx={{
            borderRadius: "30px",
            textTransform: "none",
            borderColor: "#D0D5DD",
          }}
        >
          Demo
        </Button>
        <Button
          variant="contained"
          color="error"
          sx={{
            borderRadius: "30px",
            textTransform: "none",
            boxShadow: "none",
          }}
        >
          Sign up
        </Button>
      </Stack>
      <ResponsiveImageContainer>
        <ResponsiveImage src={ContainerImg} alt="Container-Image" />
      </ResponsiveImageContainer>
    </Stack>
  );
};

export default Hero;
