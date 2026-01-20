import { Navigation } from "./components/Navigation";
import { useThemeContext } from "./contexts/ThemeContext";

import { Outlet } from "react-router-dom";
export default function Content() {
  const { openNavigation } = useThemeContext();

  return (
    <div style={{ display: "flex", height: "100vh", background: "#df2e43" }}>
      <Navigation openLeftPannel={openNavigation} />
      <div style={{ flex: 1 }}>
        <Outlet />
      </div>
    </div>
  );
}
