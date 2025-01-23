import { useState } from "react";
import {
  Stack,
  Button,
  Avatar,
  Typography,
  Paper,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../assets/Logo";

const StyledButton = styled(Button)`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #475467;
`;

const Header = () => {
  const [product, setProduct] = useState(null);
  const [res, setRes] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(null);
  const open = Boolean(product);
  const isResOpen = Boolean(res);
  const isMobileMenuOpen = Boolean(mobileMenu);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClick = (event) => {
    setProduct(event.currentTarget);
  };

  const handleClose = () => {
    setProduct(null);
  };

  const handleResClick = (event) => {
    setRes(event.currentTarget);
  };

  const handleResClose = () => {
    setRes(null);
  };

  const handleMobileMenuClick = (event) => {
    setMobileMenu(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenu(null);
  };

  return (
    <Paper
      sx={{ width: "100vw", position: "fixed", top: 0, left: 0, zIndex: 1000 }}
    >
      <Stack
        direction="row"
        spacing={2}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 24px",
          width: "100%",
        }}
      >
        <Stack direction="row" spacing={4} alignItems="center">
          <Logo />
          {!isMobile && (
            <Stack direction="row" spacing={2}>
              <StyledButton color="inherit">
                <Typography variant="styledButton">Home</Typography>
              </StyledButton>
              <div>
                <StyledButton color="inherit" onClick={handleClick}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Typography variant="styledButton">Products</Typography>
                    <KeyboardArrowDownIcon />
                  </Stack>
                </StyledButton>
                <Menu
                  id="basic-menu-product"
                  anchorEl={product}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-styledButton",
                  }}
                >
                  <MenuItem onClick={handleClose}>Product 1</MenuItem>
                  <MenuItem onClick={handleClose}>Product 2</MenuItem>
                  <MenuItem onClick={handleClose}>Product 3</MenuItem>
                </Menu>
              </div>
              <div>
                <StyledButton color="inherit" onClick={handleResClick}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Typography variant="styledButton">Resources</Typography>
                    <KeyboardArrowDownIcon />
                  </Stack>
                </StyledButton>
                <Menu
                  id="basic-menu-res"
                  anchorEl={res}
                  open={isResOpen}
                  onClose={handleResClose}
                >
                  <MenuItem onClick={handleResClose}>Resource 1</MenuItem>
                  <MenuItem onClick={handleResClose}>Resource 2</MenuItem>
                  <MenuItem onClick={handleResClose}>Resource 3</MenuItem>
                </Menu>
              </div>
              <StyledButton color="inherit">
                <Typography variant="styledButton">Pricing</Typography>
              </StyledButton>
            </Stack>
          )}
        </Stack>
        {isMobile ? (
          <>
            <Button color="inherit" onClick={handleMobileMenuClick}>
              <MenuIcon />
            </Button>
            <Menu
              id="mobile-menu"
              anchorEl={mobileMenu}
              open={isMobileMenuOpen}
              onClose={handleMobileMenuClose}
            >
              <MenuItem onClick={handleMobileMenuClose}>Home</MenuItem>
              <MenuItem onClick={handleClick}>Products</MenuItem>
              <MenuItem onClick={handleResClick}>Resources</MenuItem>
              <MenuItem onClick={handleMobileMenuClose}>Pricing</MenuItem>
            </Menu>
          </>
        ) : (
          <Avatar alt="profile" src="src/assets/header/profile.png" />
        )}
      </Stack>
    </Paper>
  );
};

export default Header;
