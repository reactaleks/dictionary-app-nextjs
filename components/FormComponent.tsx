"use client";

import { getDictionaryData } from "@/components/ServerActions";
import { Input } from "@headlessui/react";
import Output from "./OutputComponent";
import { useActionState, useState, useEffect } from "react";
import FormSkeleton from "./loading/FormSkeletonComponent";

const initialState = {
  data: "",
  error: undefined,
};

export default function Form() {
  const [state, formAction, pending] = useActionState(
    getDictionaryData,
    initialState
  );
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    state.error == undefined ? setIsEmpty(false) : setIsEmpty(true);

  }, [state]);

  return (
    <div
      className=" justify-between w-[90vw] xl:w-[50vw] mx-auto"
      key="form-component"
    >
      <form action={formAction}>
        <div className="relative  h-[48px] md:h-[64px] flex items-center">
          <Input
            type="text"
            name="searchTerm"
            className={`border w-full h-full shadow ${
              isEmpty
                ? "border border-x-4 border-y-4 border-red-500 dark:border-red-600"
                : "border-none dark:border-none"
            } relative md:text-headings rounded-2xl pl-4  ${isEmpty ? 'focus:outline-transparent' : 'focus:outline-main_purple'} bg-[#F4F4F4] dark:bg-[#1F1F1F]  dark:border-[#1F1F1F]  font-bold`}
          />
          <button type="submit" className="absolute right-4">
            {pending ? (
              <div
                className="inline-block h-[18px] w-[18px] animate-spin border-main_purple rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em]  motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
              >
              </div>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                className={`${isEmpty ? 'fill-red-500' : null}`}
              >
                <path
                  fill="none"
                  stroke={`${isEmpty ? '#FF5252' : '#A445ED'}`}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="text-headings text-[#FF5252]">
          {isEmpty ? `Whoops, can't be empty...` : null}
        </div>
      </form>

      {!pending ? <Output apiresponse={state} /> : <FormSkeleton />}
    </div>
  );
}
