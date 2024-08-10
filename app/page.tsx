import { getDictionaryData } from "@/components/ServerActions";

export default function Home() {
  return (
    <main className="min-h-screen">
        <form action={getDictionaryData}>
            <input type='text' name="searchTerm"/>
            <button type="submit">Submit form</button>
        </form>
    </main>
  );
}
