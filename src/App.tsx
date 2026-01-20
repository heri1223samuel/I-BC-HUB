import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Content from "./Content";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import "./i18n";
import { Article } from "./pages/article";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
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
                <Route path="/articles" element={<Article />} />
                <Route path="/" element={<Home />} />
              </Route>
              <Route path="*" element={<NotFound />} />
              <Route path="/Signin" element={<Signin />} />
            </Routes>
          </main>
          {/* <Footer /> */}
        </div>
      </Router>
    </ThemeContextProvider>
    // </LanguageProvider>
  );
}
