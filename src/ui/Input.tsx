import { styled } from "@mui/system";
import React from "react";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  width?: string;
  background?: string;
}

interface CustomaLabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  color?: string;
  background?: string;
}

export const CustomInput = styled("input")<CustomInputProps>(
  ({ theme, error, background, width }) => `

  font-size: 1rem;
  padding: 20px 40px 8px 12px; /* espace pour icône */
  font-family: Arial;
  font-size: 20px;
  border-radius: 30px;
  border: 2px solid ${error ? "red" : theme.palette.text.primary};
  color: ${theme.palette.text.primary};
  background: ${background || "transparent"};
  outline: none;
  width: ${width || "100%"};
  position: relative;

  transition: all 0.1s linear;

  &:focus {
    border: 3px solid ${
      theme.palette.custom?.buttonBackground || theme.palette.primary.main
    };
  }

&:focus + label,
&:not(:placeholder-shown) + label {
  top: -0.6rem;
  left: 12px;
  font-size: 1.1rem;
  color: ${theme.palette.text.primary};
  background: ${background || "transparent"};
  padding: 0 5px;
}


  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px transparent inset;
    -webkit-text-fill-color: ${theme.palette.text.primary};
    transition: background-color 5000s linear 0s;
  }

  &::placeholder {
    color: transparent; /* cache le placeholder pour le label flottant */
  }
`
);

export const CustomLabel = styled("label")<CustomaLabelProps>(
  ({ theme, background }) => `
  position: absolute;
  transform: tra  left: 12px;
  font-size: 1.2rem;
  color: ${theme.palette.text.primary};
  background:  ${background || theme.palette.background.paper};
  padding: 0 5px;
  pointer-events: none;

  max-width: calc(100% - 14px);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  transition: all 0.1s linear;
`
);
