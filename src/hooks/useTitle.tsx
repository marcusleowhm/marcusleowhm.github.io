import React from 'react'

export const useTitle = (title: string) => {
    React.useEffect(() => {
        const previousTitle = document.title;
        document.title = `${document.title} - ${title}`
        return () => {
            document.title = previousTitle;
        }
    })
}
