import React from 'react'

export const CustomH6 = ( { children }: React.ComponentPropsWithoutRef<"h6"> ): React.JSX.Element => {
  return (
    <h5 className="px-4 text-gray-500 dark:text-white">{children}</h5>
  )
}
