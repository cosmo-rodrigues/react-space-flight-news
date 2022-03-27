//@ts-nocheck
import { ReactElement } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { render } from "@testing-library/react";

import { rootReducers } from "../../store/modules";
import { ThemeProvider } from "styled-components";
import { dark } from "../../styles/themes/dark";

export function renderWithRedux(
  component: ReactElement,
  { initialState = {}, store = createStore(rootReducers, initialState) } = {}
) {
  return {
    ...render(
      <ThemeProvider theme={dark}>
        <Provider store={store}>{component}</Provider>
      </ThemeProvider>
    ),
    store,
  };
}
