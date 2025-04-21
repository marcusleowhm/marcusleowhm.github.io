import React from 'react';
import { GridLayout } from '@/components/layout/GridLayout';
import { Navbar } from '@/components/nav/Navbar';
import { Button } from '@/components/Button';

export const BasePage = ({ children }: React.ComponentPropsWithoutRef<"div">): React.JSX.Element => {
  return (
    <>
      <GridLayout>
        <Navbar className="col-start-2 col-span-10 hidden md:block" />
        <Button className="md:hidden" variant='contained'>Open Menu</Button>
      </GridLayout>
      <GridLayout className="flex-1">
        <div className="col-start-2 col-span-10 p-4">
          {children}
        </div>
      </GridLayout>
    </>
  )
}
