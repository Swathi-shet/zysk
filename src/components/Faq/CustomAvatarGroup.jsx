import { Avatar, AvatarGroup, Box } from "@mui/material";

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
          src="src/assets/faq/avtr2.png"
          sx={{ transform: "translateY(6px)", width: "38px", height: "38px" }}
        />
        <Avatar
          alt="Middle Person"
          src="src/assets/header/profile.png"
          sx={{ zIndex: 100, width: "42px", height: "42px" }}
        />
        <Avatar
          alt="Right Person"
          src="src/assets/faq/avtr3.png"
          sx={{ transform: "translateY(6px)", width: "38px", height: "38px" }}
        />
      </AvatarGroup>
    </Box>
  );
};

export default CustomAvatarGroup;
