import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { DefaultTheme, ThemeProvider } from "styled-components";

import { AppRoutes } from "./AppRoutes";

import { history } from "./helpers/history";
import { usePersistedState } from "./hooks/usePersistedState";

import { light } from "./styles/themes/light";
import { dark } from "./styles/themes/dark";

import { GlobalStyle } from "./styles/global";

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toggleTheme = () => {
    if (theme.title === "light") {
      return setTheme(dark);
    }
    return setTheme(light);
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HistoryRouter history={history}>
        <AppRoutes toggleTheme={toggleTheme} />
      </HistoryRouter>
    </ThemeProvider>
  );
}

export default App;
