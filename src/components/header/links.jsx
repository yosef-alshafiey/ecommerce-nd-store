import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function HoverList() {
  return (
    <Stack direction={"row"} justifyContent={"space-around"}>
      <Box
        sx={{
          position: "relative",
          "&:hover .show-list": {
            display: "block",
          },
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            px: "15px",
            py: "25px",
            display: "flex",
            alignItems: "center",
            "&:hover": { cursor: "pointer" },
          }}
        >
          Home
          <ExpandMoreIcon sx={{ ml: 1 }} />
        </Typography>
        <Paper
          className="show-list"
          sx={{
            display: "none",
            position: "absolute",
            top: "100%",
            right: "-40%",
            width: "180%",
          }}
        >
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              sx={{
                position: "relative",
                "&:hover .showpaper": {
                  display: "block",
                },
              }}
            >
              <ListItemButton
                component="a"
                href="#"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <ListItemText primary="Products" />
                <KeyboardArrowRightIcon />
              </ListItemButton>
              <Paper
                sx={{
                  position: "absolute",
                  left: "100%",
                  top: 0,
                  display: "none",
                  minWidth: "140px",
                }}
                className="showpaper"
              >
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText primary="Add Product" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText primary="Edit Product" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Paper>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Orders" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Profile" />
              </ListItemButton>
            </ListItem>
          </List>
        </Paper>
      </Box>
    </Stack>
  );
}
