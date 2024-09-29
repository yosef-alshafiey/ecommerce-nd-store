import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar, Autoplay, Pagination } from "swiper/modules";
import "./../hero/style.css";
import ElectricBoltOutlinedIcon from "@mui/icons-material/ElectricBoltOutlined";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";

// @ts-ignore
import Img1 from "./b1.jpg";
// @ts-ignore
import Img2 from "./b2.jpg";
// @ts-ignore
import Img3 from "./b3.jpg";
// @ts-ignore
import Img4 from "./b4.jpg";
// @ts-ignore
import Img5 from "./b5.jpg";
// @ts-ignore
import Img6 from "./b6.jpg";

import "swiper/css/pagination";
import { Link } from "react-router-dom";

export default function Hero() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Container
      sx={{ my: 4, display: isSmallScreen ? "" : "flex" }}
      className="Countainer"
    >
      <Swiper
        autoplay={{
          delay: 1900,
          disableOnInteraction: false,
        }}
        loop={true}
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar, Pagination, Autoplay]}
        className="mySwiper"
        style={{ borderRadius: "20px", width: isSmallScreen ? "90%" : "60%" }}
      >
        <SwiperSlide
          style={{
            height: isSmallScreen ? "300px" : "400px",
            position: "relative",
          }}
        >
          <img src={Img1} alt="Banner 1" loading="lazy" />
          <Stack
            direction={"column"}
            position={"absolute"}
            left={"20px"}
            textAlign={"start"}
            gap={isSmallScreen ? 5 : 4}
            top={"70px"}
          >
            <Typography
              sx={{ fontWeight: "800", display: isSmallScreen ? "none" : "" }}
            >
              LIFESTYLE COLLECTION
            </Typography>
            <Typography sx={{ fontWeight: "900" }}>Women</Typography>
            <Typography sx={{ fontWeight: "800" }}>
              SALE UP TO{" "}
              <span
                style={{
                  color: "#d23f57",
                  fontWeight: "900",
                  fontSize: "22px",
                }}
              >
                30% OFF
              </span>
            </Typography>
            <Typography
              sx={{ fontWeight: "800", display: isSmallScreen ? "none" : "" }}
            >
              GET FREE SHIPPING
            </Typography>
            <Button
              sx={{ bgcolor: "#d23f57", color: "#fff", width: "105px" }}
              component={Link}
              to="/clothes"
            >
              SHOP NOW
            </Button>
          </Stack>
        </SwiperSlide>
        <SwiperSlide style={{ height: isSmallScreen ? "300px" : "400px" }}>
          <img src={Img2} alt="Banner 2" loading="lazy" />
          <Stack
            direction={"column"}
            position={"absolute"}
            gap={3.5}
            top={isSmallScreen ? 120 : 140}
            right={"10%"}
            color={"#fff"}
          >
            <Typography
              sx={{ fontWeight: "800", display: isSmallScreen ? "none" : "" }}
            >
              LIFESTYLE COLLECTION
            </Typography>
            <Typography sx={{ fontWeight: "800" }}>
              SALE UP TO{" "}
              <span
                style={{
                  color: "#d23f57",
                  fontWeight: "900",
                  fontSize: "22px",
                }}
              >
                30% OFF
              </span>
            </Typography>
            <Typography
              sx={{ fontWeight: "800", display: isSmallScreen ? "none" : "" }}
            >
              GET FREE SHIPPING
            </Typography>
            <Button
              sx={{
                bgcolor: "#d23f57",
                color: "#fff",
                width: "50%",
                ml: "25%",
              }}
              component={Link}
              to="./clothes"
            >
              SHOP NOW
            </Button>
          </Stack>
        </SwiperSlide>
        <SwiperSlide style={{ height: isSmallScreen ? "300px" : "400px" }}>
          <img src={Img3} alt="Banner 3" loading="lazy" />
          <Stack
            direction={"column"}
            position={"absolute"}
            left={"20px"}
            textAlign={"start"}
            gap={isSmallScreen ? 4 : 3.5}
            top={isSmallScreen ? 150 : 70}
            color={isSmallScreen ? "#fff" : "black"}
          >
            <Typography
              sx={{ fontWeight: "800", display: isSmallScreen ? "none" : "" }}
            >
              LIFESTYLE COLLECTION
            </Typography>
            <Typography
              sx={{ fontWeight: "900", display: isSmallScreen ? "none" : "" }}
            >
              Women
            </Typography>
            <Typography sx={{ fontWeight: "800" }}>
              SALE UP TO{" "}
              <span
                style={{
                  color: "#d23f57",
                  fontWeight: "900",
                  fontSize: "22px",
                }}
              >
                30% OFF
              </span>
            </Typography>
            <Typography
              sx={{ fontWeight: "800", display: isSmallScreen ? "none" : "" }}
            >
              GET FREE SHIPPING
            </Typography>
            <Button
              sx={{ bgcolor: "#d23f57", color: "#fff", width: "105px" }}
              component={Link}
              to="./clothes"
            >
              SHOP NOW
            </Button>
          </Stack>
        </SwiperSlide>
        <SwiperSlide style={{ height: isSmallScreen ? "300px" : "400px" }}>
          <img src={Img4} alt="Banner 4" loading="lazy" />
          <Stack
            direction={"column"}
            position={"absolute"}
            gap={3}
            top={isSmallScreen ? 180 : 70}
            right={"10%"}
            color={"#fff"}
          >
            <Typography
              sx={{ fontWeight: "800", display: isSmallScreen ? "none" : "" }}
            >
              LIFESTYLE COLLECTION
            </Typography>
            <Typography
              sx={{ fontWeight: "900", display: isSmallScreen ? "none" : "" }}
            >
              MEN
            </Typography>
            <Typography sx={{ fontWeight: "800" }}>
              SALE UP TO{" "}
              <span
                style={{
                  color: "#d23f57",
                  fontWeight: "900",
                  fontSize: "22px",
                }}
              >
                30% OFF
              </span>
            </Typography>
            <Typography
              sx={{ fontWeight: "800", display: isSmallScreen ? "none" : "" }}
            >
              GET FREE SHIPPING
            </Typography>
            <Button
              sx={{
                bgcolor: "#d23f57",
                color: "#fff",
                width: "50%",
                ml: "25%",
              }}
              component={Link}
              to="./clothes"
            >
              SHOP NOW
            </Button>
          </Stack>
        </SwiperSlide>
        <SwiperSlide style={{ height: isSmallScreen ? "300px" : "400px" }}>
          <img src={Img6} alt="Banner 6" loading="lazy" />
          <Stack
            direction={"column"}
            position={"absolute"}
            gap={isSmallScreen ? 2 : 1}
            top={isSmallScreen ? 100 : 190}
            right={"8%"}
            color={"#fff"}
          >
            <Typography sx={{ fontWeight: "800" }}>BEST COLLECTION</Typography>
            <Typography sx={{ fontWeight: "900" }}>WATCHES</Typography>
            <Typography sx={{ fontWeight: "800" }}>
              SALE UP TO{" "}
              <span
                style={{
                  color: "#d23f57",
                  fontWeight: "900",
                  fontSize: "22px",
                }}
              >
                60% OFF
              </span>
            </Typography>
            <Typography
              sx={{ fontWeight: "800", display: isSmallScreen ? "none" : "" }}
            >
              GET FREE SHIPPING
            </Typography>
            <Button
              sx={{
                bgcolor: "#d23f57",
                color: "#fff",
                width: "50%",
                ml: "25%",
              }}
              component={Link}
              to="./watches"
            >
              SHOP NOW
            </Button>
          </Stack>
        </SwiperSlide>
      </Swiper>
      <Stack
        direction={"row"}
        width={isSmallScreen ? "100%" : "25%"}
        flexWrap={"wrap"}
        my={2}
        gap={isSmallScreen ? 0.5 : 4}
        color={theme.palette.text.secondary}
        textAlign={"center"}
      >
        <Paper
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: isSmallScreen ? 1 : 3,
            flexGrow: 1,
            py: 1,
            bgcolor: theme.palette.mode === "dark" ? "#0000" : "",
          }}
        >
          <ElectricBoltOutlinedIcon sx={{}} />
          <Stack direction={"column"}>
            <Typography>Fast Delivery</Typography>
            <Typography>Start From $10</Typography>
          </Stack>
        </Paper>
        <Paper
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: isSmallScreen ? 1 : 3,
            flexGrow: 1,
            py: 1,
            bgcolor: theme.palette.mode === "dark" ? "#0000" : "",
          }}
        >
          <WorkspacePremiumOutlinedIcon />
          <Stack direction={"column"}>
            <Typography>Money Guarantee</Typography>
            <Typography>5 Days Back</Typography>
          </Stack>
        </Paper>
        <Paper
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: isSmallScreen ? 1 : 3,
            flexGrow: 1,
            py: 1,
            bgcolor: theme.palette.mode === "dark" ? "#0000" : "",
          }}
        >
          <AccessAlarmOutlinedIcon />
          <Stack direction={"column"}>
            <Typography>365 Days</Typography>
            <Typography>For Free return</Typography>
          </Stack>
        </Paper>
        <Paper
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: isSmallScreen ? 1 : 3,
            flexGrow: 1,
            py: 1,
            bgcolor: theme.palette.mode === "dark" ? "#0000" : "",
          }}
        >
          <CreditScoreOutlinedIcon />
          <Stack direction={"column"}>
            <Typography>Payment</Typography>
            <Typography>Secure System</Typography>
          </Stack>
        </Paper>
      </Stack>
    </Container>
  );
}
