import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export const ThemeToggle = ({ floating = false }: { floating?: boolean }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  if (floating) {
    return (
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-50 bg-white dark:bg-slate-800 text-gray-700 dark:text-slate-300 p-3 rounded-full shadow-lg border border-slate-100 dark:border-slate-700 hover:scale-110 active:scale-95 transition-all cursor-pointer"
        aria-label="Toggle theme"
      >
        {theme === "light" ? <FaMoon className="size-5 text-indigo-600" /> : <FaSun className="size-5 text-yellow-500" />}
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-gray-700 dark:text-slate-300 font-medium cursor-pointer"
    >
      {theme === "light" ? (
        <>
          <FaMoon className="size-5 text-indigo-600" />
          <span>Dark Mode</span>
        </>
      ) : (
        <>
          <FaSun className="size-5 text-yellow-500" />
          <span>Light Mode</span>
        </>
      )}
    </button>
  );
};
