import user from "../assets/user.avif";
import logo from "../logo.png";

const sharedMedia = {
  user,
  logo,
};
const darkMedia = {};

const lightMedia = {};

export const useCurrentMedia = (mode: "light" | "dark") => ({
  ...sharedMedia,
  ...(mode === "light" ? darkMedia : lightMedia),
});
