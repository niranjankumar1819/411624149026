import { useEffect, useState } from "react";
import themeService from "../../services/ThemeService";

function Footer() {
  const [theme, setTheme] = useState(themeService.getTheme());

  useEffect(() => {
    const updateTheme = (newTheme) => setTheme(newTheme);

    themeService.attach(updateTheme);

    return () => themeService.detach(updateTheme);
  }, []);

  return (
    <footer
      style={{
        padding: "20px",
        background: theme === "Light" ? "#ddd" : "#333",
        color: theme === "Light" ? "black" : "white",
      }}
    >
      Footer - Current Theme : {theme}
    </footer>
  );
}

export default Footer;