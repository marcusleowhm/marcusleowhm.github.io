import React from "react";

interface CustomImageWithCaptionProps extends React.ComponentPropsWithRef<"figure"> {
  alt: string;
  src: string;
}

export const CustomImageWithCaptions = ({
  alt,
  src,
  title,
}: CustomImageWithCaptionProps): React.JSX.Element => {
  return (
    <figure className="p-4 text-center m-auto">
      <img src={src} alt={alt} className="m-auto pb-2" />
      {title && <figcaption className="text-gray-500 dark:text-white">{title}</figcaption>}
    </figure>
  );
};
