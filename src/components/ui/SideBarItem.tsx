import type { ReactElement } from "react";

interface  sidebaritemInterface{
    text : string ,
    icon : ReactElement
}
export const SideBarItem = (prop :sidebaritemInterface) =>{
return(
  <div className="flex items-center gap-3 p-2 hover:bg-gray-200 rounded-lg cursor-pointer">
      <div className="text-gray-700">{prop.icon}</div>
      <div className="text-gray-700">{prop.text}</div>
    </div>
);
}