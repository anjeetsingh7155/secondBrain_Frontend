import { Documentation } from "../Icons/DocumentIcon";
import { EditIcon } from "../Icons/EditIcon";
import { ShareIcon } from "../Icons/ShareIcon";
import TwitterEmbed from "./TwitterEmbed";

interface CardProps {
  title: string;
  type: "twitter" | "youtube";
  link: string;
  tags: string[];
  onDelete?: () => void;
}

export const Card = ({
  title,
  type,
  link,
  tags,
  onDelete,
}: CardProps) => {
  function getYoutubeEmbedLink(url: string) {
    return url
      .replace("watch?v=", "embed/")
      .replace("&", "?");
  }

  return (
    <div className="bg-white w-80 border border-slate-100 rounded-xl shadow-md p-4 flex flex-col gap-3">

      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-gray-700 font-medium">
          <Documentation size="sm" />
          <span>{title}</span>
        </div>

        <div className="flex items-center gap-3 text-gray-400">
          <span className="cursor-pointer hover:text-gray-600">
            <EditIcon size="sm" />
          </span>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
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

      {/* Youtube */}
      {type === "youtube" && (
        <iframe
          className="w-full h-48 rounded-lg"
          src={getYoutubeEmbedLink(link)}
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
        />
      )}

      {/* Twitter */}
      {type === "twitter" && (
        <div className="max-w-full overflow-hidden">
          <TwitterEmbed url={link} />
        </div>
      )}

      {/* Tags */}
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