import React from "react";

export const CustomImage = ({
  alt,
  src,
  title,
}: React.ComponentPropsWithRef<"img">): React.JSX.Element => {
  return (
    <img src={src} alt={alt} title={title} className="p-4" />
  );
};
