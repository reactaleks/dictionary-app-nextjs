'use client'
import Form from "@/components/form_component/FormComponent";
import Navigation from "@/components/nav_component/NavComponent";
import { useContext } from "react";
import { ThemeContext } from "@/components/providers/ContextProviders";

export default function Home() {
  const {theme} = useContext(ThemeContext)

  return (
    <div className={`min-h-screen ${theme ? 'bg-black text-white': 'bg-white text-main_black' }`}>
      <Navigation />
      <main className="min-h-screen ">

        <Form />

      </main>
    </div>
  );
}
