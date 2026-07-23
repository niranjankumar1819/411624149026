import { useEffect, useState } from "react";
import themeService from "../../services/ThemeService";
import Button from "../atoms/Button";
import ThemeLabel from "../molecules/ThemeLabel";

function ThemePanel() {
  const [theme, setTheme] = useState(themeService.getTheme());

  useEffect(() => {
    const updateTheme = (newTheme) => setTheme(newTheme);

    themeService.attach(updateTheme);

    return () => themeService.detach(updateTheme);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <ThemeLabel theme={theme} />

      <Button
        text="Toggle Theme"
        onClick={() => themeService.toggleTheme()}
      />
    </div>
  );
}

export default ThemePanel;