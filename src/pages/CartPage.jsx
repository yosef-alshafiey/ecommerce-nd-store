import React from "react";
import {
  CssBaseline,
  ThemeProvider,
  Grid,
  Container,
  Typography,
  Box,
  Paper,
  Button,
  IconButton,
  Divider,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Header1 from "./../components/header/Header1";
import Header2 from "./../components/header/Header2";
import { ColorModeContext, useMode } from "../../theme";
import { useCart } from "../components/CartContext";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const { cart, removeFromCart } = useCart();
  const [theme, colorMode] = useMode();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const formatPrice = (price) => {
    return `$${price.toFixed(2)}`;
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header1 />
        <Header2 />

        <Container maxWidth="md" sx={{ paddingY: 4 }}>
          <Typography
            variant="h4"
            gutterBottom
            align="center"
            sx={{ color: "#d23f57" }}
          >
            Your Cart
          </Typography>
          {cart.length === 0 ? (
            <Typography variant="h6" align="center">
              Your cart is empty
            </Typography>
          ) : (
            <Box>
              <Grid container spacing={2}>
                {cart.map((item) => (
                  <Grid item xs={12} key={item.id}>
                    <Paper
                      sx={{
                        display: "flex",
                        flexDirection: {
                          xs: "column",
                          sm: "row",
                        },
                        alignItems: "center",
                        padding: 2,
                        boxShadow: 2,
                        borderRadius: 2,
                        width: "100%",
                      }}
                    >
                      <Box sx={{ flexShrink: 0, mb: { xs: 2, sm: 0 } }}>
                        <img
                          src={item.selectedImage || item.images[0]} // عرض الصورة المحددة أو الصورة الأساسية
                          style={{
                            height: "200px",
                            width: "200px",
                            objectFit: "cover",
                          }}
                          alt={item.title}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "path/to/placeholder-image.jpg"; // ضع مسار الصورة البديلة هنا
                          }}
                        />
                      </Box>

                      <Box sx={{ flexGrow: 1, paddingLeft: 2 }}>
                        <Typography
                          variant="h6"
                          fontWeight="bold"
                          sx={{ mb: "20px" }}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          fontWeight="bold"
                          sx={{ mb: "10px" }}
                        >
                          {item.description}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          sx={{ mb: "10px" }}
                        >
                          Quantity: {item.quantity}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          Price: {formatPrice(item.price * item.quantity)}
                        </Typography>
                      </Box>
                      <IconButton
                        color="error"
                        onClick={() => {
                          if (
                            window.confirm(
                              "Are you sure you want to remove this item from the cart?"
                            )
                          ) {
                            removeFromCart(item.id);
                          }
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Paper>
                    <Divider />
                  </Grid>
                ))}
              </Grid>

              <Box sx={{ textAlign: "center", mt: 3 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Total Price: {formatPrice(totalPrice)}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ width: "100%", maxWidth: 200, bgcolor: "#d23f57" }}
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </Button>
              </Box>
            </Box>
          )}
        </Container>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default CartPage;
