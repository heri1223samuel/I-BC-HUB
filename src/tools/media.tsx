import logo from "../logo.png";

const media = {
  logo,
};

const darkMedia = {};
const lightMedia = {};
export const useCurrentMedia = (mode: "light" | "dark") => ({
  ...media,
  ...(mode === "light" ? darkMedia : lightMedia),
});
