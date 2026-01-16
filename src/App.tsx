import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { Signin } from "./pages/SignIn";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import "./i18n";
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
