import { createContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

function DarkModeProvider(props) {
  const [theme, setTheme] = useState("light");

  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    document.documentElement.setAttribute("data-theme", mode);
  };

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      setMode("dark");
    } else {
      setTheme("light");
      setMode("light");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
      setMode(localTheme);
    } else {
      const deviceDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (deviceDarkMode) {
        setTheme("dark");
        setMode("dark");
      } else {
        setTheme("light");
        setMode("light");
      }
    }
  }, []);

  return (
    <DarkModeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </DarkModeContext.Provider>
  );
}

export { DarkModeContext, DarkModeProvider };
