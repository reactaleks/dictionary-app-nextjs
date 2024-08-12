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
  // console.log(outputData);
  // console.log(outputData?.meanings[0].definitions[0].definition);
  return (
    <div className="w-[90vw] mx-auto">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <div className="text-[32px] font-bold">{outputData?.word}</div>
          <div className="text-[14px] text-[#A445ED]">
            {outputData?.phonetic}
          </div>
        </div>
        <div className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="75"
            height="75"
            viewBox="0 0 75 75"
            className="h-[48px] w-[48px]"
          >
            <g fill="#A445ED" fillRule="evenodd">
              <circle cx="37.5" cy="37.5" r="37.5" opacity=".25" />
              <path d="M29 27v21l21-10.5z" />
            </g>
          </svg>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-[10%] text-[18px] font-bold">
          {outputData?.meanings[0].partOfSpeech}
        </div>
        <div className="w-[80%] flex items-center">
          <div className="w-full h-[1px] bg-[#979797] bg-opacity-15"></div>
        </div>
      </div>
      <div className="">
        <div className="text-[#757575] text-[16px]">Meaning</div>
        <ul className=" list-disc list-inside">
          {outputData?.meanings[0].definitions.map((item, index) => (
            <li key={index} className="text-[15px]">{item.definition} </li>
          ))}
        </ul>
        <div className="flex justify-between">
          <div className="text-[#757575] text-[16px]">Synonims</div>
          <div className="text-[#A445ED] font-bold">
            {outputData?.meanings[0].synonyms}
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-[10%] text-[18px] font-bold">
          {outputData?.meanings[1].partOfSpeech}
        </div>
        <div className="w-[80%] flex items-center">
          <div className="w-full h-[1px] bg-[#979797] bg-opacity-15"></div>
        </div>
      </div>
      <div className="">
        <div className="text-[#757575] text-[16px]">Meaning</div>
        <ul className=" list-disc list-inside">
          {outputData?.meanings[1].definitions.map((item, index) => (
            <li key={index} className="text-[15px]">
              {item.definition}
              <div className="text-[#757575]">&quot;{item.example}&quot;</div>
            </li>
          ))}
        </ul>
      </div>

      <div className="">
        <div className="text-[#757575] underline"> Source</div>
        <div className="text-[2D2D2D]">
          <a href={outputData?.sourceUrls[0]} target="_blank">
            {`${outputData?.sourceUrls[0]}`}
          </a>
        </div>
      </div>
    </div>
  );
}
