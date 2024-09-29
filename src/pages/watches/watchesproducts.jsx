import React, { memo } from "react";
import {
  Box,
  IconButton,
  Container,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CardOfProducts from "./CardOfWatches";

const Main = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container sx={{ mb: 2, pb: 2, pt: 2 }}>
      <Stack
        direction={isSmallScreen ? "column" : "row"}
        justifyContent="space-between"
        alignItems="center"
        gap={2}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h5"> Selected Products</Typography>
          <Typography variant="body2">
            All our new arrivals in exclusive brand selection{" "}
          </Typography>
        </Box>
        <Link to="/CartPage" style={{ textDecoration: "none" }}>
          <IconButton aria-label="cart" sx={{ color: "#d23f57" }}>
            <ShoppingCartOutlinedIcon
              sx={{ fontSize: isSmallScreen ? 30 : 44 }}
            />
          </IconButton>
        </Link>
      </Stack>
      <CardOfProducts />
    </Container>
  );
};

export default memo(Main);
