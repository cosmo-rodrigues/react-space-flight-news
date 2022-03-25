import { useState } from "react";

import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { Image } from "./styles";

import { DrawerComponent } from "./components/Drawer";
import { Switcher } from "./components/Switcher";

interface Props {
  toggleTheme(): void;
}

export function Navbar({ toggleTheme }: Props) {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar sx={{ background: "#063970" }}>
      <Toolbar>
        <Image src="logo.png" />
        {isMatch ? (
          <>
            <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
              Spaceship
            </Typography>
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
            >
              <Tab label="Home" />
              <Tab label="Services" />
              <Tab label="About" />
              <Tab label="Contact" />
            </Tabs>
            <Button sx={{ marginLeft: "auto" }} variant="contained">
              Login
            </Button>
            <Button sx={{ marginLeft: "10px" }} variant="contained">
              SignUp
            </Button>
          </>
        )}
        <Switcher label="dark" toggleTheme={toggleTheme} />
      </Toolbar>
    </AppBar>
  );
}
