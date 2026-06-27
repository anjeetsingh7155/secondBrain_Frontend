import type { ReactElement } from "react";

interface  sidebaritemInterface{
    text : string ,
    icon : ReactElement
}
export const SideBarItem = (prop :sidebaritemInterface) =>{
return(
  <div className="flex items-center gap-3 p-2 hover:bg-gray-200 dark:hover:bg-slate-800 rounded-lg cursor-pointer transition-colors text-gray-750 dark:text-slate-300">
      <div>{prop.icon}</div>
      <div className="font-medium text-sm">{prop.text}</div>
    </div>
);
}