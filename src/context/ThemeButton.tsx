import { useTheme } from "./ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-8 p-2 rounded-full bg-gray-200 dark:bg-slate-600 transition-colors duration-300 ml-auto"
    >
      <span
        className={clsx(
          "absolute left-1 top-1 w-6 h-6 bg-white dark:bg-slate-800 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center",
          theme === "light" ? "translate-x-6" : "translate-x-0"
        )}
      >
        {theme === "light" ? (
          <FontAwesomeIcon icon={faMoon} className="text-violet-400 text-md" />
        ) : (
          <FontAwesomeIcon icon={faSun} className="text-yellow-400 text-md" />
        )}
      </span>
    </button>
  );
};

export default ThemeButton;
