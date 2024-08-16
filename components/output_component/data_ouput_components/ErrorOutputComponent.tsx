import Image from "next/image";

export default function ErrorOutput({ apiresponse }: ErrorProps) {
    return (
      <div className="h-[50vh] w-[75vw] xl:w-[50vw] my-auto mx-auto flex flex-col justify-center items-center text-center">
        <div className="">
          <Image src={'/assets/images/icon-sad-face.svg'} width={48} height={48} className="h-[64px] w-[64px]" alt="Sad face icon"/>
        </div>
        <div className="text-headings font-bold text-main_black dark:text-white my-4">{apiresponse.data.title}</div>
        <div className="text-bodym text-main_gray">
          {apiresponse.data.message + apiresponse.data.resolution}
        </div>
      </div>
    );
  }