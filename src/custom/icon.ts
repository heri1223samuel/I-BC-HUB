import logo from "../logo.png";

const sharedMedia = {
  logo,
};
const darkMedia = {};

const lightMedia = {};

export const useCurrentMedia = (mode: "light" | "dark") => ({
  ...sharedMedia,
  ...(mode === "light" ? darkMedia : lightMedia),
});
