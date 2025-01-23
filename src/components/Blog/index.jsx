import { Button, Stack, Typography } from "@mui/material";
import BlogCard from "./BlogCard";
import blogCardsData from "./blogCardsData";

const Blog = () => {
  return (
    <Stack
      sx={{ width: "100%", height: "100%", padding: "0 10px" }}
      justifyContent={"center"}
      alignItems={"center"}
      spacing={5}
    >
      <Stack sx={{ width: "92%" }} spacing={1}>
        <Stack
          direction="row"
          justifyContent={"space-between"}
          alignItems="center"
        >
          <Typography
            sx={{ color: "#E63F3A", fontSize: "16px", fontWeight: "600" }}
          >
            Our blog
          </Typography>
          <Button
            variant="contained"
            color="error"
            sx={{ textTransform: "none" }}
          >
            View all posts
          </Button>
        </Stack>
        <Typography variant="h5">Lastest blog posts</Typography>
        <Typography variant="body1" sx={{ color: "#475467" }}>
          Tool and strategies modern teams need to help their companies grow.
        </Typography>
      </Stack>

      <Stack
        direction={"row"}
        gap={4}
        sx={{ width: "92%", flexWrap: "wrap" }}
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
