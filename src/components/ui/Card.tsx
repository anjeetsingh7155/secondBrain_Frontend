import { Documentation } from "../Icons/DocumentIcon";
import { PlusIcon } from "../Icons/PlusIcon";
import { ShareIcon } from "../Icons/ShareIcon";

export const Card = () => {
  return (
    <div className="bg-white max-w-72 max-h-96 border border-slate-100 rounded-md shadow-md p-6 overflow-y-scroll overflow-x-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <div className="flex justify-between">
        <div className="flex">
          <span className="pr-2 text-gray-600">
            <Documentation size="sm" />
          </span>
          {"Ikkis Song (Sitare)"}
        </div>
        <div className="flex text-gray-400">
          <span className="pr-2">
            <PlusIcon size="sm" />
          </span>
          <ShareIcon size="sm" />
        </div>
      </div>
      {/* <iframe
         className="w-2/2 mt-7 rounded-lg"
          src="https://www.youtube.com/embed/cpDyLJkhg0I?si=Ldg_3FuWn2S61zQE"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe> */}

      <blockquote className="twitter-tweet max-w-full! w-full! mr-3">
        <a href="https://twitter.com/ANJEETSING2025/status/1966013982625481157?ref_src=twsrc%5Etfw"></a>
      </blockquote>
    </div>
  );
};
