import { Box, Typography } from "@mui/material";
import {
  Calendar,
  CircleUserRound,
  House,
  LogOut,
  Newspaper,
  Radio,
  TvMinimalPlay,
} from "lucide-react";
import type React from "react";
import { Link, useLocation } from "react-router-dom";
import { useThemeContext } from "../contexts/ThemeContext";

export function Navigation({ openLeftPannel }: { openLeftPannel: boolean }) {
  type NavItems = {
    label: string;
    path: string;
    icon: React.ElementType;
  };

  const { media } = useThemeContext();
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const { t } = useThemeContext();
  const navItems: NavItems[] = [
    { path: "/", label: t("Profile"), icon: CircleUserRound },
    { path: "/home", label: t("Home"), icon: House },
    { path: "/articles", label: t("actu"), icon: Newspaper },
    { path: "/live", label: t("live"), icon: Radio },
    { path: "/emission", label: t("Emission"), icon: TvMinimalPlay },
    { path: "/program", label: t("Programme"), icon: Calendar },
  ];
  return (
    <div
      style={{
        // color: "white !important",
        width: openLeftPannel ? "260px" : "90px",
        transition: "width 1s ease-in-out",
        background: "#df2e43",
        display: "flex",
        height: "100vh",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* PROFILE */}
      <Box
        sx={{
          width: openLeftPannel ? 110 : 60,
          height: openLeftPannel ? 110 : 60,
          borderRadius: "50%",
          // transform: openLeftPannel ? "rotate(360deg)" : "rotate(0deg)",
          overflow: "hidden",
          marginTop: 2,
          transition: "all 1s ease-in-out",
        }}
      >
        <img
          src={media.user}
          alt="user"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>

      <Typography
        sx={{
          fontSize: openLeftPannel ? 28 : 16,
          transition: "all 1s ease-in-out",
          color: "#ffffff",
          marginTop: 1,
        }}
      >
        John Doe
      </Typography>

      <Typography
        sx={{
          opacity: openLeftPannel ? 1 : 0,
          transform: openLeftPannel ? "translateY(0)" : "translateY(-10px)",
          transition: "all 1s ease-in-out",
          color: "#ffffff",
        }}
      >
        Journaliste et chroniqueur
      </Typography>

      {/* NAV */}
      <div
        className="flex drt-column align-center"
        style={{
          position: "relative",
          marginTop: 30,
          width: "100%",
          fontSize: "19px",
        }}
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,

                padding: "10px 20px",
                color: "#f5f5f5",
                textDecoration: "none",

                ...(isActive(item.path) && openLeftPannel
                  ? {
                      background: "#C9E1ED",
                      color: "black",
                      borderTopLeftRadius: "20px",
                      borderBottomLeftRadius: "20px",
                      // paddingRight: "50px",
                      // position: "absolute",
                      width: "75%",
                      flex: 1,

                      // alignContent: "right",
                      // justifyContent: "center",
                      marginLeft: "25%",
                      // marginBottom: "200px",
                      right: "0px",
                      // width: '100%'
                    }
                  : isActive(item.path) && !openLeftPannel
                    ? {
                        background: "#C9E1ED",
                        color: "black",
                        borderTopLeftRadius: "20px",
                        borderBottomLeftRadius: "20px",
                        // paddingRight: "50px",
                        // position: "absolute",
                        width: "85%",
                        flex: 1,
                        marginLeft: "15%",
                      }
                    : {}),
              }}
            >
              <Icon size={22} />
              <span
                style={{
                  display: openLeftPannel ? "inherit" : "none",
                  // transition: "display 1s ease-in-out",

                  // opacity: openLeftPannel ? 1 : 0,
                  transition: "all 1s ease-in-out",
                }}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>

      {/* LOGOUT */}
      <Link
        to="/"
        style={{
          marginTop: "auto",
          marginBottom: 20,
          display: "flex",
          gap: 10,
          color: "#ffffff",
          fontSize: "19px",
          textDecoration: "none",
        }}
      >
        <LogOut />
        {openLeftPannel && <span>Log Out</span>}
      </Link>
    </div>
  );
}
