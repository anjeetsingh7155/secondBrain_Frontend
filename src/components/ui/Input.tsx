import React, { forwardRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  type?: string;
  icon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, type = "text", icon, className = "", ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === "password";
    const inputType = isPassword ? (showPassword ? "text" : "password") : type;

    return (
      <div className={`flex items-center gap-3 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-1.5 bg-white dark:bg-slate-900 focus-within:ring-2 focus-within:ring-indigo-500/20 focus-within:border-indigo-500 dark:focus-within:border-indigo-400 transition-all ${className}`}>
        {icon && (
          <div className="flex items-center justify-center p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400">
            {icon}
          </div>
        )}
        <input
          type={inputType}
          placeholder={placeholder}
          ref={ref}
          className="w-full bg-transparent border-0 text-sm outline-none text-gray-800 dark:text-slate-200 placeholder-gray-400 dark:placeholder-slate-500"
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-slate-350 cursor-pointer p-1"
            tabIndex={-1}
          >
            {showPassword ? <FaEyeSlash className="size-4" /> : <FaEye className="size-4" />}
          </button>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";