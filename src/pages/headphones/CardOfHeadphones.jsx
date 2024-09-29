import React, { useState, useCallback } from "react";
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
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Add, Close, Remove } from "@mui/icons-material";
import { useCart } from "../../components/CartContext";
import headphonesData from "./../../pages/headphones/headphonesdata";
import style from "../../components/Stylebox";

// بطاقة المنتج
const ProductCard = React.memo(({ item, onOpen }) => {
  return (
    <Card
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
          onClick={() => onOpen(item)}
        >
          <ShoppingCartOutlinedIcon fontSize="small" sx={{ mr: 1 }} />
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
});

// المكون الرئيسي للبطاقات
function CardOfProducts() {
  const { addToCart } = useCart();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [largeImageSrc, setLargeImageSrc] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [loadingImage, setLoadingImage] = useState(true);

  const handleChange = (e) => {
    const value = Math.max(Number(e.target.value), 1);
    setQuantity(value);
  };

  const handleOpen = useCallback((product) => {
    setSelectedProduct(product);
    setLargeImageSrc(product.images[0]);
    setOpen(true);
  }, []);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
    setSelectedProduct(null);
    setQuantity(1);
    setSnackbarOpen(false);
  };

  const handleSnackbarOpen = () => {
    setSnackbarOpen(true);
  };

  return (
    <Container>
      <Stack
        marginTop={6}
        direction={"row"}
        gap={2}
        flexWrap={"wrap"}
        justifyContent={"center"}
      >
        {headphonesData.map((item) => (
          <ProductCard key={item.id} item={item} onOpen={handleOpen} />
        ))}
      </Stack>
      <Modal
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
              direction={{ xs: "column", sm: "row" }}
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
                          width: "110px",
                          height: "100px",
                          overflowY: "hidden",
                        }}
                      >
                        <img
                          src={image}
                          style={{
                            width: isSmallScreen ? "90px" : "80px",
                            height: isSmallScreen ? "90px" : "80px",
                            objectFit: "contain",
                            cursor: "pointer",
                            border: "2px solid transparent",
                          }}
                          onClick={() => {
                            setLargeImageSrc(image);
                            setLoadingImage(true);
                          }}
                        />
                      </Box>
                    ))}
                  </Stack>
                  {loadingImage && <CircularProgress />}
                  <img
                    src={largeImageSrc}
                    onLoad={() => setLoadingImage(false)}
                    style={{
                      maxWidth: isSmallScreen ? "250px" : "400px",
                      maxHeight: "55vh",
                      objectFit: "contain",
                    }}
                  />
                </Stack>
              </Box>

              <Stack spacing={isSmallScreen ? 1.5 : 3} minWidth={"300px"}>
                <Typography
                  variant={"h4"}
                  fontWeight={"bold"}
                  gutterBottom
                  sx={{ color: "#d23f57" }}
                >
                  {selectedProduct.title}
                </Typography>
                <Typography variant="body2">
                  {selectedProduct.description}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#d23f57" }}
                >
                  ${selectedProduct.price}
                </Typography>
                <Stack spacing={2}>
                  <Stack direction="row" alignItems="center" gap={2}>
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
                  <Rating
                    name="read-only"
                    value={selectedProduct.rating}
                    readOnly
                  />
                  <Button
                    sx={{ color: "#fff", bgcolor: "#d23f57", width: "70%" }}
                    variant="contained"
                    onClick={() => {
                      handleSnackbarOpen();
                      addToCart(selectedProduct, quantity, largeImageSrc);
                    }}
                  >
                    Add TO Cart
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          )}
        </Box>
      </Modal>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Item added to cart!
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default CardOfProducts;
