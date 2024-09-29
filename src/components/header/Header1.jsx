import {
  Box,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useContext, useState } from "react";
import { ColorModeContext } from "../../../theme";
import { DarkModeOutlined, LightModeOutlined, LineStyle, TextRotationDown } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
const options = ["AR", "EN"];

export default function header1() {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        bgcolor: "#6A9C89",
        py: "3px",
        borderBottomLeftRadius: "4px",
        borderBottomRightRadius: "4px",
      }}
    >
      <Container >
        <Stack direction={"row"} alignItems={"center"}>
         <Link to='/' style={{ textDecoration: 'none' }}>
            <Typography
              sx={{
                p: "3px 10px",
                bgcolor: "#d23f57",
                borderRadius: "12px",
                fontSize: isSmallScreen ? "12px" : "14px",
                fontWeight: "bold",
                color: "#fff",
              }}
              // @ts-ignore
              variant="bady2"
            >
              ND SToRe
            </Typography>
         </Link>
          <Box flexGrow={1} />
          <div>
            {theme.palette.mode === "light" ? (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <LightModeOutlined
                  sx={{
                    color: "#fff",
                    fontSize: isSmallScreen ? "19px" : "24px",
                  }}
                />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <DarkModeOutlined
                  sx={{
                    color: "#fff",
                    fontSize: isSmallScreen ? "19px" : "24px",
                  }}
                />
              </IconButton>
            )}
          </div>

          <FacebookIcon
            sx={{
              fontSize: isSmallScreen ? "18px" : "24px",
              color: "#fff",
              ml: 1,
            }}
          />
          <XIcon
            sx={{
              fontSize: isSmallScreen ? "18px" : "24px",
              color: "#fff",
              ml: 1,
            }}
          />
          <InstagramIcon
            sx={{
              fontSize: isSmallScreen ? "19px" : "24px",
              color: "#fff",
              ml: 1,
              mr: 1,
            }}
          />

          <List
            component="nav"
            aria-label="Device settings"
            sx={{ p: "0px", ml: isSmallScreen ? 1 : 2 }}
          >
            <ListItem
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
              sx={{
                "&:hover": { cursor: "pointer" },
                px: "0px",
              }} /*معني دي السهم بيتغير شكله  */
            >
              <ListItemText
                primary=""
                secondary={options[selectedIndex]}
                sx={{
                  ".MuiTypography-root": {
                    fontSize: isSmallScreen ? "12px" : "14px",
                    color: "#fff",
                    fontFamily: "Open Sans",
                  },
                }}
              />
              <ExpandMoreIcon
                sx={{
                  color: "#fff",
                  fontSize: isSmallScreen ? "16px" : "18px",
                }}
              />
            </ListItem>
          </List>
          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "lock-button",
              role: "listbox",
            }}
          >
            {options.map((option, index) => (
              <MenuItem
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
                sx={{
                  fontSize: isSmallScreen ? "11px" : "13px",
                  p: "3px 10px",
                  fontFamily: "Open Sans",
                  minHeight: "10px",
                }}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </Stack>
      </Container>
    </Box>
  );
}
