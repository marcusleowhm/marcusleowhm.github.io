import React from 'react'

export const CustomImage = ({alt, src, title}: React.ComponentPropsWithRef<"img">) => {
  return (
    <figure className="text-center">
        <img src={src} alt={alt} className="m-auto max-w-full pb-2"/>
        {title && <figcaption>{title}</figcaption>}
    </figure>
  )
}
