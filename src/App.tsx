import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import "./i18n";
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
              <Route path="*" element={<NotFound />} />
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<Signin />} />
            </Routes>
          </main>
          {/* <Footer /> */}
        </div>
      </Router>
    </ThemeContextProvider>
    // </LanguageProvider>
  );
}
