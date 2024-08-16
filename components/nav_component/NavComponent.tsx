"use client";
import FontSwitch from "./ui_components/FontSwitchComponenet";
import ThemeSwitch from "./ui_components/ThemeSwitchComponent";
export default function Navigation() {
  return (
    <nav className="h-[10vh] w-[90vw] xl:w-[50vw] mx-auto flex justify-between items-center">
      <div className="w-[50%]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="38"
          viewBox="0 0 34 38"
          className="w-[28.05px] h-[32px]"
        >
          <g
            fill="none"
            fillRule="evenodd"
            stroke="#838383"
            strokeLinecap="round"
            strokeWidth="1.5"
          >
            <path d="M1 33V5a4 4 0 0 1 4-4h26.8A1.2 1.2 0 0 1 33 2.2v26.228M5 29h28M5 37h28" />
            <path strokeLinejoin="round" d="M5 37a4 4 0 1 1 0-8" />
            <path d="M11 9h12" />
          </g>
        </svg>
      </div>
      <div className="flex w-[50%] md:w-[30%] justify-between">
        <FontSwitch />
        <div className="w-[1px] h-[32px] bg-[#979797] bg-opacity-25 dark:bg-opacity-100"></div>
        <ThemeSwitch />
      </div>
    </nav>
  );
}
