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
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const myTheme = styledTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  return (
    <AppBar
      sx={{ background: myTheme.colors.background }}
      data-testid="nav-bar"
    >
      <Toolbar>
        <Image src="logo.png" alt="Space Flight News Logo" />
        {isMatch ? (
          <>
            <DrawerComponent />
          </>
        ) : (
          <>
            <Tabs
              sx={{ marginLeft: "auto" }}
              indicatorColor="primary"
              textColor="inherit"
              value={value}
              style={{ color: myTheme.colors.sky, fontWeight: 700 }}
            >
              <Link to="/">
                <Tab onClick={() => handleChange(0)} label="Home" />
              </Link>
              <Link to="/services">
                <Tab onClick={() => handleChange(1)} label="Services" />
              </Link>
              <Link to="/about">
                <Tab onClick={() => handleChange(2)} label="About" />
              </Link>
              <Link to="/contact">
                <Tab onClick={() => handleChange(3)} label="Contact" />
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
