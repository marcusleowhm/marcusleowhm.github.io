import React from 'react'

interface CustomButtonProps extends React.ComponentPropsWithRef<"button"> {
    variant?: "contained" | "outlined" | "text"
}

export const Button = ({ variant, onClick, children }: CustomButtonProps): React.JSX.Element => {
    return (
        <button className={buildClass(variant)} onClick={onClick}>
            {children}
        </button>
    )
}

const buildClass = (variant: "contained" | "outlined" | "text" = "contained") => {
    const DEFAULT_PADDING_CLASS: string = "p-2";
    const DEFAULT_CURSOR_CLASS: string = "cursor-pointer";
    
    const BORDER_STYLE_CLASS = "border-solid";
    const BORDER_WIDTH_CLASS = "border-2"
    const BORDER_RADIUS = "rounded-xl"

    var finalClass: string[] = [];
    switch(variant) {
        case "contained":
            break;
        case "outlined":
            finalClass.push(BORDER_STYLE_CLASS);
            finalClass.push(BORDER_WIDTH_CLASS);
            finalClass.push(BORDER_RADIUS);
            break;
        case "text": 
            break;
    }

    finalClass.push(DEFAULT_PADDING_CLASS);
    finalClass.push(DEFAULT_CURSOR_CLASS);
    return finalClass.join(" ");
}