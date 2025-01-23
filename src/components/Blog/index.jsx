import { Button, Stack, Typography } from "@mui/material";
import BlogCard from "./BlogCard";
import blogCardsData from "./blogCardsData";

const Blog = () => {

  return (
    <Stack
      sx={{ width: "100%", height: "100%", padding: { xs: "20px 10px", sm: "45px 10px" } }}
      justifyContent={"center"}
      alignItems={"center"}
      spacing={5}
    >
      <Stack sx={{ width: { xs: "100%", sm: "92%" } }} spacing={1}>
        <Stack
          direction="row"
          justifyContent={"space-between"}
          alignItems="center"
        >
          <Typography
            sx={{ color: "#E63F3A", fontSize: { xs: "14px", sm: "16px" }, fontWeight: "600" }}
          >
            Our blog
          </Typography>
          <Button
            variant="contained"
            sx={{ textTransform: "none", fontSize: { xs: "12px", sm: "14px", backgroundColor: "#E63F3A" } }}
          >
            View all posts
          </Button>
        </Stack>
        <Typography variant="h5" sx={{ fontSize: { xs: "20px", sm: "24px", md: "28px" } }}>
          Latest blog posts
        </Typography>
        <Typography variant="body1" sx={{ color: "#475467", fontSize: { xs: "14px", sm: "16px" } }}>
          Tool and strategies modern teams need to help their companies grow.
        </Typography>
      </Stack>

      <Stack
        direction={"row"}
        gap={4}
        sx={{ width: { xs: "100%", sm: "92%" }, flexWrap: "wrap" }}
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        {blogCardsData.map((item, index) => (
          <BlogCard key={index} {...item} />
        ))}
      </Stack>
    </Stack>
  );
};

export default Blog;