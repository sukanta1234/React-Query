import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeToken } from "../../../Toolkit/authSlice";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import { profile } from "../../../API/Axios/axiosInstance";

const drawerWidth = 240;
const navItems = ["Course", "Blog", "Contact"];

export default function DrawerAppBar(props) {
  const image=localStorage.getItem("image")
  const dispatch = useDispatch();
  const data = useSelector((state) => state.auth);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const handleClick = () => {
    dispatch(removeToken());
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        EDUCare
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton
            sx={{ justifyContent: "center" }}
            component={Link}
            to="/"
          >
            Home
          </ListItemButton>
        </ListItem>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              component={Link}
              to={`/${item}`}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton
            sx={{ justifyContent: "center" }}
            component={Link}
            to="/login"
          >
            Login
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            EDUCare
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button sx={{ color: "#fff" }} component={Link} to={"/"}>
              Home
            </Button>
            <Button sx={{ color: "#fff" }} component={Link} to={"/about"}>
              About
            </Button>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{ color: "#fff" }}
                component={Link}
                to={`/${item}`}
              >
                {item}
              </Button>
            ))}
            {data.isLoging === true ? (
              <>
              <Button sx={{ color: "#fff" }} component={Link} to={"/updata"}>
                  Update Password
                </Button>
                <Tooltip>
                  <IconButton sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src={profile(image)} />
                  </IconButton>
                </Tooltip>
                <Button sx={{ color: "#fff" }} onClick={handleClick}  component={Link} to={"/login"}>
                  Logout
                </Button>
                
              </>
            ) : (
              <>
                <Button sx={{ color: "#fff" }} component={Link} to={"/login"}>
                  Login
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main"></Box>
    </Box>
  );
}
