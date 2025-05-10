import React from "react";

export const CustomOL = ({
  children,
}: React.ComponentPropsWithRef<"ol">): React.JSX.Element => {
  return <ol className="pl-4 list-decimal">{children}</ol>;
};
