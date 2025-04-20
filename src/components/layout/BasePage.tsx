import React from 'react'
import { GridLayout } from '@/components/layout/GridLayout'
import { Navbar } from '@/components/nav/Navbar'

export const BasePage = ({ children }: React.ComponentPropsWithoutRef<"div">): React.JSX.Element => {
  return (
    <>
      <GridLayout>
        <Navbar className="col-start-2 col-span-10" />
      </GridLayout>
      <GridLayout className="flex-1">
        <div className="col-start-2 col-span-10 p-4">
          {children}
        </div>
      </GridLayout>
    </>
  )
}
