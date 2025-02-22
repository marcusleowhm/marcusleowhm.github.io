import React from 'react'

export const GridLayout = ( { children }: React.ComponentPropsWithoutRef<"div"> ): React.JSX.Element => {
  return (
    <div className="grid grid-cols-12">
        {children}
    </div>
  )
}
