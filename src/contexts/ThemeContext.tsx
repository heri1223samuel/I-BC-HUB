import { CssBaseline, GlobalStyles, useMediaQuery } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import type { TFunction } from "i18next";
import React, { createContext, useContext, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useCurrentMedia } from "../custom/icon";
import { getTheme } from "../custom/theme";

type mode = "light" | "dark";

interface ThemeContextType {
  currentMode: mode;
  changeMode: () => void;
  media: Record<string, string>;
  t: TFunction;
  isDesktop: boolean;
  isTablet: boolean;
  isMobile: boolean;
  openNavigation: boolean;
  toggleNavigation: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error("useThemeContext must be used within a ThemeProvider");
  return context;
};

export const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentMode, setMode] = useState<mode>(() => {
    const saved = localStorage.getItem("themeMode");
    return (saved as mode) || "light";
  });

  const changeMode = () => {
    const newMode = currentMode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("themeMode", newMode);
  };

  const theme = useMemo(() => getTheme(currentMode), [currentMode]);

  const [openNavigation, setOpenNavigation] = useState<boolean>(() => {
    return localStorage.getItem("isNavigationOpen") === "true";
  });

  const toggleNavigation = () => {
    setOpenNavigation((prev) => {
      localStorage.setItem("isNavigationOpen", String(!prev));
      return !prev;
    });
  };

  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const media = useMemo(() => useCurrentMedia(currentMode), [currentMode]);
  const { t } = useTranslation();

  return (
    <ThemeContext.Provider
      value={{
        t,
        isTablet,
        isDesktop,
        isMobile,
        currentMode,
        media,
        changeMode,
        openNavigation,
        toggleNavigation,
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles
          styles={(theme) => ({
            "*": {
              transition: "all 0.15s",
            },
            html: {
              height: "100%",
            },
            body: {
              minHeight: "100vh",
              margin: 0,
              backgroundColor: theme.palette.background.default,
              color: theme.palette.text.primary,
              transition: "background-color 0.15s, color 0.15s",
            },
            "#root": {
              minHeight: "100vh",
            },
          })}
        />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
