import { createTheme, Theme, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import "./App.css";
import { NotificationProvider } from "./providers/NotificationProvider";
import GoogleMapsLoader from "./providers/GoogleMapsLoader";

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: "#3D52F3",
      contrastText: "#fafdff",
    },
    secondary: {
      light: "#ff7961",
      main: "#ffffff",
      dark: "#F57F18",
      contrastText: "#000",
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NotificationProvider>
        <GoogleMapsLoader>
          <Routes />
        </GoogleMapsLoader>
        </NotificationProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
