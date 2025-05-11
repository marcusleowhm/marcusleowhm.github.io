import React from "react";
import { BasePage } from "@/components/layout/BasePage";
import { GeneratedPage } from "@/components/markdown/GeneratedPage";
import { useTitle } from "@/hooks/useTitle";

export const ExperiencePage = (): React.JSX.Element => {
  const pageName = "experience";
  useTitle("Experience");
  return (
    <BasePage>
      <div className="text-black dark:text-green">
        <GeneratedPage pageName={pageName} />
      </div>
    </BasePage>
  );
};
