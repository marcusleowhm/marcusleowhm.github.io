import React from 'react'
import { Button } from '../Button'

export const Navbar = ( {className}: React.ComponentPropsWithoutRef<"div"> ): React.JSX.Element  => {
    return (
        <div className={className}>
            <Button variant="text">Home</Button>
            <Button variant="text">Experience</Button>
            <Button variant="text">Projects</Button>
        </div>
    )
}
