import Header from "./components/Header";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import Features from "./components/Features";
import Testimonial from "./components/Testimonial";
import Faq from "./components/Faq";
import Blog from "./components/Blog";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import { Box } from "@mui/material";
import "./App.css";

function App() {
  return (
    <Box sx={{ width: "100%" }}>
      <Header />
      <Hero />
      <SocialProof />
      <Features />
      <Testimonial />
      <Faq />
      <Blog />
      <Cta />
      <Footer />
    </Box>
  );
}

export default App;
