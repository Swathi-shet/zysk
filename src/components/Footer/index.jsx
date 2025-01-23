import { Box, Link, Typography, Divider } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#fff",
        padding: "50px 50px 20px 50px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          marginBottom: "40px",
          gap: 4,
        }}
      >
        {[
          {
            title: "Product",
            items: [
              "Overview",
              "Features",
              "Solutions",
              "Tutorials",
              "Pricing",
              "Releases",
            ],
          },
          {
            title: "Company",
            items: [
              "About us",
              "Careers",
              "Press",
              "News",
              "Media kit",
              "Contact",
            ],
          },
          {
            title: "Resources",
            items: [
              "Blog",
              "Newsletter",
              "Events",
              "Help centre",
              "Tutorials",
              "Support",
            ],
          },
          {
            title: "Use cases",
            items: [
              "Startups",
              "Enterprise",
              "Government",
              "SaaS centre",
              "Marketplaces",
              "Ecommerce",
            ],
          },
          {
            title: "Social",
            items: [
              "Twitter",
              "LinkedIn",
              "Facebook",
              "GitHub",
              "AngelList",
              "Dribbble",
            ],
          },
          {
            title: "Legal",
            items: [
              "Terms",
              "Privacy",
              "Cookies",
              "Licenses",
              "Settings",
              "Contact",
            ],
          },
        ].map((section) => (
          <Box
            key={section.title}
            sx={{ flex: "1 1 100px", minWidth: "100px" }}
          >
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom sx={{ color: "#667085", fontSize: "10px" }}>
              {section.title}
            </Typography>
            <Box>
              {section.items.map((item) => (
                <Link
                  key={item}
                  href="#"
                  underline="hover"
                  color="inherit"
                  display="block"
                  sx={{ fontSize: "12px", fontWeight: "600", color: "#475467", lineHeight: "24px" }}
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Box>
        ))}
      </Box>

      <Divider sx={{ marginBottom: 3 }} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <img
          src="src/assets/logo.png"
          alt="Zysk Logo"
          style={{ height: "24px" }}
        />
        <Typography variant="body2" color="text.secondary" sx={{ color: "#667085", fontSize: "14px", fontWeight: "400", lineHeight: "24px" }}>
          © 2077 zysktechnologies. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
