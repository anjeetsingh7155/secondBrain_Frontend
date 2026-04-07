import { IconStyle, type IconInterface } from "./InterfacesIcon";

export const TagIcon = (prop: IconInterface) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={IconStyle[prop.size]}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.5 3h6.75L21 9.75l-9.75 9.75L3 13.5V6.75A3.75 3.75 0 017.5 3z"
        />
      </svg>
    </div>
  );
};