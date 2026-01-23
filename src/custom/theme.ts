import type { ThemeOptions } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

export const getTheme = (mode: "light" | "dark") => {
  const themeOptions: ThemeOptions = {
    palette: {
      mode,
      primary: {
        main: mode === "light" ? "#DC2626" : "#EF4444",
        light: "#F87171",
        dark: "#B91C1C",
        contrastText: "#FFFFFF",
      },
      secondary: {
        main: mode === "light" ? "#1F2937" : "#374151",
        light: "#4B5563",
        dark: "#111827",
        contrastText: "#FFFFFF",
      },
      background: {
        default: mode === "light" ? "#F9FAFB" : "#ffffffff",
        paper: mode === "light" ? "#FFFFFF" : "#eaeaeaff",
      },
      text: {
        primary: mode === "light" ? "#111827" : "#000000",
        secondary: mode === "light" ? "#6B7280" : "#9CA3AF",
      },
      error: {
        main: "#DC2626",
      },
      warning: {
        main: "#F59E0B",
      },
      info: {
        main: "#3B82F6",
      },
      success: {
        main: "#10B981",
      },
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontSize: "3rem",
        fontWeight: 700,
        lineHeight: 1.2,
      },
      h2: {
        fontSize: "2.25rem",
        fontWeight: 700,
        lineHeight: 1.3,
      },
      h3: {
        fontSize: "1.875rem",
        fontWeight: 600,
        lineHeight: 1.4,
      },
      h4: {
        fontSize: "1.5rem",
        fontWeight: 600,
        lineHeight: 1.4,
      },
      h5: {
        fontSize: "1.25rem",
        fontWeight: 600,
        lineHeight: 1.5,
      },
      h6: {
        fontSize: "1rem",
        fontWeight: 600,
        lineHeight: 1.5,
      },
      body1: {
        fontSize: "1rem",
        lineHeight: 1.5,
      },
      body2: {
        fontSize: "0.875rem",
        lineHeight: 1.5,
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
      },
    },
    shape: {
      borderRadius: 8,
    },
  };

  return createTheme(themeOptions);
};
