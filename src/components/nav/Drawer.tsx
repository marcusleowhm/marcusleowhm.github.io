import React from "react";
import { Button } from "../Button";
import { CloseSvg } from "../svg/CloseSvg";
import { Link } from "react-router";

interface DrawerProps extends React.ComponentPropsWithRef<"div"> {
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Drawer = ({
  className = "",
  setIsDrawerOpen,
}: DrawerProps): React.JSX.Element => {
  const handleMenuItemClick = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 z-40 p-2 overflow-y-auto transition-all bg-gray-100 dark:bg-gray-900 w-full h-screen ${className}`.trim()}
    >
      <div className="flex flex-row justify-end">
        <Button variant="text" onClick={() => setIsDrawerOpen(false)}>
          <CloseSvg />
          <span className="sr-only">Close menu</span>
        </Button>
      </div>
      <div className="flex flex-col">
        <Link to="/">
          <Button variant="text" onClick={handleMenuItemClick}>
            Home
          </Button>
        </Link>
        <Link to="/experience">
          <Button variant="text" onClick={handleMenuItemClick}>Experience</Button>
        </Link>
        <Link to="/projects">
          <Button variant="text" onClick={handleMenuItemClick}>Projects</Button>
        </Link>
      </div>
    </div>
  );
};
