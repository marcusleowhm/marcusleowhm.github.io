import React from 'react'
import { Button } from '../Button'
import { CloseSvg } from '../svg/CloseSvg'

interface DrawerProps extends React.ComponentPropsWithRef<"div"> {
    setIsDrawerOpenToClose: () => void
}

export const Drawer = ({ className, setIsDrawerOpenToClose }: DrawerProps): React.JSX.Element => {
    return (
        <div className={`fixed top-0 left-0 z-40 p-2 overflow-y-auto transition-transform bg-white dark:bg-gray-800 w-full h-screen ${className}`.trim()}>
            <Button variant="text" onClick={setIsDrawerOpenToClose}>
                <CloseSvg />
                <span className="sr-only">Close menu</span>
            </Button>
        </div>
    )
}