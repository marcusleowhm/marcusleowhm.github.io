import React from 'react'

export const CustomImage = ({alt, src, title}: React.ComponentPropsWithRef<"img">): React.JSX.Element => {
  return (
    <figure className="p-4 text-center">
        <img src={src} alt={alt} className="m-auto max-w-full pb-2"/>
        {title && <figcaption>{title}</figcaption>}
    </figure>
  )
}
