import React from 'react'

export const CustomAnchor = ({href, children}: React.ComponentPropsWithRef<"a">): React.JSX.Element => {
  return (
    <a href={href} target="_blank">{children}</a>
  )
}
