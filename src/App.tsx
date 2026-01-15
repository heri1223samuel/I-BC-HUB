// import { SingIn } from "./pages/SingIn.tsx";
import { ThemeContextProvider } from "./hooks/themeContext";
import "./i18n";
import { Signin } from "./pages/SingIn";

export default function App() {
  return (
    <>
      <ThemeContextProvider>
        {/* <p>cOUCOU</p> */}
        <Signin />
      </ThemeContextProvider>
    </>
  );
}
