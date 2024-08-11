"use client";

import { getDictionaryData } from "@/components/ServerActions";
import { useFormState } from "react-dom";
import Output from "./OutputComponent";

const initialState = {
  data: "",
};

export default function Form() {
  const [state, formAction] = useFormState(getDictionaryData, initialState);
  return (
    <>
      <form action={formAction}>
        <input type="text" name="searchTerm" />
        <button type="submit">Submit form</button>
      </form>

      <Output apiresponse={state}/>
    </>
  );
}
