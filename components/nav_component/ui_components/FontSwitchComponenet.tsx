"use client";
import { useContext, useState } from "react";
import { FontContext } from "@/components/providers/ContextProviders";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

export default function FontSwitch() {
  const { fontFamily, changeFontFamily } = useContext(FontContext);
  const [fontTitle, setFontTitle] = useState('Sans Serif')

  return (
    <div className="flex items-center w-[50%] justify-around">
      <Menu>
        <MenuButton className="flex items-center w-full justify-around text-bodys md:text-bodym font-bold">
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
        </MenuButton>
        <MenuItems anchor="bottom" className="bg-white dark:bg-black dark:shadow-main_purple dark:shadow-2xl text-bodys md:text-bodym w-[183px] h-[152px] flex flex-col justify-evenly py-5 px-6 rounded-2xl shadow-xl">
          <MenuItem>
            <button
              onClick={() => 
                {
                  changeFontFamily("font-sans")
                  setFontTitle('Sans Serif')
                }
              }
              className="block w-full text-left data-[focus]:text-main_purple font-sans font-bold"
            >
              Sans Serif
            </button>
          </MenuItem>
          <MenuItem>
            <button
              onClick={() => {
                changeFontFamily("font-serif")
                setFontTitle("Serif")
              }
              }
              className="block w-full text-left data-[focus]:text-main_purple font-serif font-bold "
            >
              Serif
            </button>
          </MenuItem>
          <MenuItem>
            <button
              onClick={() => {changeFontFamily("font-mono")
                setFontTitle("Mono")

              }}
              className="block w-full text-left data-[focus]:text-main_purple font-mono font-bold "
            >
              Mono
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>

    </div>
  );
}
