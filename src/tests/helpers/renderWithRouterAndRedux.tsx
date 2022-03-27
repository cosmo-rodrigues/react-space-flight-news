//@ts-nocheck
import React, { ReactElement } from "react";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import { rootReducers } from "../../store/modules";

export const renderWithRouterAndRedux = (
  component: ReactElement,
  {
    initialState = {},
    store = createStore(rootReducers, initialState),
    initialEntries = ["/"],
    history = createMemoryHistory({ initialEntries }),
  } = {}
) => {
  return {
    ...render(
      <HistoryRouter history={history}>
        <Routes>
          <Provider store={store}>{component}</Provider>
        </Routes>
      </HistoryRouter>
    ),
    history,
    store,
  };
};
