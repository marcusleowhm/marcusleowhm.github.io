import React from 'react'

export const CustomLI = ( {children}: React.ComponentPropsWithoutRef<"li">): React.JSX.Element => {
  return (
    <li className="pb-2">{children}</li>
  )
}
