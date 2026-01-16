import { Box, Typography } from "@mui/material";
import {
  Bell,
  // Box,
  Calendar,
  CircleUserRound,
  House,
  LogOut,
  Newspaper,
  Radio,
  Search,
  TvMinimalPlay,
} from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useThemeContext } from "../contexts/ThemeContext";
import "../style/Home.css";

export function Home() {
  type NavItems = {
    label: string;
    path: string;
    icon: React.ElementType;
    special?: boolean;
  };

  useEffect(() => {
    document.title = "User Profile";
  });

  const { t } = useThemeContext();
  const NavItems: NavItems[] = [
    { path: "/profile", label: t("Profile"), icon: CircleUserRound },
    { path: "/home", label: t("Home"), icon: House },
    { path: "/news", label: t("actu"), icon: Newspaper },
    { path: "/emission", label: t("emission"), icon: TvMinimalPlay },
    { path: "/live", label: t("live"), icon: Radio },
    { path: "/program", label: t("Programme"), icon: Calendar },
  ];

  const { media } = useThemeContext();

  const renderNavigation = (navigation: NavItems, onClick?: () => void) => {
    const Icon = navigation.icon;

    return (
      <Link
        to={navigation.path}
        className="flex align-center"
        style={{ gap: "3px", margin: "10px 0", fontSize: "19px" }}
        onClick={onClick}
      >
        <Icon style={{ height: "25px", width: "25px" }} className="w-4 h-4" />
        {navigation.label}
      </Link>
    );
  };

  return (
    <div
      style={{
        display: "flex",

        background: "#df2e43",
      }}
      className="max-w-7xl mx-auto  "
    >
      {" "}
      <div
        className="flex drt-column align-center"
        style={{ background: "#df2e43" }}
      >
        <div
          className="flex drt-column align-center"
          style={{ padding: "0 15px" }}
        >
          <Box
            style={{
              height: "110px",
              width: "110px",
              borderRadius: "50%",
              overflow: "hidden",
              margin: "15px 0",
            }}
          >
            <img
              className="user-photo"
              src={media.user}
              alt="Un journaliste avec une appareil photo numériques dans la main"
            />
          </Box>
          <Typography
            className="user-name"
            style={{
              fontSize: "28px",
              fontFamily: "arial",
              fontWeight: "lighter",
            }}
          >
            Jhon Doe
          </Typography>
          <Typography variant="subtitle1" className="color-black">
            Journaliste et chronicheur
          </Typography>
        </div>

        <div
          style={{ marginTop: "20px", marginBottom: "60px" }}
          className="color-black no-drag flex drt-column align-center"
        >
          {NavItems.map((item) => renderNavigation(item))}
        </div>

        <Link
          to="/"
          className="flex no-drag color-black"
          style={{ marginBottom: "60px", gap: "5px" }}
        >
          <LogOut />
          <Typography>Log Out</Typography>
        </Link>
      </div>
      <div
        style={{
          flex: 1,
          borderTopLeftRadius: "30px",
          borderBottomLeftRadius: "30px",
          background: "#C9E1ED",
          overflow: "hidden",
        }}
      >
        {/* Welocome Greating and search bar */}
        <Box
          className="flex space-between"
          sx={{
            width: "98%",
            borderRadius: "20px",
            margin: "0 auto",
            marginTop: "15px",
            alignItems: "center",
            // border: "2px solid red",
            background: "whitesmoke",
            padding: "20px 20px",
          }}
        >
          <Typography sx={{ fontSize: "25px" }}>Welcome Jhon Doe</Typography>

          <div className="flex" style={{ gap: "20px" }}>
            <div className="search_container">
              <input className="search" type="text" placeholder="Search" />
              <Search className="search_icon" />
            </div>
            <div className="flex align-center" style={{ position: "relative" }}>
              <Bell style={{ height: "23px", width: "24px" }} />
              <div
                style={{
                  top: "-2px",
                  right: "3px",
                  position: "absolute",
                  background: "red",
                  height: "10px",
                  width: "10px",
                  borderRadius: "50%",
                }}
              ></div>
            </div>
          </div>
        </Box>
        {/* Over View   */}
        <div></div>
        {/* Dashboard  */}
        <div>
          {/* CHart  */}
          <div>
            <div></div>
            <div></div>
          </div>
          {/* Graph  */}
          <div></div>
        </div>
        {/* Top article  */}
        <div></div>
      </div>
    </div>
  );
}
