import "./App.css";
import {} from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import Routes from "routes";
import PrivateRoute from "routes/PrivateRoute";
import { Header } from "components";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes />
        <PrivateRoute />
      </BrowserRouter>
    </div>
  );
}

export default App;
