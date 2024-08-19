import PlayButton from "../ui_components/PlayButtonComponent";

export default function DataOutput({ apiresponse }: OutputProps) {
  const outputData = apiresponse?.data;

  const data = outputData ? outputData.map((item, index) => {
        return item.meanings;
      })
    : null;

  const dataJoined = data?.length == 2 ? data?.[0].concat(data[1]) : data?.[0];

  let dataSections = null;
  
  const output = dataJoined ? dataSections = dataJoined.map((section:any, index:number) => {

    if (!section || !Array.isArray(section.definitions) || !Array.isArray(section.synonyms)) {
      return null; // Or handle the error differently
    }

    return (
      <div key={index}>
        <div className="flex justify-between  my-4 md:my-8">
          <div className="w-[10%] text-bodym  md:text-headingm font-bold italic">
            {section?.partOfSpeech}
          </div>
          <div className="w-[80%] flex items-center">
            <div className="w-full h-[1px] bg-[#979797] bg-opacity-15 "></div>
          </div>
        </div>
        <div className="my-4 md:my-8">
          <div className="text-main_gray text-[16px] md:text-headings my-4 md:my-8">
            Meaning
          </div>
          <ul className=" list-disc list-inside">
            {section?.definitions.slice(0, 5).map(
              (
                item: {
                  antonyms: [];
                  definition: string;
                  synonyms: [];
                  example?: string;
                },
                index: string
              ) => (
                <li
                  key={index}
                  className="text-[15px]  md:text-bodym mt-2 marker:text-main_purple"
                >
                  {item?.definition}
                </li>
              )
            )}
          </ul>
          <div
            className={`flex justify-between my-4 md:my-8 h-auto items-center  `}
          >
            <div className="text-main_gray text-[16px]  md:text-headings">
              Synonims
            </div>
            <div className="text-main_purple md:text-headings font-bold w-full flex justify-around">
              {section?.synonyms
                ?.slice(0, 4)
                .map((syn: string, index: string) => (
                  <div key={index}>{syn}</div>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  })
  : null

  const headingSection = outputData ? (
    <>
      <div className="flex justify-between my-4 md:my-8 items-center">
        <div className="flex flex-col">
          <div className="text-[32px]  md:text-headingl font-bold">
            {outputData?.[0].word}
          </div>
          <div className="text-bodys md:text-headingm text-main_purple font-bold">
            {outputData?.[0].phonetic}
          </div>
        </div>
        <PlayButton data={outputData?.[0].phonetics} />
      </div>
      {dataSections}
    </>
  ) : null;

  const sourceLink = outputData ? (
    <div className="mb-16">
      <div className="w-full h-[1px] bg-main_gray bg-opacity-15 "></div>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between md:w-[60%]">
        <div className="text-main_gray underline mt-4 "> Source</div>
        <div className=" text-bodys underline">
          <a
            href={outputData?.[0].sourceUrls[0]}
            target="_blank"
            className="flex justify-between items-center"
          >
            {`${outputData?.[0].sourceUrls[0]}`}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              className="w-[15px] h-[15px] md:ml-2"
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
  ) : null;

  return (
    <>
      {headingSection}
      {output}
      {sourceLink}
    </>
  );
}
