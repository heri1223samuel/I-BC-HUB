import { Box, Button, Typography } from "@mui/material";
import {
  Bell,
  Calendar,
  CircleUserRound,
  House,
  LogOut,
  Newspaper,
  PanelLeftOpen,
  PanelRightOpen,
  Radio,
  Search,
  TvMinimalPlay,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useThemeContext } from "../contexts/ThemeContext";

export function Home() {
  type NavItem = {
    label: string;
    path: string;
    icon: React.ElementType;
  };

  // const [openLeftPannel, setOpenLeftPannel] = useState(setPannel);
  const [openLeftPannel, setOpenLeftPannel] = useState<boolean>(() => {
    const saved = localStorage.getItem("isMenuOpen");
    return saved === "true";
  });

  // const to

  const { t, media } = useThemeContext();

  useEffect(() => {
    document.title = "User Profile";
  }, []);

  const navItems: NavItem[] = [
    { path: "/profile", label: t("Profile"), icon: CircleUserRound },
    { path: "/home", label: t("Home"), icon: House },
    { path: "/news", label: t("actu"), icon: Newspaper },
    { path: "/live", label: t("live"), icon: Radio },
    { path: "/emission", label: t("Emission"), icon: TvMinimalPlay },
    { path: "/program", label: t("Programme"), icon: Calendar },
  ];

  return (
    <div
      className="max-w-7xl mx-auto"
      style={{ display: "flex", height: "100vh", background: "#df2e43" }}
    >
      {/* LEFT PANEL */}
      <div
        style={{
          // color: "white !important",
          width: openLeftPannel ? "260px" : "90px",
          transition: "width 1s ease-in-out",
          background: "#df2e43",
          display: "flex",
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

      {/* RIGHT CONTENT */}
      <div
        style={{
          flex: 1,
          background: "#C9E1ED",
          borderTopLeftRadius: 30,
          borderBottomLeftRadius: 30,
          transition: "all 1s ease-in-out",
        }}
      >
        {/* TOP BAR */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: 15,
            gap: 10,
          }}
        >
          <Button
            sx={{ color: "inherit" }}
            onClick={() => setOpenLeftPannel((p) => !p)}
          >
            {openLeftPannel ? (
              <PanelRightOpen size={40} />
            ) : (
              <PanelLeftOpen size={40} />
            )}
          </Button>

          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "whitesmoke",
              padding: 2,
              borderRadius: 3,
            }}
          >
            <Typography fontSize={24}>Welcome John Doe</Typography>

            <div style={{ display: "flex", gap: 20 }}>
              <div style={{ position: "relative" }}>
                <input
                  placeholder="Search"
                  style={{
                    padding: "8px 30px 8px 10px",
                    borderRadius: 20,
                    border: "1px solid black",
                  }}
                />
                <Search
                  size={18}
                  style={{
                    position: "absolute",
                    top: "50%",
                    cursor: "pointer",
                    right: "12px",
                    transform: "translateY(-50%)",
                  }}
                />
              </div>

              <div style={{ position: "relative", alignContent: "center" }}>
                <Bell />
                <span
                  style={{
                    position: "absolute",
                    top: 8,
                    right: 2,
                    width: 10,
                    height: 10,
                    background: "red",
                    borderRadius: "50%",
                  }}
                />
              </div>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
}
