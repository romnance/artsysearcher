import React from "react";
import './Button.css';


interface ButtonProps {
    cb: any
}

const ResetButton: React.FC<ButtonProps> = ({ cb }: ButtonProps) =>  {
    return (
        <button 
        onClick={() => cb()}>
            Clear search history
        </button>
    )
}

export default ResetButton;

