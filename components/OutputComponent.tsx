import PlayButton from "./PlayButtonComponent";

interface OutputProps {
  apiresponse: {
    data: DictionaryEntry[];
  };
}

interface DictionaryEntry {
  word: string;
  phonetic?: string; // Optional property for single phonetic representation
  phonetics?: Phonetic[]; // Array of phonetics with text and optional audio/sourceUrl
  meanings: Meaning[];
  license: License;
  sourceUrls: string[];
}

interface Phonetic {
  text: string;
  audio?: string; // Optional audio URL
  sourceUrl?: string; // Optional URL for source of pronunciation information
  license?: License; // Optional license information for the pronunciation audio
}

interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms?: string[]; // Optional synonyms for the meaning
  antonyms?: string[]; // Optional antonyms for the meaning
}

interface Definition {
  definition: string;
  synonyms?: string[]; // Optional synonyms for the specific definition
  antonyms?: string[]; // Optional antonyms for the specific definition
  example?: string; // Optional example sentence for verb definitions
}

interface License {
  name: string;
  url: string;
}

export default function Output({ apiresponse }: OutputProps) {
  const outputData = apiresponse?.data[0];

  if (outputData) {
    console.log(outputData);
    return (
      <div className=" mx-auto ">
        <div className="flex justify-between my-4 md:my-8 items-center">
          <div className="flex flex-col">
            <div className="text-[32px] md:text-headingl font-bold">
              {outputData?.word}
            </div>
            <div className="text-bodys md:text-headingm text-main_purple font-bold">
              {outputData?.phonetic}
            </div>
          </div>
          <PlayButton data={outputData?.phonetics} />
        </div>

        <div className="flex justify-between  my-4 md:my-8">
          <div className="w-[10%] text-bodym md:text-headingm font-bold italic">
            {outputData?.meanings?.[0]?.partOfSpeech}
          </div>
          <div className="w-[80%] flex items-center">
            <div className="w-full h-[1px] bg-[#979797] bg-opacity-15 dark:bg-opacity-50"></div>
          </div>
        </div>

        <div className="my-4 md:my-8">
          <div className="text-main_gray text-[16px] md:text-headings my-4 md:my-8">
            Meaning
          </div>
          <ul className=" list-disc list-inside">
            {outputData?.meanings?.[0]?.definitions.map((item, index) => (
              <li key={index} className="text-[15px] md:text-bodym mt-2 marker:text-main_purple">
                {item.definition}
              </li>
            ))}
          </ul>
          <div className="flex justify-between my-4 md:my-8 w-[80%] md:w-[50%] items-center">
            <div className="text-main_gray text-[16px]  md:text-headings">
              Synonims
            </div>
            <div className="text-main_purple md:text-headings font-bold">
              {outputData?.meanings?.[0]?.synonyms}
            </div>
          </div>
        </div>

        <div className="flex justify-between my-4 md:my-8">
          <div className="w-[10%] text-bodym md:text-headingm font-bold italic">
            {outputData?.meanings?.[1]?.partOfSpeech}
          </div>
          <div className="w-[80%] flex items-center">
            <div className="w-full h-[1px] bg-[#979797] bg-opacity-15 dark:bg-opacity-50"></div>
          </div>
        </div>

        <div className="my-4 md:my-8">
          <div className="text-main_gray text-[16px] my-4 md:my-8 md:text-headings">
            Meaning
          </div>
          <ul className=" list-disc list-inside ">
            {outputData?.meanings?.[1]?.definitions.map((item, index) => (
              <li key={index} className="text-[15px] md:text-bodym mt-2 marker:text-main_purple">
                {item.definition}

                <div className="text-main_gray">&quot;{item.example}&quot;</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-16">
          <div className="w-full h-[1px] bg-main_gray bg-opacity-15 dark:bg-opacity-50"></div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between md:w-[60%]">
            <div className="text-main_gray underline mt-4 "> Source</div>
            <div className="text-[2D2D2D] text-bodys underline">
              <a
                href={outputData?.sourceUrls[0]}
                target="_blank"
                className="flex justify-between"
              >
                {`${outputData?.sourceUrls[0]}`}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  className="w-[15px] h-[15px]"
                >
                  <path
                    fill="none"
                    stroke="#838383"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M6.09 3.545H2.456A1.455 1.455 0 0 0 1 5v6.545A1.455 1.455 0 0 0 2.455 13H9a1.455 1.455 0 0 0 1.455-1.455V7.91m-5.091.727 7.272-7.272m0 0H9m3.636 0V5"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
