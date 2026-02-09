import { type ReactElement } from "react";

interface ButtonProps {
variant: "primary" | "secondary";
size: "sm" | "md" | "lg";
text: string;
startIcon?: ReactElement;
endIcon? : ReactElement;
onClick?: () => void;
}

export const Button = (prop: ButtonProps) => {

// Variant styles
const variantClass = () => {
switch (prop.variant) {
case "primary":
return "bg-blue-900 text-white hover:bg-blue-600";
case "secondary":
return "bg-indigo-100 text-indigo-700 hover:bg-indigo-300";
default:
return "";
}
};

// Size styles
const sizeClass = () => {
switch (prop.size) {
case "sm":
return "px-3 py-1 text-sm";
case "md":
return "px-4 py-2 text-base";
case "lg":
return "px-6 py-3 text-lg";
default:
return "";
}
};

return (
<button onClick={prop.onClick} className={`flex items-center gap-2 rounded-md transition ${variantClass()} ${sizeClass()}`}>
{prop.startIcon && <span>{prop.startIcon}</span>}
{prop.text && <span>{prop.text}</span>} 
{prop.endIcon && <span>{prop.endIcon}</span>}
</button>
);
};
