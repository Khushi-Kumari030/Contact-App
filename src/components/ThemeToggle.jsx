import React from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
}
