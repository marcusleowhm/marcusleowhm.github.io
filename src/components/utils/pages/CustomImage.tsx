import React from 'react'

export const CustomImage = ({alt, src, title}: React.ComponentPropsWithRef<"img">): React.JSX.Element => {
  return (
    <figure className="p-4 text-center m-auto">
        <img src={src} alt={alt} className="m-auto pb-2"/>
        {title && <figcaption className="text-gray-500">{title}</figcaption>}
    </figure>
  )
}
