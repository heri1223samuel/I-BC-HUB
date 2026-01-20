import { Box, Button, Typography } from "@mui/material";
import { Bell, PanelLeftOpen, PanelRightOpen, Search } from "lucide-react";
import { useEffect } from "react";
import { useThemeContext } from "../contexts/ThemeContext";

export function Home() {
  const { openNavigation, toggleNavigation } = useThemeContext();

  useEffect(() => {
    document.title = "User Profile";
  }, []);

  return (
    <div
      className="max-w-7xl mx-auto"
      style={{ display: "flex", height: "100vh" }}
    >
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
          <Button sx={{ color: "inherit" }} onClick={toggleNavigation}>
            {openNavigation ? (
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
