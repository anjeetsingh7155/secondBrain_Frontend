import { Documentation } from "../Icons/DocumentIcon";
import { PlusIcon } from "../Icons/PlusIcon";
import { ShareIcon } from "../Icons/ShareIcon";

interface CardProps {
  title: string;
  type: "twitter" | "youtube";
  link: string;
}
export const Card = (prop: CardProps) => {
  return (
    <div className="bg-white max-w-72 max-h-96 border border-slate-100 rounded-md shadow-md p-6 overflow-y-scroll overflow-x-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <div className="flex justify-between">
        <div className="flex">
          <span className="pr-2 text-gray-600">
            <Documentation size="sm" />
          </span>
          {prop.title}
        </div>
        <div className="flex text-gray-400">
          <span className="pr-2">
            <PlusIcon size="sm" />
          </span>
          <a href={prop.link} target="_blank">
            <ShareIcon size="sm" />
          </a>
        </div>
      </div>
      {prop.type === "youtube" && (
        <iframe
          className="w-2/2 mt-7 rounded-lg"
          src={prop.link.replace("watch", "embed").replace("?v=","/").replace("?si=","/")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      )}

      {prop.type === "twitter" && (
        <blockquote className="twitter-tweet max-w-full! w-full! mr-3">
          <a href={prop.link.replace("x.com" , "twitter.com")}></a>
        </blockquote>
      )}
    </div>
  );
};
