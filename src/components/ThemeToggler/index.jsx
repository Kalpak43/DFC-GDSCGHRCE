import React, { useContext } from "react";
import { IoMdMoon } from "react-icons/io";
import { MdSunny } from "react-icons/md";
import { DarkModeContext } from "../../contexts/DarkMode";

export default function ThemeToggler() {
  const { theme, toggleTheme } = useContext(DarkModeContext);

  return (
    <button
      onClick={toggleTheme}
      className="block p-2 border-2 w-fit rounded-full text-3xl md:text-4xl bg-[#121212]"
      title="Theme Toggler"
    >
      {theme === "light" ? <IoMdMoon /> : <MdSunny />}
    </button>
  );
}
