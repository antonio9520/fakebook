import { grey } from "@mui/material/colors";
import { PaletteMode } from "@mui/material";

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    primary: {
      main: "#1877F2",
      lightGrey: "#B0B3B8",
      ...(mode === "light" ? { grey: "#E4E6EB" } : { grey: "#3A3B3C" }),
    },
    ...(mode === "dark"
      ? {
          background: {
            default: "#242526",
            paper: "#18191A",
          },
        }
      : {
          background: {
            paper: "#F0F2F5",
          },
        }),
    text: {
      ...(mode === "light"
        ? {
            primary: grey[900],
            secondary: grey[800],
          }
        : {
            primary: "#E4E6EB",
            secondary: grey[500],
          }),
    },
  },
});
