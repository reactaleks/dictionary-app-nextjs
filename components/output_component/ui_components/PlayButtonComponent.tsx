"use client";
import { useEffect, useState } from "react";

interface Pronunciation {
  text: string; // The phonetic spelling of the word
  audio: string; // The URL to the audio file containing the pronunciation
  sourceUrl?: string; // Optional URL to the source of the pronunciation data (e.g., image)
  license?: {
    name: string; // Name of the license applied to the data
    url: string; // URL to the license information
  };
}

interface PronunciationData {
  data: Phonetic[] | undefined; // Array of pronunciation objects
}

interface Phonetic {
  text: string;
  audio?: string; // Optional audio URL
  sourceUrl?: string; // Optional URL for source of pronunciation information
  license?: License; // Optional license information for the pronunciation audio
}

interface License {
  name: string;
  url: string;
}
export default function PlayButton(data: PronunciationData) {
  const [audioLink, setAudioLink] = useState("");
  const [audio, setAudio] = useState(new Audio)
  const [isPlaying, setIsPlaying] = useState(false);

  // Get audio url
  useEffect(() => {
    const getUrl = () => {
      const audioLink = data?.data?.find(element => element.audio !== "")?.audio;
      if (audioLink) {
        setAudioLink(audioLink);
      } else {
        // Handle the case where no element has a non-empty audio property
        setAudioLink(""); // Set to an empty string or some default value
      }
    };
    getUrl();


    if(audioLink != "") {
      setAudio(new Audio(audioLink))
    }
  }, [audioLink]);
  // Check if audio is ended
  audio.onended = () => {
    setIsPlaying(false);
  };
  // Play audio
  const playAudio = () => {
    if (audioLink != "") {
      if (isPlaying) {
        setIsPlaying(false);
        audio.pause();
      } else {
        setIsPlaying(true);
        audio.play();
      }
    }
  };
  return (
    <button
      className={`${audioLink == "" ? "cursor-not-allowed" : null}`}
      onClick={playAudio}
    >
      {isPlaying ? (
        <div
          className="inline-block h-[48px] w-[48px] md:w-[75px] md:h-[75px] animate-spin border-main_purple rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em]  motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        ></div>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="75"
          height="75"
          viewBox="0 0 75 75"
          className={`h-[48px] w-[48px] md:w-[75px] md:h-[75px] border-4 border-transparent`}
        >
          <g fill="#A445ED" fillRule="evenodd">
            <circle
              cx="37.5"
              cy="37.5"
              r="37.5"
              opacity=".25"
              className={`hover:opacity-100 ${
                audioLink == ""
                  ? "cursor-not-allowed grayscale hover:opacity-25"
                  : null
              }`}
            />
            <path d="M29 27v21l21-10.5z" className="fill-white" />
          </g>
        </svg>
      )}
    </button>
  );
}
