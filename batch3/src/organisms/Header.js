import { useEffect, useState } from "react";
import themeService from "../../services/ThemeService";

function Header() {
  const [theme, setTheme] = useState(themeService.getTheme());

  useEffect(() => {
    const updateTheme = (newTheme) => setTheme(newTheme);

    themeService.attach(updateTheme);

    return () => themeService.detach(updateTheme);
  }, []);

  return (
    <header
      style={{
        padding: "20px",
        background: theme === "Light" ? "#ddd" : "#333",
        color: theme === "Light" ? "black" : "white",
      }}
    >
      <h2>Header - {theme} Theme</h2>
    </header>
  );
}

export default Header;