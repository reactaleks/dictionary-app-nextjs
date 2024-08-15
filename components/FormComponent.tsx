"use client";

import { getDictionaryData } from "@/components/ServerActions";
import { Input } from "@headlessui/react";
import Output from "./OutputComponent";
import { useActionState } from "react";
import FormSkeleton from "./loading/FormSkeletonComponent";

const initialState = {
  data: "",
};

export default function Form() {
  const [state, formAction, pending] = useActionState(getDictionaryData, initialState);

  
  return (
    <div className=" justify-between w-[90vw] xl:w-[50vw] mx-auto" key='form-component'>
      <form action={formAction}>
        <div className="relative  h-[48px] md:h-[64px] flex items-center">
          <Input
            type="text"
            name="searchTerm"
            className={`border w-full h-full relative md:text-headings rounded-2xl pl-4 data-[focus]:!outline-main_purple bg-[#F4F4F4] dark:bg-[#1F1F1F]  dark:border-[#1F1F1F]  font-bold`}
            data-focus
          />
          <button type="submit" className="absolute right-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <path
                fill="none"
                stroke="#A445ED"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"
              />
            </svg>
          </button>
        </div>
      </form>
      
      {!pending ? <Output apiresponse={state} /> : <FormSkeleton/>}
      


    </div>
  );
}
