import React from "react";

export const CustomH4 = ({
  children,
}: React.ComponentPropsWithRef<"h4">): React.JSX.Element => {
  return <h4 className="mt-4 p-4 text-center text-gray-500 dark:text-white">{children}</h4>;
};
