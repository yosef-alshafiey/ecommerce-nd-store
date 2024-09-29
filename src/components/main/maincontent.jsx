import React, { useContext, useState, useMemo, useCallback } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Modal,
  Rating,
  TextField,
  useTheme,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  ToggleButton,
  ToggleButtonGroup,
  Snackbar,
  Alert,
} from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Add, Close, Remove } from "@mui/icons-material";
import { useCart } from "../../components/CartContext";
import headphonesData from "./../../pages/headphones/headphonesdata";
import clothesData from "./../../pages/clothes/clothesdata";
import watchesData from "../../pages/watches/watchesdata";
import "../../index.css";
import style from "./../Stylebox";

const MemoizedCard = React.memo(Card);
const MemoizedModal = React.memo(Modal);
const MemoizedSnackbar = React.memo(Snackbar);
const MemoizedAlert = React.memo(Alert);

const Main = React.memo(() => {
  const { addToCart } = useCart();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [largeImageSrc, setLargeImageSrc] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredData = useMemo(() => {
    switch (selectedCategory) {
      case "All":
        return [...clothesData, ...watchesData, ...headphonesData];
      case "Clothes":
        return clothesData;
      case "Watches":
        return watchesData;
      case "Headphones":
        return headphonesData;
      default:
        return [];
    }
  }, [selectedCategory]);

  const handleChange = (e) => {
    const value = Math.max(Number(e.target.value), 1);
    setQuantity(value);
  };

  const handleOpen = useCallback((product) => {
    setSelectedProduct(product);
    setLargeImageSrc(product.images[0]);
    setOpen(true);
  }, []);

  const handleClose = useCallback((event, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
    resetState();
  }, []);

  const resetState = useCallback(() => {
    setSelectedProduct(null);
    setQuantity(1);
    setSnackbarOpen(false);
  }, []);

  const handleCategoryChange = (event, newCategory) => {
    if (newCategory) {
      setSelectedCategory(newCategory);
    }
  };

  const handleSnackbarOpen = () => {
    setSnackbarOpen(true);
  };

  return (
    <Container sx={{ mb: "20px", pb: "20px", pt: "20px" }} className="Countainer">
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
            <IconButton aria-label="cart" sx={{ color: "#d23f57", flexGrow: 1 }}>
              <ShoppingCartOutlinedIcon sx={{ fontSize: isSmallScreen ? "30px" : "44px" }} />
            </IconButton>
          </Link>
        </Box>
        <Box>
          <ToggleButtonGroup
            color="error"
            value={selectedCategory}
            exclusive
            onChange={handleCategoryChange}
            aria-label="text alignment"
            sx={{
              ".MuiButtonBase-root": { fontSize: isSmallScreen ? "11px" : "" },
            }}
          >
            <ToggleButton value="All">All Products</ToggleButton>
            <ToggleButton value="Clothes">Clothes</ToggleButton>
            <ToggleButton value="Watches">Watches</ToggleButton>
            <ToggleButton value="Headphones">Headphones</ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Stack>

      <Stack
        marginTop={6}
        direction={"row"}
        gap={2}
        flexWrap={"wrap"}
        justifyContent={"center"}
      >
        {filteredData.map((item) => (
          <MemoizedCard
            key={item.id}
            sx={{
              width: 320,
              "&:hover .MuiCardMedia-root ": {
                scale: "1.1",
                transition: "0.35s",
              },
              ".MuiCardMedia-root": {
                objectFit: "contain",
                width: "100%",
                height: "260px",
              },
            }}
          >
            <CardMedia
              sx={{ height: 200, objectFit: "contain" }}
              image={item.images[0]}
              title={item.title}
            />
            <CardContent>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography gutterBottom variant="h6" component="div">
                  {item.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="p"
                  sx={{ color: "#d23f57", fontWeight: "bold" }}
                >
                  {item.price}$
                </Typography>
              </Stack>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ flexGrow: "1", minHeight: "80px" }}
              >
                {item.description}
              </Typography>
              <Rating name="read-only" value={item.rating} precision={0.5} readOnly />
            </CardContent>
            <CardActions sx={{ justifyContent: "space-between" }}>
              <Button
                size="large"
                sx={{
                  textTransform: "capitalize",
                  color: "#d23f57",
                  fontWeight: "bold",
                }}
                onClick={() => handleOpen(item)}
              >
                <ShoppingCartOutlinedIcon fontSize="small" sx={{ mr: 1 }} />
                Add To Cart
              </Button>
            </CardActions>
          </MemoizedCard>
        ))}
      </Stack>

      <MemoizedModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          ".MuiBox-root": {
            width: isSmallScreen ? "99%" : "100%",
            maxHeight: "70%",
            paddingX: isSmallScreen ? "" : "20px",
            overflowX: "hidden",
          },
        }}
      >
        <Box sx={style}>
          <IconButton
            sx={{
              position: "absolute",
              right: "1%",
              top: "0%",
              transition: "0.3s ease",
              "&:hover": {
                transform: "rotate(360deg)",
                color: "red",
              },
            }}
            onClick={handleClose}
          >
            <Close />
          </IconButton>

          {selectedProduct && (
            <Stack
              direction={isSmallScreen ? "column" : "row"}
              gap={isSmallScreen ? 0 : 5}
              alignItems="center"
              marginTop={"20px"}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Stack direction={"row"} gap={1}>
                  <Stack
                    direction={"column"}
                    spacing={0.5}
                    sx={{ width: "100%", mb: 2 }}
                  >
                    {selectedProduct.images.map((image, index) => (
                      <Box
                        key={index}
                        sx={{
                          flexShrink: 1,
                          width: "90px",
                          height: "90px",
                          overflowY: "hidden",
                        }}
                      >
                        <img
                          src={image}
                          style={{
                            width: isSmallScreen ? "80px" : "80px",
                            height: isSmallScreen ? "80px" : "80px",
                            objectFit: "contain",
                            cursor: "pointer",
                            border: "2px solid transparent",
                          }}
                          onClick={() => {
                            setLargeImageSrc(image);
                          }}
                        />
                      </Box>
                    ))}
                  </Stack>
                  <img
                    src={largeImageSrc}
                    style={{
                      maxWidth: isSmallScreen ? "250px" : "400px",
                      maxHeight: "54vh",
                      objectFit: "contain",
                    }}
                  />
                </Stack>
              </Box>

              <Stack spacing={isSmallScreen ? 1.5 : 3} minWidth={"300px"} marginTop={"20px"} textAlign={"center"}>
                <Typography
                  variant={"h4"}
                  fontWeight={"bold"}
                  gutterBottom
                  sx={{ color: "#d23f57" }}
                >
                  {selectedProduct.title}
                </Typography>
                <Typography variant="h6">{selectedProduct.price}$</Typography>
                <Typography variant="body2" sx={{ maxHeight: "30%" }}>
                  {selectedProduct.description}
                </Typography>
                
                <Stack direction="row" alignItems="center" gap={2} justifyContent={"center"}>
                            <IconButton
                              onClick={() =>
                                setQuantity((prev) => Math.max(prev - 1, 1))
                              }
                              sx={{
                                backgroundColor: "#d23f57",
                                color: "white",
                                "&:hover": { backgroundColor: "#b51e3b" },
                              }}
                            >
                              <Remove />
                            </IconButton>

                            <TextField
                              value={quantity}
                              onChange={handleChange}
                              type="number"
                              InputProps={{
                                inputProps: { min: 1 },
                                sx: { textAlign: "center" },
                              }}
                              sx={{
                                width: "60px",
                                borderRadius: 1,
                                "& .MuiOutlinedInput-root": {
                                  borderColor: "#d23f57",
                                  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)", // إضافة ظل للمدخل
                                },
                              }}
                            />

                            <IconButton
                              onClick={() => setQuantity((prev) => prev + 1)} // زيادة الكمية
                              sx={{
                                backgroundColor: "#d23f57",
                                color: "white",
                                "&:hover": { backgroundColor: "#b51e3b" },
                              }}
                            >
                              <Add />
                            </IconButton>
                          </Stack>
                        <Button
                        sx={{bgcolor:"#d23f57",mt:"10px",color:"#fff"}}
                          variant="contained"
                          onClick={() => {
                            addToCart(selectedProduct, quantity);
                            handleSnackbarOpen();
                          }}
                        >
                          Add To Cart
                        </Button>
              </Stack>
            </Stack>
          )}
        </Box>
      </MemoizedModal>

      <MemoizedSnackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <MemoizedAlert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Product added to cart!
        </MemoizedAlert>
      </MemoizedSnackbar>
    </Container>
  );
});

export default Main;
