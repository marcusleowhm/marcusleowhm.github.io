import React from "react";
import { BasePage } from "@/components/layout/BasePage";
import { GeneratedPage } from '@/components/utils/pages/GeneratedPage'
import { useTitle } from "@/hooks/useTitle";

export const ProjectPage = (): React.JSX.Element => {
  const pageName = "projects"
  useTitle("Projects");
  return (
    <BasePage>
      <div className="text-black dark:text-green">
        <GeneratedPage pageName={pageName}/>
      </div>
    </BasePage>
  );
};
