import { useEffect, useState, type ReactNode } from "react";

import { ThemeContext, type Theme } from "@/docs/use-theme";

// Theme: a `dark` class on <html> switches the same variable names.
// Default follows the system; an explicit choice is kept in local storage.

const storageKey = "sand-theme";

function systemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function storedTheme(): Theme | null {
  const value = localStorage.getItem(storageKey);
  return value === "light" || value === "dark" ? value : null;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(
    () => storedTheme() ?? systemTheme(),
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  // Follow the system only while the user has not chosen.
  useEffect(() => {
    const query = window.matchMedia("(prefers-color-scheme: dark)");
    const follow = () => {
      if (storedTheme() === null) setThemeState(systemTheme());
    };
    query.addEventListener("change", follow);
    return () => query.removeEventListener("change", follow);
  }, []);

  const setTheme = (next: Theme) => {
    localStorage.setItem(storageKey, next);
    setThemeState(next);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
