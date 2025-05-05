import { useState } from "react";
import ToggleButton from "../ToggleButton/index";
import logo from "../../assets/logo.svg";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="bg-white flex flex-col">
      <div className="flex items-center justify-between border-b border-black/10 px-5 py-1">
        <a
          href={logo}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:scale-110"
        >
          <img
            src={logo}
            alt="Logo"
            className="w-[60px] h-[60px] rounded-[90%] cursor-pointer transition-transform hover:scale-110 object-cover"
          />
        </a>

        <div className="text-sm font-medium text-gray-700 flex items-center gap-2">
          <ToggleButton isActive={isDarkMode} toggle={toggleMode} />
          {isDarkMode ? "Modo escuro" : "Modo claro"}
        </div>
      </div>
    </div>
  );
};

export default Header;
