"use client";
import { useEffect, useState } from "react";

export default function PlayButton(data: string) {
  const [audioLink, setAudioLink] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audio = new Audio(audioLink)

  useEffect(() => {
    const getUrl = () => {
      if (data.data != undefined) {
        const dataArray = data.data;
        for (let i = 0; i < dataArray.length; i++) {
          const element = dataArray[i];
          if (element.audio != "") {
            return setAudioLink(element.audio);
          }
        }
      }
    };
    getUrl()
  }, [data]);

  const playAudio = () => {
    if(isPlaying) {
        setIsPlaying(false)
        audio.pause()
    } else {
        setIsPlaying(true)
        audio.play()
    }
  }

  return (
    <button className="" onClick={playAudio} >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="75"
        height="75"
        viewBox="0 0 75 75"
        className="h-[48px] w-[48px] md:w-[75px] md:h-[75px]"
      >
        <g fill="#A445ED" fillRule="evenodd">
          <circle cx="37.5" cy="37.5" r="37.5" opacity=".25" />
          <path d="M29 27v21l21-10.5z" />
        </g>
      </svg>
    </button>
  );
}
