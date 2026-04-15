import { Documentation } from "../Icons/DocumentIcon";
import { EditIcon } from "../Icons/EditIcon";
import { ShareIcon } from "../Icons/ShareIcon";

interface CardProps {
  title: string;
  type: "twitter" | "youtube";
  link: string;
  tags: string[]; 
  onDelete?: () => void;
}

export const Card = ({ title, type, link, tags, onDelete }: CardProps) => {

  function getYoutubeEmbedLink(url: string) {
    return url
      .replace("watch?v=", "embed/")
      .replace("&", "?");
  }

  return (
    <div className="bg-white w-72 border border-slate-100 rounded-xl shadow-md p-4 flex flex-col gap-3">

  
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-gray-700 font-medium">
          <Documentation size="sm" />
          {title}
        </div>

        <div className="flex items-center gap-3 text-gray-400">
          <span className="cursor-pointer hover:text-gray-600">
            <EditIcon size="sm" />
          </span>

          <a href={link} target="_blank">
            <ShareIcon size="sm" />
          </a>

          {onDelete && (
            <span
              onClick={onDelete}
              className="cursor-pointer text-red-500"
            >
              ❌
            </span>
          )}
        </div>
      </div>

      {type === "youtube" && (
        <iframe
          className="w-full h-48 rounded-lg"
          src={getYoutubeEmbedLink(link)}
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
        />
      )}

      {type === "twitter" && (
        <div className="text-sm text-gray-500 wrap-break-word">
          <a
            href={link.replace("x.com", "twitter.com")}
            target="_blank"
            className="text-blue-500 underline"
          >
            View Tweet
          </a>
        </div>
      )}

    
      <div className="flex flex-wrap gap-2 mt-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full text-xs"
          >
            #{tag}
          </span>
        ))}
      </div>

    </div>
  );
};