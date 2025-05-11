import React from 'react'

interface CustomButtonProps extends React.ComponentPropsWithRef<"button"> {
    variant?: "contained" | "outlined" | "text"
}

export const Button = ({ className = "", variant, onClick, children }: CustomButtonProps): React.JSX.Element => {
    return (
        <button className={`${className} ${buildClass(variant)}`.trim()} onClick={onClick}>
            {children}
        </button>
    )
}

const buildClass = (variant: "contained" | "outlined" | "text" = "contained") => {
    const common: { [key: string]: string } = {
        padding: "p-2",
        margin: "m-2",
        cursor: "cursor-pointer"
    }
    var finalClass: string[] = [];
    for (const key of Object.keys(common)) finalClass.push(common[key])

    const styleObject = createStyleObject(variant);
    for (const key of Object.keys(styleObject)) finalClass.push(styleObject[key])
    return finalClass.join(" ");
}

const createStyleObject = (variant: string): {[key: string]: string} => {
    switch (variant) {
        case "contained": 
        return {
            color: "bg-green",
            textColor: "text-white dark:text-gray-900",
            radius: "rounded-xl",
            width: "w-max",
        }
        case "outlined": 
        return {
            border: "border-solid",
            borderColor: "border-green",
            textColor: "text-green",
            borderWidth: "border",
            radius: "rounded-xl",
        }
        case "text": 
        return {
            textColor: "text-green dark:text-green",
        }
        default: 
        return {}
    }
}