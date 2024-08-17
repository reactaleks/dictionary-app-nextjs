"use client";

import { useState, useEffect, useContext } from "react";
import MoonIcon from "./ui_images/MoonIcon";
import { ThemeContext } from "@/components/providers/ContextProviders";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const {theme, changeTheme} = useContext(ThemeContext);

  useEffect(() => {
    setMounted(true);
    changeTheme(theme)
  }, []);

  if (!mounted) {
    return null;
  }

  const switchTheme = () => {
    if (theme == true) {
      changeTheme(false);
      setEnabled(false);
    } else {
      changeTheme(true);
      setEnabled(true);
    }
  };

  return (
    <div className="flex w-[50%] justify-evenly items-center">
      <button
        onClick={switchTheme}
        className={`group relative flex h-[20px] ${theme ? 'bg-main_purple' : null} w-[40px] cursor-pointer rounded-full bg-[#979797]  p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1`}
      >
        <span
          aria-hidden="true"
          className={`pointer-events-none inline-block size-3 translate-x-0 rounded-full bg-white ring-0 shadow-lg transition duration-200 ease-in-out ${enabled ? 'translate-x-5' : 'translate-x-0' }`}
        />
      </button>
      <MoonIcon darkMode={enabled} />
    </div>
  );
}
