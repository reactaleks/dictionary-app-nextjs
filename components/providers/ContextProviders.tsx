"use client";
import { createContext, useState, useEffect } from "react";

interface ContextTypes {
  fontFamily: string;
  changeFontFamily: (val: string) => void;
}
// Font context
export const FontContext = createContext<ContextTypes>({
  fontFamily: "font-sans",
  changeFontFamily: () => {}
});
// Theme context 
export const ThemeContext = createContext({
  theme: false,
  changeTheme: (arg0:boolean) => {}
})
// Font context provider
export function FontsContextProvider({ children }: { children: React.ReactNode }) {
  const [fontFamily, setFontFamily] = useState("font-sans");

  const changeFontFamily = (val: string) => {
    setFontFamily(val);
  };

  return (
    <FontContext.Provider value={{ fontFamily, changeFontFamily}}>
      {children}
    </FontContext.Provider>
  );
}

// Theme context provider
export function ThemeContextProvider({children}: { children: React.ReactNode }) {
  const [theme, setTheme] = useState(false)

  useEffect(() => {
    const prefersDarkMode = window.matchMedia(`(prefers-color-scheme: dark)`)
    setTheme(prefersDarkMode.matches)
  }, [])

  const changeTheme = (arg0:boolean) => {
    return setTheme(arg0);
  }

  return (
    <ThemeContext.Provider value={{theme, changeTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}
