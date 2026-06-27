import { SideBarItem } from "./SideBarItem";
import { TwitterIcon } from "../Icons/twitterIcon";
import { Documentation } from "../Icons/DocumentIcon";
import { BrainIcon } from "../Icons/BrainIcon";
import { ShareIcon } from "../Icons/ShareIcon";
import { TagIcon } from "../Icons/TagIcon";
import { VideoIcon } from "../Icons/VideoIcon";
import { ThemeToggle } from "./ThemeToggle";

export const SideBar = () => {
  return (
     <div className="h-screen bg-white dark:bg-slate-900 w-72 shadow-xl border-r border-slate-100 dark:border-slate-800 fixed top-0 left-0 p-4 transition-colors flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 mb-6 text-gray-850 dark:text-slate-100">
          <div className="text-indigo-600 dark:text-indigo-400">
            <BrainIcon size="lg" />
          </div>
          <h1 className="text-lg font-bold">Second Brain</h1>
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
  );
};
