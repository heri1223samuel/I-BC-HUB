import type { TFunction } from "i18next";
import React, { createContext, useContext, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useCurrentMedia } from "../tools/media";
type Mode = "light" | "dark";

interface ThemeContextType {
  // t: TFunction;
  t: TFunction;
  currentMode: Mode;
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
  const [currentMode, setMode] = useState<Mode>(() => {
    const saved = localStorage.getItem("themeMode");
    return (saved as Mode) || "dark ";
  });
  const changeMode = () => {
    const newMode = currentMode === "dark" ? "light" : "dark";
    setMode(newMode);
    localStorage.setItem("themeMode", newMode);
  };
  const media = useMemo(() => useCurrentMedia(currentMode), [currentMode]);
  const { t } = useTranslation();
  return (
    <ThemeContext.Provider value={{ t, media, changeMode, currentMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
