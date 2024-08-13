"use client";
import { useContext } from "react";
import { FontContext } from "./providers/ContextProviders";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

export default function FontSwitch() {
  const {fontFamily, changeFontFamily} = useContext(FontContext);
  return (
    <Menu>
      <MenuButton>Font</MenuButton>
      <MenuItems anchor="bottom">
        <MenuItem>
          <button
            onClick={() => changeFontFamily('font-sans')}
            className="block w-full text-left data-[focus]:bg-blue-100"
          >
            Sans Serif
          </button>
        </MenuItem>
        <MenuItem>
          <button
            onClick={() => changeFontFamily('font-serif')}
            className="block w-full text-left data-[focus]:bg-blue-100"
          >
            Serif
          </button>
        </MenuItem>
        <MenuItem>
          <button
            onClick={() => changeFontFamily('font-mono')}
            className="block w-full text-left data-[focus]:bg-blue-100"
          >
            Mono
          </button>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
