import React from 'react'
import { Link, Outlet } from 'react-router'
import { Button } from '@/components/Button'

export const Navbar = ( {className}: React.ComponentPropsWithoutRef<"div"> ): React.JSX.Element  => {
    return (
        <div className={className}>
            <Link to="/"><Button variant="text">Home</Button></Link>
            <Link to="/experience"><Button variant="text">Experience</Button></Link>
            <Link to="/projects"><Button variant="text">Projects</Button></Link>
        </div>
    )
}
