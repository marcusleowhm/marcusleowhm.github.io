import React from "react";

export const CustomImage = ({
  alt,
  src
}: React.ComponentPropsWithRef<"img">): React.JSX.Element => {
  return (
    <img src={src} alt={alt} className="p-4" />
  );
};
