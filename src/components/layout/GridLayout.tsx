import React from 'react'

export const GridLayout = ({ className = "", children }: React.ComponentPropsWithoutRef<"div">): React.JSX.Element => {
    return (
        <div className={`grid grid-cols-3 md:grid-cols-12 ${className}`.trim()}>
            { children }
        </div>
    )
}