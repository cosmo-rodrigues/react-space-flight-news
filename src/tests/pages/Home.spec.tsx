import React from "react";

import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";

import App from "../../App";

test("App should be render", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const searchElement = screen.getByPlaceholderText("Search…");

  expect(searchElement).toBeInTheDocument();
});
