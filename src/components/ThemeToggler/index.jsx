import React, { useContext } from "react";
import { IoMdMoon } from "react-icons/io";
import { MdSunny } from "react-icons/md";
import { RiMoonLine } from "react-icons/ri";
import { DarkModeContext } from "../../contexts/DarkMode";

export default function ThemeToggler() {


  const {theme, toggleTheme} = useContext(DarkModeContext);

  return (
    <div className="theme-toggler">
      <button onClick={toggleTheme} className="absolute bottom-0 right-0 m-4 p-2 bg-[#8ab4f8] rounded-lg text-2xl text-white" title="Theme Toggler">
        {theme === "light" ? <IoMdMoon /> : <MdSunny />}
      </button>
    </div>
  );
}
