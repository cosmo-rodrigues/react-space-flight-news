import {
  styled,
  alpha,
  InputBase,
  AppBar,
  Toolbar,
  Box,
  CssBaseline,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { useTheme as styledTheme } from "styled-components";

const Search = styled("div")(({ theme }) => ({
  display: "flex",
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  flexDirection: "row-reverse",
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
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
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(2)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "30ch",
      },
    },
  },
}));

interface Props {
  value: string;
  handleFilter(input: string): void;
}

export function SearchBar({ value, handleFilter }: Props) {
  const myTheme = styledTheme();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <AppBar
        position="static"
        style={{ backgroundColor: "transparent", boxShadow: "none" }}
      >
        <Toolbar
          sx={{
            justifyContent: "flex-end",
          }}
        >
          <Search>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              value={value}
              onChange={({ target }) => handleFilter(target.value)}
              style={{
                color: myTheme.colors.text,
                backgroundColor: myTheme.colors.background,
              }}
            />
            <SearchIconWrapper>
              <SearchIcon
                style={{
                  color: myTheme.colors.text,
                }}
              />
            </SearchIconWrapper>
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
