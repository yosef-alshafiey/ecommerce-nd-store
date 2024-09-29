// @ts-ignore
import React, { useContext, useState } from "react";
import {
  Container,
  TextField,
  Box,
  Typography,
  Button,
  Grid,
  Paper,
  CssBaseline,
  ThemeProvider,
  // @ts-ignore
  useTheme,
  Snackbar,
} from "@mui/material";
import Header2 from "./../components/header/Header2";
import { ColorModeContext, useMode } from "./../../theme";
import Header1 from "./../components/header/Header1";

function Checkout() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const [errors, setErrors] = useState({});

  const [theme, colorMode] = useMode();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.postalCode) newErrors.postalCode = "Postal Code is required";

    if (!formData.cardNumber) {
      newErrors.cardNumber = "Card Number is required";
    } else if (formData.cardNumber.length !== 16) {
      newErrors.cardNumber = "Card Number must be 16 digits";
    }

    if (!formData.expiryDate) {
      newErrors.expiryDate = "Expiry Date is required";
    } else if (!/^\d{2}\/\d{2}$/.test(formData.expiryDate)) {
      newErrors.expiryDate = "Expiry Date must be in MM/YY format";
    }

    if (!formData.cvv) {
      newErrors.cvv = "CVV is required";
    } else if (formData.cvv.length !== 3) {
      newErrors.cvv = "CVV must be 3 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };
  return (
    <ColorModeContext.Provider
      // @ts-ignore
      value={colorMode}
    >
      <ThemeProvider
        // @ts-ignore
        theme={theme}
      >
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
            Checkout
          </Typography>

          <Paper elevation={3} sx={{ padding: 3 }}>
            <Box
              component="form"
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <Grid container spacing={2}>
                {/* Name Fields */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="First Name"
                    variant="outlined"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    // @ts-ignore
                    error={!!errors.firstName}
                    // @ts-ignore
                    helperText={errors.firstName}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Last Name"
                    variant="outlined"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    // @ts-ignore
                    error={!!errors.lastName}
                    // @ts-ignore
                    helperText={errors.lastName}
                  />
                </Grid>

                {/* Address Field */}
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Address"
                    variant="outlined"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    // @ts-ignore
                    error={!!errors.address}
                    // @ts-ignore
                    helperText={errors.address}
                  />
                </Grid>

                {/* City and Postal Code */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="City"
                    variant="outlined"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    // @ts-ignore
                    error={!!errors.city}
                    // @ts-ignore
                    helperText={errors.city}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Postal Code"
                    variant="outlined"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    // @ts-ignore
                    error={!!errors.postalCode}
                    // @ts-ignore
                    helperText={errors.postalCode}
                  />
                </Grid>

                {/* Payment Details */}
                <Grid item xs={12}>
                  <Typography variant="h6" color="textPrimary">
                    Payment Information
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Card Number"
                    variant="outlined"
                    type="number"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    // @ts-ignore
                    error={!!errors.cardNumber}
                    // @ts-ignore
                    helperText={errors.cardNumber}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    required
                    fullWidth
                    label="Expiry Date"
                    variant="outlined"
                    placeholder="MM/YY"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleChange}
                    // @ts-ignore
                    error={!!errors.expiryDate}
                    // @ts-ignore
                    helperText={errors.expiryDate}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    required
                    fullWidth
                    label="CVV"
                    variant="outlined"
                    type="number"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    // @ts-ignore
                    error={!!errors.cvv}
                    // @ts-ignore
                    helperText={errors.cvv}
                  />
                </Grid>
              </Grid>

              <Box sx={{ mt: 3, textAlign: "center" }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  type="submit"
                  sx={{ bgcolor: "#d23f57", fontWeight: "bold" }}
                >
                  Complete Purchase
                </Button>
                <Snackbar
                  open={openSnackbar}
                  autoHideDuration={6000}
                  onClose={handleCloseSnackbar}
                  message="Purchase Completed Successfully!"
                />
              </Box>
            </Box>
          </Paper>
        </Container>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default Checkout;
