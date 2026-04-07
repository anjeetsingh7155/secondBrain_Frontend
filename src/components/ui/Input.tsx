import React from "react";

interface InputProps {
    ref? : React.Ref<HTMLInputElement>;
    placeholder: string;
}
export function Input({ ref, placeholder }: InputProps) {
    return (
        <div className="">
            <input type="text" placeholder={placeholder} ref={ref} className="px-4 py-2 border rounded-md m-2" />
        </div>
    );
}