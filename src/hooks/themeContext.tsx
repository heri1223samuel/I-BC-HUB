import { useMediaQuery } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import type { TFunction } from "i18next";
import React, { createContext, useContext, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useCurrentMedia } from "../tools/media";
import { getTheme } from "../tools/theme";
type Mode = "light" | "dark";

interface ThemeContextType {
  // t: TFunction;
  t: TFunction;
  currentMode: Mode;
  isDesktop: boolean;
  isMobile: boolean;
  isTablet: boolean;
  changeMode: () => void;
  media: Record<string, string>;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error("useThemeContext must be used inside ThemeContextProvider");
  return context;
};

export const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // const theme = useMemo(() => getTheme)

  const [currentMode, setMode] = useState<Mode>(() => {
    const saved = localStorage.getItem("themeMode");
    return (saved as Mode) || "dark ";
  });
  const changeMode = () => {
    const newMode = currentMode === "dark" ? "light" : "dark";
    setMode(newMode);
    localStorage.setItem("themeMode", newMode);
  };

  const theme = useMemo(() => getTheme(currentMode), [currentMode]);
  const media = useMemo(() => useCurrentMedia(currentMode), [currentMode]);
  const { t } = useTranslation();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <ThemeContext.Provider
      value={{
        t,
        media,
        isMobile,
        isDesktop,
        isTablet,
        changeMode,
        currentMode,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
