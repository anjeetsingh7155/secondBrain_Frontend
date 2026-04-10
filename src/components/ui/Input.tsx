import  { forwardRef } from "react";

interface InputProps {
    placeholder: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder }, ref) => {
    return (
      <div>
        <input
          type="text"
          placeholder={placeholder}
          ref={ref}
          className="px-4 py-2 border rounded-md m-2"
        />
      </div>
    );
  }
);