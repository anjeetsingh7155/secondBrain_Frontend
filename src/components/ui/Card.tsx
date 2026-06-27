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
    <div className="bg-white w-80 border border-slate-100 rounded-xl shadow-md p-4 flex flex-col gap-3">

      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-gray-700 font-medium">
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
              className="w-full h-80 rounded-lg border"
              src={getInstagramEmbedLink(link)}
              title="Instagram embed"
              frameBorder="0"
              scrolling="no"
              allowTransparency
            />
          ) : (
            <div className="bg-gradient-to-tr from-yellow-100 via-pink-100 to-purple-100 p-4 rounded-lg text-center flex flex-col gap-2 items-center">
              <FaInstagram className="text-pink-600 size-8 animate-pulse" />
              <span className="text-xs font-semibold text-gray-700">Instagram Content</span>
              <a href={link} target="_blank" rel="noopener noreferrer" className="bg-pink-600 hover:bg-pink-700 text-white px-3 py-1.5 rounded-md text-xs font-medium transition-colors">
                View Post
              </a>
            </div>
          )
        )}

        {/* Facebook */}
        {type === "facebook" && (
          <div className="bg-blue-50 p-4 rounded-lg text-center flex flex-col gap-2 items-center">
            <FaFacebook className="text-blue-700 size-8" />
            <span className="text-xs font-semibold text-gray-700">Facebook Content</span>
            <a href={link} target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-md text-xs font-medium transition-colors">
              View Post
            </a>
          </div>
        )}

        {/* Reddit */}
        {type === "reddit" && (
          <div className="bg-orange-50 p-4 rounded-lg text-center flex flex-col gap-2 items-center">
            <FaReddit className="text-orange-600 size-8" />
            <span className="text-xs font-semibold text-gray-700">Reddit Content</span>
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
            className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full text-xs"
          >
            #{tag}
          </span>
        ))}
      </div>

    </div>
  );
};