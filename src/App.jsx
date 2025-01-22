import Header from "./components/Header";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import Features from "./components/Features";
import Testimonial from "./components/Testimonial";
import Faq from "./components/Faq";
import Blog from "./components/Blog";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import { Box, Divider } from "@mui/material";
import "./App.css";

function App() {
  return (
    <Box sx={{ width: "100%" }}>
      <Header />
      <Box
        sx={{
          width: "100%",
          padding: "0 20px",
          marginTop: "64px",
        }}
      >
        <Hero />
        <SocialProof />
        <Divider sx={{ margin: "0 45px" }} />

        <Features />
        <Testimonial />
        <Faq />
        <Blog />
        <Cta />
        <Footer />
      </Box>
    </Box>
  );
}

export default App;
