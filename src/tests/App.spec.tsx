import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";

import App from "../App";
import { renderWithRedux } from "./helpers/renderWithRedux";

describe("App component should be mounted with others components", () => {
  it("Should be have a nav bar component on screen", () => {
    renderWithRedux(<App />);

    const navBar = screen.getByTestId("nav-bar");

    expect(navBar).toBeInTheDocument();
  });

  it("Should be have a search bar component on screen", () => {
    renderWithRedux(<App />);

    const searchBar = screen.getByTestId("search-bar");

    expect(searchBar).toBeInTheDocument();
  });

  it("Should be have a footer component on screen", () => {
    renderWithRedux(<App />);

    const footer = screen.getByTestId("footer");

    expect(footer).toBeInTheDocument();
  });
});
