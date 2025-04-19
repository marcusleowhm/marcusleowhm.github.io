import React from 'react'
import { Button } from '../Button'

export const Navbar = ( {className}: React.ComponentPropsWithoutRef<"div"> ): React.JSX.Element  => {
    return (
        <div className={className}>
            <Button variant="outlined">
                Home
            </Button>
        </div>
    )
}
