import {
  Box,
  Button,
  FormControlLabel,
  FormGroup,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { Bell, PanelLeftOpen, PanelRightOpen, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useThemeContext } from "../contexts/ThemeContext";
import "../style/Home.css";

export function Profile() {
  const { openNavigation, toggleNavigation } = useThemeContext();

  const [gender, setGender] = useState<string>("Male");
  const [company, setCompany] = useState<string>("I-BC");
  type FormTypes = {
    label: string;
    placeholder?: string;
    value: string;
    select?: boolean;
    check?: boolean;
    options?: string[];
  };

  const companyOptions = [
    { label: "I-BC", color: "rgba(231, 18, 18, 0.93)" },
    { label: "Dreaming", color: "rgb(128, 0, 139)" },
    { label: "La 7", color: "rgb(0, 38, 73)" },
  ];

  const selectedCompany = companyOptions.find((c) => c.label === company);
  const PersonnalInfo: FormTypes[] = [
    { label: "Nom", value: "lastname" },
    { label: "Prénom", value: "firstname" },
    {
      label: "Genre",
      check: true,
      value: "gender",
      options: ["Male", "Female"],
    },
    { label: "Date de naissance", value: "birthdate" },
    { label: "Adresse", value: "adress" },
    { label: "Numéro téléphone", value: "phoneNumber" },
    { label: "Email", value: "email" },
    { label: "Numéro CIN", value: "N_CIN" },
  ];

  const ProfessionalInfo: FormTypes[] = [
    { label: "Poste", value: "jobTitle" },
    {
      label: "Entreprise",
      value: "company",
      select: true,
      options: companyOptions.map((item) => item.label),
    },
    { label: "Département", value: "department" },
    { label: "Date d'embauche", value: "entryDate" },
    { label: "Matricule", value: "matricule" },
  ];

  useEffect(() => {
    document.title = "User Profile";
  }, []);
  const { media } = useThemeContext();
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
        flex: 1,
        margin: "0 auto",
        overflowY: "scroll",
        background: "#C9E1ED",
        transition: "all 1s ease-in-out",
      }}
    >
      {/* RIGHT CONTENT */}

      {/* TOP BAR */}
      <div
        style={{
          width: "98%",
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

      <Paper
        className="flex align-center drt-column"
        sx={{ width: "89%", padding: "20px 0" }}
      >
        <Box
          sx={{
            height: "130px",
            width: "130px",
            borderRadius: "50%",
            overflow: "hidden",
          }}
        >
          <ImageWithFallback
            src={media.user}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
        <Box
          className="flex "
          sx={{
            width: "100%",
            justifyContent: "center",
            gap: "20px",
            padding: "0 20px",
          }}
        >
          <Box
            className="flex drt-column align-center border-color"
            sx={{
              width: "50%",
              margin: "auto",
              padding: "20px 0",
              gap: "20px",
              borderRadius: "30px",
            }}
          >
            <Typography sx={{ fontSize: "25px" }}>
              {" "}
              Informations peronnelles
            </Typography>
            <div
              className="FormContainer"
              style={{ justifyContent: "center", width: "100%" }}
            >
              {PersonnalInfo.map((item, index) =>
                item.check ? (
                  <FormGroup>
                    <RadioGroup
                      row
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    >
                      {item.options?.map((option, index) => (
                        <FormControlLabel
                          control={
                            <Radio
                              sx={{
                                "&.Mui-checked": {
                                  color: "#214ba7",
                                },
                              }}
                            />
                          }
                          key={index}
                          value={option}
                          label={option}
                          sx={{
                            "&.Mui-checked": {
                              color: "#214ba7",
                            },
                          }}
                        />
                      ))}
                    </RadioGroup>
                  </FormGroup>
                ) : (
                  <TextField
                    key={index}
                    sx={{
                      "& .MuiInputLabel-root": {
                        color: "#214ba7",
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "#214ba7",
                      },
                      "& .MuiOutlinedInput-root": {
                        height: "46px", // hauteur totale
                        borderRadius: "10px", // border radius
                        "& fieldset": {
                          borderColor: "#214ba7",
                        },
                        "&:hover fieldset": {
                          borderColor: "#555",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#214ba7",
                          borderWidth: 2,
                        },
                      },
                      width: "100%",
                    }}
                    label={item.label}
                  />
                ),
              )}
            </div>
          </Box>
          <Box
            className="flex drt-column align-center border-color"
            sx={{
              width: "50%",
              padding: "20px 0",
              gap: "20px",
              borderRadius: "30px",
              // border: "2px solid #8aafff",
            }}
          >
            <Typography className="mb-c" sx={{ fontSize: "25px" }}>
              Informations profesionneles
            </Typography>
            <div
              className="FormContainer"
              style={{ justifyContent: "center", width: "100%" }}
            >
              {ProfessionalInfo.map((item, index) =>
                item.select ? (
                  <TextField
                    sx={{
                      borderRadius: "15px",
                      color: "white",

                      padding: "0 10px",

                      "& .MuiInputBase-input": {
                        color: "#ffffff",
                        background: selectedCompany?.color,
                      },

                      // icône dropdown
                      "& .MuiSelect-icon": {
                        color: "#ffffff",
                      },
                      "&:before": {
                        borderBottomColor: "#fff",
                      },
                      "&:after": {
                        borderBottomColor: "#fff",
                      },
                      "&:hover:not(.Mui-disabled):before": {
                        borderBottomColor: "#fff",
                      },
                    }}
                    select
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  >
                    {companyOptions.map((option) => (
                      <MenuItem key={option.label} value={option.label}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                ) : (
                  <TextField
                    key={index}
                    sx={{
                      "& .MuiInputLabel-root": {
                        color: "#214ba7",
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "#214ba7",
                      },
                      "& .MuiOutlinedInput-root": {
                        height: "46px", // hauteur totale
                        borderRadius: "10px", // border radius
                        "& fieldset": {
                          borderColor: "#214ba7",
                        },
                        "&:hover fieldset": {
                          borderColor: "#555",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#214ba7",
                          borderWidth: 2,
                        },
                      },
                      width: "100%",
                    }}
                    label={item.label}
                  />
                ),
              )}
            </div>
          </Box>
        </Box>
      </Paper>
    </div>
  );
}
