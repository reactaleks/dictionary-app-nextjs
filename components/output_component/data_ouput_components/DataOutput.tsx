import PlayButton from "../ui_components/PlayButtonComponent";
export default function DataOutput({ apiresponse }: OutputProps) {
    const outputData = apiresponse?.data?.[0];
    if (outputData) {
      return (
        <div className=" mx-auto ">
          <div className="flex justify-between my-4 md:my-8 items-center">
            <div className="flex flex-col">
              <div className="text-[32px] text-main_black dark:text-white md:text-headingl font-bold">
                {outputData?.word}
              </div>
              <div className="text-bodys md:text-headingm text-main_purple font-bold">
                {outputData?.phonetic}
              </div>
            </div>
            <PlayButton data={outputData?.phonetics} />
          </div>
  
          <div className="flex justify-between  my-4 md:my-8">
            <div className="w-[10%] text-bodym text-main_black dark:text-white md:text-headingm font-bold italic">
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
              {outputData?.meanings?.[0]?.definitions.slice(0, 5).map((item, index) => (
                <li
                  key={index}
                  className="text-[15px] text-main_gray md:text-bodym mt-2 marker:text-main_purple"
                >
                  {item.definition}
                </li>
              ))}
            </ul>
            <div className="flex justify-between my-4 md:my-8 h-auto items-center">
              <div className="text-main_gray text-[16px]  md:text-headings">
                Synonims
              </div>
              <div className="text-main_purple md:text-headings font-bold w-full flex justify-around">
                {outputData?.meanings?.[0]?.synonyms?.slice(0, 4).map((syn,index) => <div key={index}>{syn}</div>)}
              </div>
            </div>
          </div>
  
          <div className="flex justify-between my-4 md:my-8">
            <div className="w-[10%] text-bodym text-main_black dark:text-white md:text-headingm font-bold italic">
              {outputData?.meanings?.[1]?.partOfSpeech}
            </div>
            <div className={`w-[80%] flex items-center ${outputData?.meanings?.[1]?.definitions == undefined ? 'hidden' : null}`}>
              <div className="w-full h-[1px] bg-[#979797] bg-opacity-15 dark:bg-opacity-50"></div>
            </div>
          </div>
  
          <div className={`my-4 md:my-8 ${outputData?.meanings?.[1]?.definitions == undefined ? 'hidden' : null}`}>
            <div className="text-main_gray text-[16px] my-4 md:my-8 md:text-headings">
              Meaning
            </div>
            <ul className=" list-disc list-inside ">
              {outputData?.meanings?.[1]?.definitions.slice(0,5).map((item, index) => (
                <li
                  key={index}
                  className="text-[15px] text-main_gray md:text-bodym mt-2 marker:text-main_purple"
                >
                  {item.definition}
  
                  <div className="text-main_gray">{item.example != undefined ? '&quot;' + item.example + '&quot;' : null}  {item.example}</div>
                </li>
              ))}
            </ul>
          </div>
  
          <div className="mb-16">
            <div className="w-full h-[1px] bg-main_gray bg-opacity-15 dark:bg-opacity-50"></div>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between md:w-[60%]">
              <div className="text-main_gray underline mt-4 "> Source</div>
              <div className="text-main_black dark:text-white text-bodys underline">
                <a
                  href={outputData?.sourceUrls[0]}
                  target="_blank"
                  className="flex justify-between items-center"
                >
                  {`${outputData?.sourceUrls[0]}`}
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
        </div>
      );
    }
  }