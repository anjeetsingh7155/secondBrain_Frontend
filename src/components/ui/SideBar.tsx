import { SideBarItem } from "./SideBarItem";
import { TwitterIcon } from "../Icons/twitterIcon";
import { Documentation } from "../Icons/DocumentIcon";
import { BrainIcon } from "../Icons/BrainIcon";
import { ShareIcon } from "../Icons/ShareIcon";
import { TagIcon } from "../Icons/TagIcon";
import { VideoIcon } from "../Icons/VideoIcon";

export const SideBar = () => {
  return (
     <div className="h-screen bg-white w-72 shadow-xl fixed top-0 left-0 p-4">
      
      <div className="flex items-center gap-3 mb-6">
        <BrainIcon size="lg" />
        <h1 className="text-lg font-semibold">Second Brain</h1>
      </div>

      <div className="flex flex-col gap-2">
        <SideBarItem text="Tweets" icon={<TwitterIcon size="md" />} />
        <SideBarItem text="Videos" icon={<VideoIcon size="md"/>} />
        <SideBarItem text="Documents" icon={< Documentation size="md"/>} />
        <SideBarItem text="Links" icon={<ShareIcon size="md" />} />
        <SideBarItem text="Tags" icon={<TagIcon size="md" />} />
      </div>

    </div>
  );
};
