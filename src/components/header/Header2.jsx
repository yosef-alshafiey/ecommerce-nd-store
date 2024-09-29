import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  alpha,
  Badge,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  Stack,
  styled,
  useMediaQuery,
} from "@mui/material";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import CheckroomOutlinedIcon from "@mui/icons-material/CheckroomOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import WatchOutlinedIcon from "@mui/icons-material/WatchOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@emotion/react";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Close } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#777",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function header2() {
  const theme = useTheme();
  // @ts-ignore
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  return (
    <Container sx={{ my: 3, px: isSmallScreen ? 0 : "" }}>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Box flexGrow={isSmallScreen ? 0.2 : 0.5}>
          <Search
            sx={{
              border: (theme) => `solid 1px ${theme.palette.text.disabled}`,
              borderRadius: "20px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <SearchIconWrapper>
              <SearchIcon sx={{ fontSize: isSmallScreen ? "16px" : "auto" }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              sx={{ fontSize: isSmallScreen ? "12px" : "auto" }}
            />
            <Box>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                sx={{
                  p: "8px 10px",
                  bgcolor: "#d23f57",
                  borderBottomRightRadius: "20px",
                  borderTopRightRadius: "20px",
                  width: isSmallScreen ? "155px" : "199px",
                  fontSize: isSmallScreen ? "12.5px" : "14px",
                  color: "#fff",
                  "&:hover": { cursor: "pointer" },
                  alignItems: "center",
                }}
              >
                <GridViewOutlinedIcon
                  sx={{
                    mr: isSmallScreen ? 0 : 1,
                    fontSize: isSmallScreen ? "20px" : "auto",
                    ml: isSmallScreen ? 0.8 : 0,
                  }}
                />
                Categories
                <KeyboardArrowRightOutlinedIcon
                  sx={{
                    ml: isSmallScreen ? 0 : 4,
                    display: isSmallScreen ? "none" : "",
                  }}
                />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                sx={{
                  ".MuiPaper-root": {
                    width: isSmallScreen ? "155px" : "199px",
                    borderRadius: "25px",
                    textAlign: isSmallScreen ? "start" : "center",
                    ".MuiListItemIcon-root ": {
                      minWidth: isSmallScreen ? "0px" : "",
                    },
                  },
                }}
              >
                <MenuList>
                  <MenuItem onClick={handleClose}>
                    <ListItemButton component={Link} to="/clothes">
                      <ListItemIcon>
                        <CheckroomOutlinedIcon
                          fontSize="small"
                          sx={{ color: "#d23f57", ml: isSmallScreen ? 0 : 2 }}
                        />
                      </ListItemIcon>
                      <ListItemText>Clothes</ListItemText>
                    </ListItemButton>
                  </MenuItem>

                  <MenuItem onClick={handleClose}>
                    <ListItemButton component={Link} to="/headphones">
                      <ListItemIcon>
                        <HeadphonesOutlinedIcon
                          fontSize="small"
                          sx={{ color: "#d23f57", ml: isSmallScreen ? 0 : 2 }}
                        />
                      </ListItemIcon>
                      <ListItemText>Headphones</ListItemText>
                    </ListItemButton>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemButton component={Link} to="/watches">
                      <ListItemIcon>
                        <WatchOutlinedIcon
                          fontSize="small"
                          sx={{ color: "#d23f57", ml: isSmallScreen ? 0 : 2 }}
                        />
                      </ListItemIcon>
                      <ListItemText>Watches</ListItemText>
                    </ListItemButton>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Search>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: isSmallScreen ? 0 : 1.5,
            color: "theme.palette.text.secondary ",
          }}
        >
          <IconButton onClick={toggleDrawer("bottom", true)}>
            <MenuOutlinedIcon
              sx={{ fontSize: isSmallScreen ? "26px" : "34px" }}
            />
          </IconButton>
          <Box>
            <Drawer
              anchor={"bottom"}
              open={state["bottom"]}
              onClose={toggleDrawer("bottom", true)}
              sx={{
                ".MuiPaper-root": {
                  height: isSmallScreen ? "80%" : "70%",
                  mt: 8,
                },
              }}
            >
              <Stack
                direction={"column"}
                sx={{
                  width: isSmallScreen ? "80%" : "50%",
                  ml: isSmallScreen ? "10%" : "25%",
                }}
              >
                <IconButton
                  sx={{
                    mt: isSmallScreen ? "20px" : "60px",
                    mx: "auto",
                    transition: "0.3s ease",
                    "&:hover": {
                      transform: "rotate(360deg)",
                      color: "red",
                    },
                  }}
                >
                  <Close onClick={toggleDrawer("bottom", false)} />
                </IconButton>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    The Website Pages
                  </AccordionSummary>
                  <AccordionDetails>
                    <List>
                      <ListItem disablePadding>
                        <ListItemButton component={Link} to="/">
                          <ListItemText
                            primary="Home"
                            sx={{ textAlign: "center" }}
                          />
                        </ListItemButton>
                      </ListItem>

                      <ListItem disablePadding>
                        <ListItemButton component={Link} to="/clothes">
                          <ListItemText
                            primary="Clothes"
                            sx={{ textAlign: "center" }}
                          />
                        </ListItemButton>
                      </ListItem>

                      <ListItem disablePadding>
                        <ListItemButton component={Link} to="/watches">
                          <ListItemText
                            primary="Watches"
                            sx={{ textAlign: "center" }}
                          />
                        </ListItemButton>
                      </ListItem>

                      <ListItem disablePadding>
                        <ListItemButton component={Link} to="/headPhones">
                          <ListItemText
                            primary="HeadPhones"
                            sx={{ textAlign: "center" }}
                          />
                        </ListItemButton>
                      </ListItem>
                    </List>
                  </AccordionDetails>
                </Accordion>
              </Stack>
            </Drawer>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
}
