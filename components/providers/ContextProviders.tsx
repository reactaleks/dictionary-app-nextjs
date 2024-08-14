"use client";
import { createContext, useState } from "react";

interface ContextTypes {
  fontFamily: string;
  changeFontFamily: (val: string) => void;
}

export const FontContext = createContext<ContextTypes>({
  fontFamily: "font-sans",
  changeFontFamily: () => {}
});

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
