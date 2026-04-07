import { IconStyle, type IconInterface } from "./InterfacesIcon"

export const VideoIcon = (prop : IconInterface) =>{
    return(
     <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={IconStyle[prop.size]}
        fill="currentColor"
      >
        <rect x="2" y="5" width="20" height="14" rx="4" ry="4" />
        <polygon points="10,9 16,12 10,15" fill="white" />
      </svg>
    </div>
    )
}