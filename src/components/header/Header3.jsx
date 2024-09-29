import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import {
  Box,
  Container,
  Link,
  ListItemIcon,
  ListItemText,
  MenuList,
  Stack,
  useMediaQuery,
} from "@mui/material";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import { useTheme } from "@emotion/react";
import CheckroomOutlinedIcon from "@mui/icons-material/CheckroomOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import WatchOutlinedIcon from "@mui/icons-material/WatchOutlined";
import { useState } from "react";
import Links from "./links";

export default function Header3() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  // @ts-ignore
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container sx={{ my: "40px" }}>
      <Stack
        direction={"row"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
      
        <Box>
          <Links />
        </Box>
      </Stack>
    </Container>
  );
}
