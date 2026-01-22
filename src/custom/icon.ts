import culture from "../assets/image/culture.jpg";
import cyc from "../assets/image/Cyclones.jpeg";
import econom from "../assets/image/economie.webp";
import education from "../assets/image/education.avif";
import i_vazo from "../assets/image/i_vazo.jpg";
import tapotandroka from "../assets/image/kapotandroka.jpg";
import menaMasoandro from "../assets/image/mena.jpg";
import nigeria from "../assets/image/nigeria.webp";
import tourisme from "../assets/image/tourisme.jpg";
import tsara_kaly from "../assets/image/trarakaly.jpg";
import user from "../assets/user.avif";
import logo from "../logo.png";

const sharedMedia = {
  user,
  menaMasoandro,
  i_vazo,
  tsara_kaly,
  kapotandroka: tapotandroka,
  logo,
  econom,
  cyc,
  nigeria,
  tourisme,
  education,
  culture,
};
const darkMedia = {};

const lightMedia = {};

export const useCurrentMedia = (mode: "light" | "dark") => ({
  ...sharedMedia,
  ...(mode === "light" ? darkMedia : lightMedia),
});
