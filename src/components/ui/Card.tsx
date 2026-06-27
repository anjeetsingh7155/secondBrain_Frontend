import { Documentation } from "../Icons/DocumentIcon";
import { EditIcon } from "../Icons/EditIcon";
import { ShareIcon } from "../Icons/ShareIcon";
import TwitterEmbed from "./TwitterEmbed";
import { FaYoutube, FaTwitter, FaInstagram, FaFacebook, FaReddit } from "react-icons/fa";

interface CardProps {
  title: string;
  type: "twitter" | "youtube" | "instagram" | "facebook" | "reddit";
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

  function getInstagramEmbedLink(url: string) {
    const match = url.match(/(?:p|reel)\/([A-Za-z0-9_-]+)/);
    if (match && match[1]) {
      return `https://www.instagram.com/p/${match[1]}/embed/`;
    }
    return "";
  }

  function getPlatformIcon(platformType: string) {
    switch (platformType) {
      case "youtube":
        return <FaYoutube className="text-red-600 size-5" />;
      case "twitter":
        return <FaTwitter className="text-sky-500 size-5" />;
      case "instagram":
        return <FaInstagram className="text-pink-600 size-5" />;
      case "facebook":
        return <FaFacebook className="text-blue-700 size-5" />;
      case "reddit":
        return <FaReddit className="text-orange-600 size-5" />;
      default:
        return <Documentation size="sm" />;
    }
  }

  return (
    <div className="bg-white dark:bg-slate-900 w-80 border border-slate-100 dark:border-slate-800 rounded-xl shadow-md p-4 flex flex-col gap-3 transition-colors">

      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-gray-700 dark:text-slate-200 font-medium">
          {getPlatformIcon(type)}
          <span className="truncate max-w-44">{title}</span>
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
              className="cursor-pointer text-red-500 hover:text-red-700"
            >
              ❌
            </span>
          )}
        </div>
      </div>

      {/* Content Rendering based on Platform Type */}
      <div className="flex-1">
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

        {/* Instagram */}
        {type === "instagram" && (
          getInstagramEmbedLink(link) ? (
            <iframe
              className="w-full h-80 rounded-lg border dark:border-slate-800"
              src={getInstagramEmbedLink(link)}
              title="Instagram embed"
              frameBorder="0"
              scrolling="no"
              allowTransparency
            />
          ) : (
            <div className="bg-gradient-to-tr from-yellow-100 via-pink-100 to-purple-100 dark:from-yellow-950/20 dark:via-pink-950/20 dark:to-purple-950/20 p-4 rounded-lg text-center flex flex-col gap-2 items-center transition-colors">
              <FaInstagram className="text-pink-600 size-8 animate-pulse" />
              <span className="text-xs font-semibold text-gray-700 dark:text-slate-300">Instagram Content</span>
              <a href={link} target="_blank" rel="noopener noreferrer" className="bg-pink-600 hover:bg-pink-700 text-white px-3 py-1.5 rounded-md text-xs font-medium transition-colors">
                View Post
              </a>
            </div>
          )
        )}

        {/* Facebook */}
        {type === "facebook" && (
          <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg text-center flex flex-col gap-2 items-center transition-colors">
            <FaFacebook className="text-blue-700 size-8" />
            <span className="text-xs font-semibold text-gray-700 dark:text-slate-300">Facebook Content</span>
            <a href={link} target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-md text-xs font-medium transition-colors">
              View Post
            </a>
          </div>
        )}

        {/* Reddit */}
        {type === "reddit" && (
          <div className="bg-orange-50 dark:bg-orange-950/20 p-4 rounded-lg text-center flex flex-col gap-2 items-center transition-colors">
            <FaReddit className="text-orange-600 size-8" />
            <span className="text-xs font-semibold text-gray-700 dark:text-slate-300">Reddit Content</span>
            <a href={link} target="_blank" rel="noopener noreferrer" className="bg-orange-600 hover:bg-orange-700 text-white px-3 py-1.5 rounded-md text-xs font-medium transition-colors">
              View Post
            </a>
          </div>
        )}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-auto pt-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 px-2 py-1 rounded-full text-xs transition-colors"
          >
            #{tag}
          </span>
        ))}
      </div>

    </div>
  );
};