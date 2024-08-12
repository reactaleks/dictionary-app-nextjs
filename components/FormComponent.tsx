"use client";

import { getDictionaryData } from "@/components/ServerActions";
import { useFormState } from "react-dom";
import { Input } from '@headlessui/react'

import Output from "./OutputComponent";

const initialState = {
  data: "",
};

export default function Form() {
  const [state, formAction] = useFormState(getDictionaryData, initialState);
  return (
    <div className="h-[90vh]">
      <form action={formAction}>
        <div className="relative w-[90vw] h-[48px] mx-auto flex items-center">
        <Input type="text" name="searchTerm" className="border w-full h-full relative rounded-2xl pl-4" />
        <button type="submit" className="absolute right-4"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path fill="none" stroke="#A445ED" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"/></svg></button>

        </div>
      </form>

      <Output apiresponse={state}/>
    </div>
  );
}
