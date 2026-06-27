import  { forwardRef } from "react";

interface InputProps {
    placeholder: string;
    type?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, type = "text" }, ref) => {
    return (
      <div>
        <input
          type={type}
          placeholder={placeholder}
          ref={ref}
          className="px-4 py-2 border rounded-md m-2 bg-white dark:bg-slate-800 border-gray-300 dark:border-slate-750 text-gray-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
        />
      </div>
    );
  }
);