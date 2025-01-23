import {
  Avatar,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ArrowTopRightIcon from "../../assets/blogs/ArrowTopRightIcon";

// eslint-disable-next-line react/prop-types
const BlogCard = (item) => {
  const { img, domain, title, description, author, date, profile } = item;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack
      sx={{ width: { xs: "100%", sm: "384px" }, paddingBottom: "35px" }}
      spacing={2}
    >
      <Stack>
        <img
          src={img}
          alt={domain}
          style={{
            width: "100%",
            height: isMobile ? "180px" : "240px",
            objectFit: "cover",
          }}
        />
      </Stack>
      <Stack>
        <Typography
          sx={{ color: "#E63F3A", fontSize: "14px", fontWeight: "600" }}
        >
          {domain}
        </Typography>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography
            sx={{
              color: "#101828",
              fontSize: { xs: "18px", sm: "22px" },
              fontWeight: "600",
            }}
            variant="body1"
          >
            {title}
          </Typography>
          <ArrowTopRightIcon />
        </Stack>
        <Typography
          sx={{
            color: "#475467",
            fontSize: { xs: "12px", sm: "14px" },
            fontWeight: "400",
          }}
        >
          {description}
        </Typography>

        <Stack direction={"row"} spacing={2} sx={{ marginTop: "15px" }}>
          <Stack>
            <Avatar
              src={profile}
              alt="author"
              sx={{
                width: { xs: "32px", sm: "40px" },
                height: { xs: "32px", sm: "40px" },
              }}
            />
          </Stack>
          <Stack>
            <Typography
              sx={{
                color: "#344054",
                fontSize: { xs: "12px", sm: "14px" },
                fontWeight: "600",
              }}
            >
              {author}
            </Typography>
            <Typography
              sx={{
                color: "#475467",
                fontSize: { xs: "10px", sm: "12px" },
                fontWeight: "400",
              }}
            >
              {date}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default BlogCard;
