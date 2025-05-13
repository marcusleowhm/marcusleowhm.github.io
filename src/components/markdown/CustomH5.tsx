import React from 'react'

export const CustomH5 = ( { children }: React.ComponentPropsWithoutRef<"h5"> ): React.JSX.Element => {
  return (
    <h5 className="pt-8 px-4 text-gray-400 dark:text-white">{children}</h5>
  )
}
