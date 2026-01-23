import { Box, Button, Paper, Typography, useTheme } from "@mui/material";
import { Bell, PanelLeftOpen, PanelRightOpen, Search } from "lucide-react";
import { useEffect } from "react";
import { useThemeContext } from "../contexts/ThemeContext";
import "../style/Home.css";
import { randomEmission } from "../data/emission";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Emission() {
  const { openNavigation, toggleNavigation, media } = useThemeContext();
  const theme = useTheme();
  useEffect(() => {
    document.title = "Notre Emission";
  });

  return (
    <div className="Container">
      <div
        style={{
          // width: "1280px",
          display: "flex",
          alignItems: "center",
          margin: "0 auto",
          padding: 15,
          width: "95%",
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
          <Typography fontSize={24}>Gestion Editoriale</Typography>

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
      <Box
        sx={{
          width: "90%",
          padding: "30px 20px",
          borderRadius: "30px",
          background: theme.palette.background.paper,
        }}
      >
        <Typography
          sx={{
            fontSize: "25px",
            fontFamily: "arial",
            fontWeight: "semi-bold",
          }}
        >
          Nos émissions
        </Typography>
        <div
          style={{
            display: "grid",
            gap: "20px",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          }}
        >
          {randomEmission.map((article, index) => (
            <Paper
              elevation={5}
              sx={{
                textAlign: "left",
                borderRadius: "30px",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  overflow: "hidden",
                  height: "210px",
                  width: "100%",
                  "&:hover": {
                    transform: "scale(1.07)",
                  },
                }}
              >
                <ImageWithFallback
                  src={media[article.image]}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
              <Typography sx={{ margin: "20px 10px 0px", fontSize: "20px" }}>
                {article.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "rgba(101, 101, 101, 1)",
                  margin: "10px 10px 30px",
                }}
              >
                {article.description}
              </Typography>
            </Paper>
          ))}
        </div>
      </Box>
    </div>
  );
}
