import { Avatar, AvatarGroup, Box } from "@mui/material";
import profile from "../../assets/header/profile.png";
import avtr2 from "../../assets/faq/avtr2.png";
import avtr3 from "../../assets/faq/avtr3.png";

const CustomAvatarGroup = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <AvatarGroup
        max={3}
        sx={{
          "& .MuiAvatar-root": {
            border: "1.5px solid #fff",

            fontSize: 20,
          },
        }}
      >
        <Avatar
          alt="Left Person"
          src={avtr2}
          sx={{ transform: "translateY(6px)", width: "38px", height: "38px" }}
        />
        <Avatar
          alt="Middle Person"
          src={profile}
          sx={{ zIndex: 100, width: "42px", height: "42px" }}
        />
        <Avatar
          alt="Right Person"
          src={avtr3}
          sx={{ transform: "translateY(6px)", width: "38px", height: "38px" }}
        />
      </AvatarGroup>
    </Box>
  );
};

export default CustomAvatarGroup;
