import React from "react";
import { Button } from "../Button";
import { CloseSvg } from "../svg/CloseSvg";
import { Link } from "react-router";
import { pages } from "@/config/pages";

interface DrawerProps extends React.ComponentPropsWithRef<"div"> {
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Drawer = ({
  className = "",
  setIsDrawerOpen,
}: DrawerProps): React.JSX.Element => {
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
        {pages.map(({ path, title }, index) => (
          <Link
            key={index}
            className="no-underline mx-4 m-2 rounded-lg hover:bg-green "
            onClick={() => setIsDrawerOpen(false)}
            to={path as string}
          >
            <div className="p-4 text-green hover:text-white">{title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};
