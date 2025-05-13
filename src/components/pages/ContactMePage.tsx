import { useTitle } from '@/hooks/useTitle';
import React from 'react'
import { BasePage } from '@/components/layout/BasePage';
import { GeneratedPage } from '@/components/markdown/GeneratedPage';

export const ContactMePage = (): React.JSX.Element => {
  const pageName = "contact-me";
  useTitle("Contact me");
  return (
    <BasePage>
      <div className="text-black dark:text-green">
        <GeneratedPage pageName={pageName} />
      </div>
    </BasePage>
  );
};