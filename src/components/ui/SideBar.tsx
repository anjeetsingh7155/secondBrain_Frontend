import { SideBarItem } from "./SideBarItem";
import { TwitterIcon } from "../Icons/twitterIcon";
import { Documentation } from "../Icons/DocumentIcon";
import { BrainIcon } from "../Icons/BrainIcon";
import { ShareIcon } from "../Icons/ShareIcon";
import { TagIcon } from "../Icons/TagIcon";
import { VideoIcon } from "../Icons/VideoIcon";
import { ThemeToggle } from "./ThemeToggle";

interface SideBarProps {
  open?: boolean;
  onClose?: () => void;
}

export const SideBar = ({ open = false, onClose }: SideBarProps) => {
  return (
    <>
      {/* Backdrop for mobile */}
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
        />
      )}

      {/* Sidebar Container */}
      <div className={`h-screen bg-white dark:bg-slate-900 w-72 shadow-xl border-r border-slate-100 dark:border-slate-800 fixed top-0 left-0 p-4 transition-transform duration-300 z-40 flex flex-col justify-between ${
        open ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      }`}>
        <div>
          <div className="flex items-center justify-between mb-6 text-gray-850 dark:text-slate-100">
            <div className="flex items-center gap-3">
              <div className="text-indigo-600 dark:text-indigo-400">
                <BrainIcon size="lg" />
              </div>
              <h1 className="text-lg font-bold">Second Brain</h1>
            </div>
            
            {/* Mobile Close Button */}
            <button 
              onClick={onClose} 
              className="p-1 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-slate-200 md:hidden cursor-pointer"
            >
              ✕
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <SideBarItem text="Tweets" icon={<TwitterIcon size="md" />} />
            <SideBarItem text="Videos" icon={<VideoIcon size="md"/>} />
            <SideBarItem text="Documents" icon={< Documentation size="md"/>} />
            <SideBarItem text="Links" icon={<ShareIcon size="md" />} />
            <SideBarItem text="Tags" icon={<TagIcon size="md" />} />
          </div>
        </div>

        <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
          <ThemeToggle />
        </div>

      </div>
    </>
  );
};
