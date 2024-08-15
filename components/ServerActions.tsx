"use server";

export async function getDictionaryData(prevState: any, formData: FormData) {
  // Get input field data - user search parameter
  const rawFormData = {
    dictionarySearchTerm: formData.get("searchTerm"),
  };
  // Fetch data based on user search parameter
  const dictionaryData = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/` +
      `${rawFormData.dictionarySearchTerm}`
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));
  return {
    data: dictionaryData,
  };
}
