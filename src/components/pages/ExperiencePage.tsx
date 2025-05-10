import React from 'react'
import { BasePage } from '@/components/layout/BasePage'
import { GeneratedPage } from '@/components/utils/pages/GeneratedPage'

export const ExperiencePage = (): React.JSX.Element => {
  const pageName = "experience"
  return (
    <BasePage>
        <div className="text-black dark:text-green">
          <GeneratedPage pageName={pageName}/>
        </div>
    </BasePage>
  )
}
