import React from "react";

export const CustomUL = ({
  children,
}: React.ComponentPropsWithoutRef<"ul">) => {
  return <ul className="pl-4 list-disc">{children}</ul>;
};
