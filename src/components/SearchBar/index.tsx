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
  sort: string;
  handleFilter(input: string): void;
  handleChange(input: string): void;
}

export function SearchBar({ value, handleFilter, sort, handleChange }: Props) {
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
          <Select
            sx={{ ...style }}
            style={{
              color: myTheme.colors.text,
              backgroundColor: myTheme.colors.background,
            }}
            placeholder="Sort"
            value={sort}
            onChange={({ target }) => handleChange(target.value)}
          >
            <MenuItem value="asc">Newest</MenuItem>
            <MenuItem value="desc">Oldest</MenuItem>
          </Select>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
