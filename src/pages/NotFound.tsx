import { Button, Typography } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useThemeContext } from "../contexts/ThemeContext";

export function NotFound() {
  useEffect(() => {
    document.title = "404 - Page non trouvée";
  });
  const navigate = useNavigate();
  const { media } = useThemeContext();
  return (
    <div className="bg-black">
      <div className="bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex drt-column">
          <div
            style={{ margin: "0 auto", gap: "3px" }}
            className="flex align-center text-3x1 no-drag"
          >
            <p style={{ fontSize: "80px" }}>4</p>{" "}
            <img src={media.logo} className="sm:h-10 notFoundImage" />{" "}
            <h2 style={{ fontSize: "80px" }}>4</h2>
          </div>
          <Typography className="text-center" variant="h2">
            Page Not Found
          </Typography>
          <Typography
            className="text-center"
            variant="body1"
            sx={{ fontSize: "23px" }}
          >
            {" "}
            Page introuvable… mais au moins, vous êtes toujours avec nous!{" "}
          </Typography>

          <div
            className="text-center flex sm:drt-column align-center "
            style={{ justifyContent: "center", gap: "10px", marginTop: "40px" }}
          >
            <Button variant="contained" onClick={() => navigate("/")}>
              {" "}
              Retour à l' Acceuil
            </Button>
            <Button variant="contained" onClick={() => navigate(-1)}>
              Retour à la page precedente
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
