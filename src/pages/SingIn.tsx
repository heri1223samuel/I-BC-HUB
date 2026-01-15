import { Button, Container, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useThemeContext } from "../hooks/themeContext";

export function Signin() {
  const { media, isDesktop, isMobile, t } = useThemeContext();
  const [section, setSection] = useState<"signin" | "signup">("signup");

  const formSignIn = ["Email or ID ", "password"];
  const formSignUp = ["Email", "ID Number", "password", "confirmedPassword"];
  return (
    <div>
      <div
        style={{
          background: `linear-gradient(to right , #A82A38, #291632 )`,
        }}
      >
        <div
          style={{
            padding: "30px 0 150px",
            justifyContent: "center",
            gap: "5px",
          }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex align-center"
        >
          <img
            src={media.logo}
            style={{
              ...(isDesktop
                ? { height: "90px" }
                : isMobile
                ? { height: "90px" }
                : {}),
            }}
            alt=""
          />
          <Typography sx={{ fontSize: "35px", color: "white" }}>
            Welcome on
            {isMobile ? (
              <>
                {" "}
                <br />{" "}
              </>
            ) : (
              <></>
            )}{" "}
            I-BC HUB
          </Typography>
        </div>
      </div>

      {/* <Container> */}
      {isMobile && (
        <Paper
          // className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-8"
          sx={{
            position: "relative",
            top: "-120px",
            display: "flex",

            flexDirection: "column",
            borderTopLeftRadius: "130px",
            // borderTopRightRadius: "90px",
            alignItems: "center",
            // borderTopRightRadius: "30%",
            bgColor: "pink",
            height: "auto",
            padding: "20px 0",
            // paddingBottom: "90px",
            ...(section === "signup"
              ? {
                  borderBottomLeftRadius: "90px",
                  borderBottomRightRadius: "90px",
                }
              : {
                  borderBottomLeftRadius: "50px",
                  borderBottomRightRadius: "50px",
                }),
          }}
          elevation={12}
        >
          <Paper
            elevation={7}
            sx={{
              width: "auto",
              padding: "3px 0",
              display: "flex",
              userSelect: "none",
              gap: "10px",
              position: "absolute",
              borderRadius: "20px",
              fontSize: "20px",
              top: "0px",
              right: "10px",
            }}
          >
            {" "}
            <button
              style={{
                cursor: "pointer",
                padding: "0 10px",
                ...(section === "signup"
                  ? {
                      border: "1px solid  #2c0d3a",
                      color: "white",
                      background:
                        " linear-gradient(to right , #A82A38, #291632 ",
                      borderRadius: "20px",
                    }
                  : {}),
              }}
              onClick={() => setSection("signup")}
            >
              {t("Sign Up")}
            </button>
            <button
              onClick={() => setSection("signin")}
              style={{
                padding: "0 10px",
                cursor: "pointer",
                ...(section === "signin"
                  ? {
                      border: "1px solid  #2c0d3a",
                      color: "white",
                      background: "linear-gradient(to right , #A82A38, #291632",
                      borderRadius: "20px",
                    }
                  : {}),
              }}
            >
              {t("Sign In")}
            </button>
          </Paper>

          {section === "signup" ? (
            <>
              <Typography sx={{ fontSize: "30px", marginTop: "30px" }}>
                {t("Sign Up")}
              </Typography>
              {formSignUp.map((name, index) => (
                <TextField
                  label={t(name)}
                  key={index}
                  variant="outlined"
                  sx={{
                    margin: "9px 0",
                    width: "80%",
                    "& .MuiInputLabel-root": {
                      color: "#0a0a0a",
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#000911",
                    },
                    "& .MuiOutlinedInput-root": {
                      height: 48, // hauteur totale
                      borderRadius: "20px", // border radius
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
                />
              ))}

              <Button
                sx={{
                  fontWeight: "bold",
                  margin: "20px 0",
                  background: `linear-gradient(to right , #A82A38, #291632 )`,
                }}
                variant="contained"
              >
                Continuer
              </Button>
            </>
          ) : (
            <>
              <Typography sx={{ fontSize: "30px", marginTop: "50px" }}>
                Se Connecter
              </Typography>
              {formSignIn.map((name, index) => (
                <TextField
                  label={t(name)}
                  key={index}
                  variant="outlined"
                  sx={{
                    margin: "9px 0",
                    width: "80%",
                    "& .MuiInputLabel-root": {
                      color: "#0a0a0a",
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#000911",
                    },
                    "& .MuiOutlinedInput-root": {
                      height: 48, // hauteur totale
                      borderRadius: "20px", // border radius
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
                />
              ))}{" "}
              <Button
                sx={{
                  margin: "20px 0px 50px",
                  background: `linear-gradient(to right , #A82A38, #291632 )`,
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Se Connecter
              </Button>
            </>
          )}
        </Paper>
      )}

      {isDesktop && (
        <Container>
          <Paper
            // className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-8"
            sx={{
              position: "relative",
              top: "-120px",
              display: "flex",

              flexDirection: "column",
              borderTopLeftRadius: "130px",
              // borderTopRightRadius: "90px",
              alignItems: "center",
              // borderTopRightRadius: "30%",
              bgColor: "pink",
              height: "auto",
              padding: "20px 0",
              // paddingBottom: "90px",
              ...(section === "signup"
                ? {
                    borderBottomLeftRadius: "90px",
                    borderBottomRightRadius: "90px",
                  }
                : {
                    borderBottomLeftRadius: "50px",
                    borderBottomRightRadius: "50px",
                  }),
            }}
            elevation={12}
          >
            <Paper
              elevation={7}
              sx={{
                width: "auto",
                padding: "3px 0",
                display: "flex",
                userSelect: "none",
                gap: "10px",
                position: "absolute",
                borderRadius: "20px",
                fontSize: "20px",
                top: "0px",
                right: "10px",
              }}
            >
              {" "}
              <button
                style={{
                  cursor: "pointer",
                  padding: "0 10px",
                  ...(section === "signup"
                    ? {
                        border: "1px solid  #2c0d3a",
                        color: "white",
                        background:
                          " linear-gradient(to right , #A82A38, #291632 ",
                        borderRadius: "20px",
                      }
                    : {}),
                }}
                onClick={() => setSection("signup")}
              >
                {t("Sign Up")}
              </button>
              <button
                onClick={() => setSection("signin")}
                style={{
                  padding: "0 10px",
                  cursor: "pointer",
                  ...(section === "signin"
                    ? {
                        border: "1px solid  #2c0d3a",
                        color: "white",
                        background:
                          "linear-gradient(to right , #A82A38, #291632",
                        borderRadius: "20px",
                      }
                    : {}),
                }}
              >
                {t("Sign In")}
              </button>
            </Paper>

            {section === "signup" ? (
              <>
                <Typography sx={{ fontSize: "60px", marginTop: "30px" }}>
                  {t("Sign Up")}
                </Typography>
                {formSignUp.map((name, index) => (
                  <TextField
                    label={t(name)}
                    key={index}
                    variant="outlined"
                    sx={{
                      margin: "9px 0",
                      width: "50%",
                      "& .MuiInputLabel-root": {
                        color: "#0a0a0a",
                        fontSize: "20px",
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "#000911",
                        fontSize: "20px",
                      },
                      "& .MuiOutlinedInput-root": {
                        height: 48, // hauteur totale
                        borderRadius: "20px", // border radius
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
                  />
                ))}

                <Button
                  sx={{
                    fontWeight: "bold",
                    margin: "20px 0",
                    background: `linear-gradient(to right , #A82A38, #291632 )`,
                  }}
                  variant="contained"
                >
                  Continuer
                </Button>
              </>
            ) : (
              <>
                <Typography sx={{ fontSize: "60px", marginTop: "50px" }}>
                  Se Connecter
                </Typography>
                {formSignIn.map((name, index) => (
                  <TextField
                    label={t(name)}
                    key={index}
                    variant="outlined"
                    sx={{
                      margin: "9px 0",
                      width: "50%",
                      "& .MuiInputLabel-root": {
                        color: "#0a0a0a",
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "#000911",
                      },
                      "& .MuiOutlinedInput-root": {
                        height: 48, // hauteur totale
                        borderRadius: "20px", // border radius
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
                  />
                ))}{" "}
                <Button
                  sx={{
                    margin: "20px 0px 50px",
                    background: `linear-gradient(to right , #A82A38, #291632 )`,
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Se Connecter
                </Button>
              </>
            )}
          </Paper>
        </Container>
      )}
    </div>
  );
}
