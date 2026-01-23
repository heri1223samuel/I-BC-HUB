import type { SelectChangeEvent } from "@mui/material";
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  ListItemText,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import {
  ArrowRight,
  Bell,
  PanelLeftOpen,
  PanelRightOpen,
  PlusCircle as PlusCircleIcon,
  Search,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useThemeContext } from "../contexts/ThemeContext";
import { randomArticles } from "../data/article";
import { categories, categoryColor } from "../data/newsCategory";
import "../style/Home.css";

export function Article() {
  useEffect(() => {
    document.title = "Articles et Actualités";
  });
  const [open, setOpen] = useState(false);
  const prevCategory = localStorage.getItem("category")?.split(",") || [];
  const [selectedCategory, setSelectedCategory] =
    useState<string[]>(prevCategory);
  const [tesmpCategory, setTempCategory] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value },
    } = event;
    setTempCategory(typeof value === "string" ? value.split(",") : value);
  };

  const deleteCategory = (cat: string) => {
    const newCategory = selectedCategory.filter((item) => item !== cat);
    setSelectedCategory(newCategory);
    setTempCategory(newCategory);
    localStorage.setItem("category", newCategory.join(","));
  };

  const handleConfirm = () => {
    setSelectedCategory([...tesmpCategory]);
    localStorage.setItem("category", tesmpCategory.join(","));
    setOpen(false);
  };

  const handleCancel = () => {
    setTempCategory([...selectedCategory]);
    setOpen(false);
  };
  const { media, isDesktop, openNavigation, toggleNavigation } =
    useThemeContext();

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
        {isDesktop && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, 250px)",
              gap: "25px",
              // justifyContent: "center",
              // border: "2px solid red",
              // margin: "0 auto",
              // width: "100%",
            }}
          >
            {randomArticles.map((article) => (
              <Paper
                key={article.id}
                elevation={7}
                sx={{
                  width: "100%",

                  height: "300px",
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
                    height: "140px",
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
        )}

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
        <div
          className="flex align-center"
          style={{
            width: "90%",
            gap: "9px",
            justifyContent: "start",
            marginBottom: "20px",
          }}
        >
          <Typography
            sx={{
              textAlign: "left",
              fontSize: "26px",
              fontWeight: "semi-bold",
              // width: "90%",
            }}
          >
            Catégorie
          </Typography>

          <PlusCircleIcon
            style={{ height: "26px", width: "26px" }}
            onClick={() => {
              (setOpen(true), setTempCategory([...selectedCategory]));
            }}
          />
          <Dialog
            open={open}
            onClose={() => setOpen(false)}
            fullWidth
            maxWidth="sm"
          >
            <DialogTitle>Choisir les catégories</DialogTitle>

            <DialogContent>
              <Box display="flex" alignItems="center" gap={2} mt={1}>
                {/* Icon + */}
                {/* <PlusCircleIcon size={24} /> */}

                {/* Select multiple */}
                <FormControl sx={{ flex: 1 }}>
                  {/* <InputLabel id="category-label">Catégorie</InputLabel> */}
                  <Select
                    label="Catégorie"
                    labelId="category-label"
                    multiple
                    value={tesmpCategory}
                    onChange={handleChange}
                    renderValue={() => ""}
                    variant="standard"
                    sx={{ border: "2px solid #1976d2" }}
                  >
                    {categories
                      .sort((a, b) => a.localeCompare(b))
                      .map((option) => (
                        <MenuItem key={option} value={option}>
                          <Checkbox
                            sx={{
                              color: "#888",
                              borderRadius: "4px",
                              "&.Mui-checked": {
                                color: "#001aff",
                                backgroundColor: "#ffeeee",
                              },
                            }}
                            checked={tesmpCategory.includes(option)}
                          />
                          <ListItemText primary={option} />
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </Box>

              {/* Affichage à droite des sélections */}
              <Box display="flex" flexWrap="wrap" gap={1} mt={2}>
                {tesmpCategory.map((cat) => (
                  <Typography
                    key={cat}
                    sx={{
                      background: categoryColor[cat],
                      color: "#fff",
                      px: 1,
                      py: 0.5,
                      borderRadius: "5px",
                    }}
                  >
                    {cat}
                  </Typography>
                ))}
              </Box>
            </DialogContent>

            <DialogActions>
              <Button
                variant="contained"
                sx={{ background: "rgba(255, 230, 0, 0.8)", color: "black" }}
                onClick={() => handleCancel()}
              >
                Annuler
              </Button>
              <Button
                sx={{ background: "green" }}
                variant="contained"
                onClick={() => {
                  console.log(tesmpCategory);
                  handleConfirm();
                }}
              >
                Confirmer
              </Button>
            </DialogActions>
          </Dialog>
          <div
            className="flex align-center"
            style={{ flexWrap: "wrap", gap: "10px" }}
          >
            {selectedCategory
              .sort((a, b) => a.localeCompare(b))
              .map((cat) => (
                <Box sx={{ position: "relative" }}>
                  <Typography
                    key={cat}
                    sx={{
                      background: categoryColor[cat],
                      padding: "5px 9px",
                      borderRadius: "15px",
                      color: "white",
                    }}
                    variant="body2"
                  >
                    {cat}
                  </Typography>
                  <X
                    onClick={() => deleteCategory(cat)}
                    style={{
                      display: cat ? "flex" : "none",
                      color: "white",
                      background: "red",
                      borderRadius: "50%",
                      position: "absolute",
                      top: "-10px",
                      cursor: "pointer",
                      right: "-10px",
                    }}
                    strokeWidth={3}
                  />
                </Box>
              ))}
          </div>
        </div>

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
            mt: "20px",
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
            fontWeight: "bold",
            background: "rgba(255, 21, 48, 1)",
          }}
          variant="contained"
        >
          Ajouter
        </Button>
      </div>
    </div>
  );
}
