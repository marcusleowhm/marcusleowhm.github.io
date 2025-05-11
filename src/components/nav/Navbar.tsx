import React from "react";
import { Link } from "react-router";
import { Button } from "@/components/Button";
import { pages } from "@/config/pages";

export const Navbar = ({
  className,
}: React.ComponentPropsWithoutRef<"nav">): React.JSX.Element => {
  return (
    <nav className={className}>
      {pages.map(({ path, title }, index) => (
        <Link key={index} to={path as string}>
          <Button variant="text">{title}</Button>
        </Link>
      ))}
    </nav>
  );
};
