import React from 'react';
import { GridLayout } from '@/components/layout/GridLayout';
import { Navbar } from '@/components/nav/Navbar';
import { Button } from '@/components/Button';

export const BasePage = ({ children }: React.ComponentPropsWithoutRef<"div">): React.JSX.Element => {
  return (
    <>
      <GridLayout id="nav__container">
        <Navbar className="md:block col-start-2 col-span-10 hidden"/>
        <Button className="md:hidden" variant='contained'>Open Menu</Button>
      </GridLayout>
      <GridLayout id="page__content" className="flex-1">
        <div className="md:col-start-2 col-span-10 p-4">
          {children}
        </div>
      </GridLayout>
    </>
  )
}
