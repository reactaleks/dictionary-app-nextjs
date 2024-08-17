"use client";
import { useContext, useState } from "react";
import { FontContext } from "@/components/providers/ContextProviders";

export default function FontSwitch() {
  const { fontFamily, changeFontFamily } = useContext(FontContext);
  const [fontTitle, setFontTitle] = useState("Sans Serif");
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const openMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <div className="flex items-center w-[50%] justify-around relative">
      <button onClick={openMenu} className="flex items-center w-full justify-around text-bodys md:text-bodym font-bold">
        {fontTitle}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="8"
          viewBox="0 0 14 8"
        >
          <path
            fill="none"
            stroke="#A445ED"
            strokeWidth="1.5"
            d="m1 1 6 6 6-6"
          />
        </svg>
      </button>
      <div
        className={` ${
          isMenuVisible ? "absolute top-0 z-20" : "hidden"
        } bg-white dark:bg-black dark:shadow-main_purple dark:shadow-2xl text-bodys md:text-bodym w-[183px] h-[152px] flex flex-col justify-evenly py-5 px-6 rounded-2xl shadow-xl`}
      >
        <div>
          <button
            onClick={() => {
              changeFontFamily("font-sans");
              setFontTitle("Sans Serif");
              openMenu();
            }}
            className="block w-full text-left data-[focus]:text-main_purple font-sans font-bold"
          >
            Sans Serif
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              changeFontFamily("font-mono");
              setFontTitle("Mono");
              openMenu();
            }}
            className="block w-full text-left data-[focus]:text-main_purple font-mono font-bold "
          >
            Mono
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              changeFontFamily("font-serif");
              setFontTitle("Serif");
              openMenu();
            }}
            className="block w-full text-left data-[focus]:text-main_purple font-serif font-bold "
          >
            Serif
          </button>
        </div>
      </div>
    </div>
  );
}
