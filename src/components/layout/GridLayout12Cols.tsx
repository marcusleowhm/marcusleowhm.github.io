import React from 'react'

export const GridLayout12Cols = ({ children }: React.PropsWithChildren): React.JSX.Element => {
    return (
        <div className="grid grid-cols-3 md:grid-cols-12">
            { children }
        </div>
    )
}