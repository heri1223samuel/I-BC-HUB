import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import {
  ArrowRight,
  Bell,
  PanelLeftOpen,
  PanelRightOpen,
  Search,
} from "lucide-react";
import { Link } from "react-router-dom";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useThemeContext } from "../contexts/ThemeContext";
import { randomArticles } from "../data/article";
import "../style/Home.css";

export function Article() {
  const { media, openNavigation, toggleNavigation } = useThemeContext();
  return (
    <div
      style={{
        borderTopLeftRadius: "30px",
        borderBottomLeftRadius: "30px",
        overflow: "hidden",
        height: "100vh",
        display: "flex",
        // maxWidth: "1280px",
        flexDirection: "column",
        alignItems: "center",
        margin: "0 auto",
        overflowY: "scroll",
        background: "#C9E1ED",
      }}
    >
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
      {/* News display */}
      <div
        style={{
          position: "relative",
          padding: "10px 25px 60px",
          borderRadius: "20px",
          width: "90%",
          margin: "0 auto",
          backgroundColor: "white",
          alignContent: "center",
          alignItems: "center",
          // content/
        }}
      >
        <Typography
          fontSize="30px"
          sx={{
            fontFamily: "Arial",
            textTransform: "capitalize",
            marginBottom: "15px",
          }}
        >
          Articles postés
        </Typography>

        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, 300px)",
            gap: "15px",
            justifyContent: "center",
            margin: "0 auto",
            width: "100%",
          }}
        >
          {randomArticles.map((article) => (
            <Paper
              key={article.id}
              elevation={7}
              sx={{
                width: "300px",
                height: "330px",
                borderRadius: "10px",
                overflow: "hidden",
                backgroundColor: "whitesmoke",
                "&:hover": {
                  boxShadow: "9px 7px 7px rgba(0, 0, 0, 0.3)",
                },
              }}
            >
              {/* Image */}
              <Box
                sx={{
                  height: "190px",
                  overflow: "hidden",
                  "& img": {
                    transition: "transform 0.3s",
                  },
                  "&:hover img": {
                    transform: "scale(1.1)",
                  },
                }}
              >
                <ImageWithFallback
                  src={media[article.image]}
                  alt={article.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>

              {/* Title */}
              <Typography
                sx={{
                  fontSize: "17px",
                  margin: "9px 0",
                  textAlign: "center",
                  "&:hover": {
                    color: "rgb(255, 0, 0)",
                  },
                }}
              >
                {article.title}
              </Typography>

              {/* Description */}
              <Typography
                sx={{
                  padding: "0 10px",
                  textAlign: "center",
                  color: "gray",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {article.description}
              </Typography>
            </Paper>
          ))}
        </div>

        {/* LINK */}
        <Link
          to="/allnews"
          style={{
            position: "absolute",
            right: "20px",
            bottom: "10px",
            display: "flex",
            alignItems: "center",
            gap: "5px",
            textDecoration: "none",
          }}
          className="View-all"
        >
          <Typography>Voir tout</Typography>
          <ArrowRight />
        </Link>
      </div>
      <div
        className="flex drt-column"
        style={{
          margin: "40px auto",
          width: "90%",
          padding: "30px 20px",
          borderRadius: "20px",
          alignItems: "center",
          textAlign: "left",
          backgroundColor: "whitesmoke",
          // margin: '30px 0'
        }}
      >
        <Typography sx={{ fontSize: "30px", textAlign: "center" }}>
          Créer un nouvel article
        </Typography>
        <ImageWithFallback
          src="dsadsahd"
          style={{
            height: "200px",
            width: "200px",
            border: "2px solid #00000052",
            borderRadius: "20px",
            margin: "20px 0",
          }}
        />

        <Typography
          sx={{
            textAlign: "left",
            fontSize: "22px",
            fontWeight: "semi-bold",
            width: "90%",
          }}
        >
          Titre
        </Typography>
        <TextField
          sx={{
            // margin: "30px 0",
            width: "90%",
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#000911",
              fontSize: "20px",
            },
            "& .MuiOutlinedInput-root": {
              fontSize: "18px",
              borderRadius: "6px", // border radius
              "& fieldset": {
                borderColor: "#888",
                // height: "10px",
              },
              "&:hover fieldset": {
                borderColor: "#555",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#1976d2",
                borderWidth: 2,
              },
            },
          }}
          id="title"
          // label="Titre"
          multiline
          rows={2}
        />
        <Typography
          sx={{
            textAlign: "left",
            fontSize: "22px",
            fontWeight: "semi-bold",
            width: "90%",
          }}
        >
          Contenus de l'article
        </Typography>
        <TextField
          sx={{
            // margin: "30px 0",
            width: "90%",
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#000911",
              fontSize: "20px",
            },
            "& .MuiOutlinedInput-root": {
              fontSize: "20px",

              borderRadius: "6px", // border radius
              "& fieldset": {
                borderColor: "#888",
                // height: "10px",
              },
              "&:hover fieldset": {
                borderColor: "#555",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#1976d2",
                borderWidth: 2,
              },
            },
          }}
          id="title"
          // label="Titre"
          multiline
          rows={14}
        />

        <Button
          sx={{
            marginTop: "40px",
            fontWeight: "semi-bold",
            background: "rgb(160, 5, 0)",
          }}
          variant="contained"
        >
          Ajouter
        </Button>
      </div>
    </div>
  );
}
