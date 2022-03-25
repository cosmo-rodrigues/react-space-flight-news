import { useState } from "react";

import { NavLink as Link } from "react-router-dom";

import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { useTheme as styledTheme } from "styled-components";

import { Image } from "./styles";

import { DrawerComponent } from "./components/Drawer";
import { Switcher } from "./components/Switcher";

interface Props {
  toggleTheme(): void;
}

export function Navbar({ toggleTheme }: Props) {
  const [value, setValue] = useState();
  const theme = useTheme();
  const myTheme = styledTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar sx={{ background: myTheme.colors.background }}>
      <Toolbar>
        <Image src="logo.png" />
        {isMatch ? (
          <>
            <DrawerComponent />
          </>
        ) : (
          <>
            <Tabs
              sx={{ marginLeft: "auto" }}
              indicatorColor="secondary"
              textColor="inherit"
              value={value}
              onChange={(e, value) => setValue(value)}
              style={{ color: myTheme.colors.text }}
            >
              <Link to="/">
                <Tab label="Home" />
              </Link>
              <Link to="/services">
                <Tab label="Services" />
              </Link>
              <Link to="/about">
                <Tab label="About" />
              </Link>
              <Link to="/contact">
                <Tab label="Contact" />
              </Link>
            </Tabs>
            <Button sx={{ marginLeft: "auto" }} variant="contained">
              Login
            </Button>
            <Button sx={{ marginLeft: "10px" }} variant="contained">
              SignUp
            </Button>
          </>
        )}
        <Switcher toggleTheme={toggleTheme} />
      </Toolbar>
    </AppBar>
  );
}
