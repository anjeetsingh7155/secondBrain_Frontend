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
const variantClass =  {
"primary":"bg-blue-900 text-white hover:bg-blue-600",
"secondary":"bg-indigo-100 text-indigo-700 hover:bg-indigo-300"
}

// Size styles
const sizeClass = {
 "sm":"px-3 py-1 text-sm",
 "md":"px-4 py-2 text-base",
"lg": "px-6 py-3 text-lg",
}


return (
<button onClick={prop.onClick} className={`flex items-center gap-2 rounded-md transition ${variantClass[prop.variant]} ${sizeClass[prop.size]}`}>
{prop.startIcon && <span>{prop.startIcon}</span>}
{prop.text && <span>{prop.text}</span>} 
{prop.endIcon && <span>{prop.endIcon}</span>}
</button>
);
};
