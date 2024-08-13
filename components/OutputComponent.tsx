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

  if(outputData) {
    console.log(outputData)
    return (
      <div className="w-[90vw] mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <div className="text-[32px] font-bold">{outputData?.word}</div>
            <div className="text-[14px] text-[#A445ED]">
              {outputData?.phonetic}
            </div>
          </div>
          <PlayButton data={outputData?.phonetics}/>
        </div>
        <div className="flex justify-between">
          <div className="w-[10%] text-[18px] font-bold">
            {outputData?.meanings?.[0]?.partOfSpeech }
          </div>
          <div className="w-[80%] flex items-center">
            <div className="w-full h-[1px] bg-[#979797] bg-opacity-15"></div>
          </div>
        </div>
        <div className="">
          <div className="text-[#757575] text-[16px]">Meaning</div>
          <ul className=" list-disc list-inside">
            {outputData?.meanings?.[0]?.definitions.map((item, index) => (
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
            {outputData?.meanings?.[1]?.partOfSpeech}
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

}
