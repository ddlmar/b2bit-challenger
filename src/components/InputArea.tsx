import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    email: string;
    type: string;
    description: string;
}

export function InputArea<InputProps>({name, type, description}) {
    return (
        <div className="flex flex-col gap-3">
          <strong>{name}</strong>
          <input type={type} className="w-80 p-2 bg-gray-100 rounded-sm" placeholder={description}/>
        </div>
    )
};

export default InputArea;