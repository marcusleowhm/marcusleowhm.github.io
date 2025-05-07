import React from "react";
import { GridLayout } from "@/components/layout/GridLayout";
import { Navbar } from "@/components/nav/Navbar";
import { Button } from "@/components/Button";
import { Drawer } from "../nav/Drawer";
import { BurgerMenuSvg } from "../svg/BurgerMenuSvg";

export const BasePage = ({
  children,
}: React.ComponentPropsWithoutRef<"div">): React.JSX.Element => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState<boolean>(false);
  const BACKGROUND_COLOR = "bg-white-whitest";
  const DARK_BACKGROUND_COLOR = "dark:bg-gray-900";
  const BORDER_COLOR = "border-gray-300";
  const DARK_BORDER_COLOR = "dark:border-gray-400"

  return (
    <>
      <GridLayout
        id="nav__container"
        className={`fixed w-full top-0 start-0 border-b-2 border-solid z-10 shadow-sm 
          ${BORDER_COLOR}
          ${DARK_BORDER_COLOR}
          ${BACKGROUND_COLOR} 
          ${DARK_BACKGROUND_COLOR}`}
      >
        <Navbar className="hidden md:block col-start-2 col-span-10" />
        <Button
          className="size-10 md:hidden"
          variant="text"
          onClick={() => setIsDrawerOpen(true)}
        >
          <BurgerMenuSvg />
        </Button>
      </GridLayout>
      <Drawer
        className={`md:hidden ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        setIsDrawerOpen={setIsDrawerOpen}
      />
      <GridLayout
        id="page__content"
        className={`flex-1 pt-14 
        ${BACKGROUND_COLOR} 
        ${DARK_BACKGROUND_COLOR}`}
      >
        <section className="md:col-start-2 col-span-10 p-4">{children}</section>
      </GridLayout>
    </>
  );
};
