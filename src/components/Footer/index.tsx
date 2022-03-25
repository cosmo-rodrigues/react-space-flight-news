import { Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";

import { useTheme as styledTheme } from "styled-components";

import { Container } from "./styles";

export function Footer() {
  const myTheme = styledTheme();

  return (
    <Container>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={4}>
          <Box borderBottom={3} color={myTheme.colors.secondary}>
            Help
          </Box>
          <Box>
            <Link to="/contact">Contact</Link>
          </Box>
          <Box>
            <Link to="/services">Service</Link>
          </Box>
          <Box>
            <Link to="/privacy">Privacy</Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box borderBottom={3} color={myTheme.colors.secondary}>
            Account
          </Box>
          <Box>
            <Link to="/login">Login</Link>
          </Box>
          <Box>
            <Link to="/sing-up">Sing up</Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box borderBottom={3} color={myTheme.colors.secondary}>
            Messages
          </Box>
          <Box>
            <Link to="/">Backup</Link>
          </Box>
          <Box>
            <Link to="/">History</Link>
          </Box>
          <Box>
            <Link to="/">Roll</Link>
          </Box>
        </Grid>
      </Grid>
      <Box
        textAlign="center"
        pt={{ xs: 5, sm: 10, lg: 5 }}
        pb={{ xs: 5, sm: 0 }}
        color={myTheme.colors.text}
      >
        Cosmo Rodrigues &reg; - {new Date().getFullYear()}
      </Box>
    </Container>
  );
}
