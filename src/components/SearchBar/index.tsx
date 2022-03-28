import {
  AppBar,
  Toolbar,
  Box,
  CssBaseline,
  Select,
  MenuItem,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

import { useTheme as styledTheme } from "styled-components";

import { Search, SearchIconWrapper, StyledInputBase, style } from "./styles";

interface Props {
  value: string;
  setSorted(input: string): void;
  handleFilter(input: string): void;
}

export function SearchBar({ value, handleFilter, setSorted }: Props) {
  const myTheme = styledTheme();

  return (
    <Box sx={{ flexGrow: 1 }} data-testid="search-bar">
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
          <Select
            sx={{ ...style }}
            style={{
              color: myTheme.colors.text,
              backgroundColor: myTheme.colors.background,
            }}
            placeholder="Sort"
            defaultValue=""
            onChange={({ target }) => setSorted(target.value)}
          >
            <MenuItem value="ascending">Oldest</MenuItem>
            <MenuItem value="descending">Newest</MenuItem>
          </Select>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
