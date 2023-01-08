import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { ReactNode } from "react";

export interface ThemeProps {
  children: ReactNode;
}

const colorSecondary = "#46925b";

const theme = createTheme({
  palette: {
    secondary: { main: colorSecondary },
  },
  typography: {
    fontFamily: ['"Segoeui", "Seguisb", sans-serif'].join(","),
    fontSize: 12,
    h4: {
      fontSize: "1.5rem",
      fontFamily: "Roboto, sans-serif",
    },
  },
  components: {
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          ".MuiInputBase-input": {
            height: 16,
            lineHeight: 16,
            padding: 8,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 3,
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: 12,
          marginRight: 12,
        },
      },
    },
  },
});

export function Theme({ children }: ThemeProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default Theme;
