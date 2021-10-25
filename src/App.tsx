import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "routes";
import PrivateRoute from "routes/PrivateRoute";
import { Header } from "components";
import { getDesignTokens } from "theme";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
  // const [mode, setMode] = React.useState<"light" | "dark">("light");
  // const colorMode = React.useMemo(
  //   () => ({
  //     toggleColorMode: () => {
  //       setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  //     },
  //   }),
  //   []
  // );

  const darkModeTheme = createTheme(getDesignTokens("light"));
  return (
    <ThemeProvider theme={darkModeTheme}>
      <div className="app">
        <BrowserRouter>
          <Header />
          <Routes />
          <PrivateRoute />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
