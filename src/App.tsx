import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Content from "./Content";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import "./i18n";
import { Article } from "./pages/Article";
import { Emission } from "./pages/Emission";
import { Home } from "./pages/Home";
import { Live } from "./pages/Live";
import { NotFound } from "./pages/NotFound";
import { Profile } from "./pages/Profile";
import { Programm } from "./pages/Program";
import { Signin } from "./pages/SignIn";
import { ScrollToTop } from "./tools/ScrollToTop";
export default function App() {
  return (
    // <LanguageProvider>
    <ThemeContextProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-gray-50">
          {/* <Navigation /> */}
          <ScrollToTop />
          <main className="flex-1">
            <Routes>
              {" "}
              <Route element={<Content />}>
                <Route path="/live" element={<Live />} />
                <Route path="/emission" element={<Emission />} />
                <Route path="/program" element={<Programm />} />
                <Route path="/articles" element={<Article />} />
                <Route path="/home" element={<Home />} />
                <Route path="/articles" element={<Article />} />
                <Route path="/" element={<Profile />} />
              </Route>
              <Route path="*" element={<NotFound />} />
              <Route path="/signin" element={<Signin />} />
            </Routes>
          </main>
          {/* <Footer /> */}
        </div>
      </Router>
    </ThemeContextProvider>
    // </LanguageProvider>
  );
}
