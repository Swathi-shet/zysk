import { Card, Stack, Typography } from "@mui/material";
import styled from "styled-components";

const StyledText = styled(Typography)`
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #101828;
  text-align: center;
`;

const StyledInfo = styled(Typography)`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #475467;
  text-align: center;
`;

// eslint-disable-next-line react/prop-types
const FeatureCard = ({ icon: Icon, title, info, sx }) => {
  return (
    <Stack
      sx={{ maxWidth: "384px", margin: "20px 10px", ...sx }}
      justifyContent={"center"}
      alignItems={"center"}
      spacing={1.5}
    >
      <Card
        variant="outlined"
        sx={{
          borderRadius: "10px",
          width: "48px",
          height: "48px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Icon />
      </Card>
      <StyledText
        variant="body1"
        sx={{ textAlign: "center", marginTop: "8px" }}
      >
        {title}
      </StyledText>
      <StyledInfo
        variant="body2"
        sx={{ textAlign: "center", color: "#475467" }}
      >
        {info}
      </StyledInfo>
    </Stack>
  );
};

export default FeatureCard;
