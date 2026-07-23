import { useEffect, useState } from "react";
import themeService from "../../services/ThemeService";

function Content() {
  const [theme, setTheme] = useState(themeService.getTheme());

  useEffect(() => {
    const updateTheme = (newTheme) => setTheme(newTheme);

    themeService.attach(updateTheme);

    return () => themeService.detach(updateTheme);
  }, []);

  return (
    <div
      style={{
        padding: "40px",
        backgroundColor: theme === "Light" ? "white" : "black",
        color: theme === "Light" ? "black" : "white",
      }}
    >
      <h3>Content Area</h3>

      <p>This section changes automatically.</p>
    </div>
  );
}

export default Content;