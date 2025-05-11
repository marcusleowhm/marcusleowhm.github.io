import React from "react";

export const CustomTable = ({
  children,
}: React.ComponentPropsWithoutRef<"table">): React.JSX.Element => (
  <table className="">{children}</table>
);
