import { ReactNode } from "react"

interface ButtonProps {
    icon?: ReactNode;
    label?: string;
    className?: string;
}

export const Button = ({icon, label, className}: ButtonProps) => {
    return(
        
        <button className={`flex items-center bg-purple-600 px-3 py-1 rounded-lg 
        gap-1.5 cursor-pointer hover:bg-fuchsia-900 transition-all duration-300
        ring-1 ring-transparent hover:ring-white ${className}`}>
            {icon && (
                icon
            )}
            {label && (
                <p className="text-zinc-50">{label}</p>
            )}
        </button>
    )
}