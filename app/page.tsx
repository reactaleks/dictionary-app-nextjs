import Form from "@/components/FormComponent";
import Navigation from "@/components/NavComponent";
export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen ">
        <Form />
      </main>
    </>
  );
}
