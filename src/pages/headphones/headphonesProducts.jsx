import React, { useState } from "react";
import {
  Box,

  IconButton,

  useTheme,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CardOfProducts from "./CardOfHeadphones";


export default function Main() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  

  return (
    <Container sx={{ mb: "20px", pb: "20px", pt: "20px" }}>
      <Stack
        direction={isSmallScreen ? "column" : "row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={2}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h5">Selected Products</Typography>
          <Typography variant="body2">
            All Our New Arrival in exclusive brand selection
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Link to="/CartPage" style={{ textDecoration: "none" }}>
            <IconButton
              aria-label="cart"
              sx={{ color: "#d23f57", flexGrow: 1 }}
            >
              <ShoppingCartOutlinedIcon
                sx={{ fontSize: isSmallScreen ? "30px" : "44px" }}
              />
            </IconButton>
          </Link>
        </Box>
      </Stack>
      <CardOfProducts/>
    </Container>
  );
}
