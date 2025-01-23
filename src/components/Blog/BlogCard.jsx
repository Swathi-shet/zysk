import { Avatar, Stack, Typography } from "@mui/material";
import ArrowTopRightIcon from "../../assets/blogs/ArrowTopRightIcon";

// eslint-disable-next-line react/prop-types
const BlogCard = (item) => {
  const { img, domain, title, description, author, date, profile } = item;
  return (
    <Stack sx={{ width: "384px", paddingBottom: "35px" }} spacing={2}>
      <Stack>
        <img
          src={img}
          alt={domain}
          style={{ width: "384px", height: "240px" }}
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
            sx={{ color: "#101828", fontSize: "22px", fontWeight: "600" }}
            variant="body1"
          >
            {title}
          </Typography>
          <ArrowTopRightIcon />
        </Stack>
        <Typography
          sx={{ color: "#475467", fontSize: "14px", fontWeight: "400" }}
        >
          {description}
        </Typography>

        <Stack direction={"row"} spacing={2} sx={{ marginTop: "15px" }}>
          <Stack>
            <Avatar src={profile} alt="author" />
          </Stack>
          <Stack>
            <Typography
              sx={{ color: "#344054", fontSize: "14px", fontWeight: "600" }}
            >
              {author}
            </Typography>
            <Typography
              sx={{ color: "#475467", fontSize: "12px", fontWeight: "400" }}
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
