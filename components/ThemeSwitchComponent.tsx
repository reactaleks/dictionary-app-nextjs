"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";
import MoonIcon from "./images/MoonIcon";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const changeTheme = () => {
    if (currentTheme == "dark") {
      setTheme("light");
      setEnabled(false);
    } else {
      setTheme("dark");
      setEnabled(true);
    }
  };

  return (
    <div className="flex w-[50%] justify-evenly items-center">
      <Switch
        checked={enabled}
        onChange={changeTheme}
        className={`group relative flex h-[20px] w-[40px] cursor-pointer rounded-full bg-[#979797] dark:bg-[#A445ED]  p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1`}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none inline-block size-3 translate-x-0 rounded-full bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-5"
        />
      </Switch>
      <MoonIcon darkMode={enabled}/>
    </div>
  );
}
