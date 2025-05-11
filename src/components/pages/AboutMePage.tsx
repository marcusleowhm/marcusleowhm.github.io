import React from "react";
import { BasePage } from "@/components/layout/BasePage";
import { GeneratedPage } from "@/components/markdown/GeneratedPage";
import { useTitle } from "@/hooks/useTitle";

export const AboutMePage = (): React.JSX.Element => {
  const pageName = "about-me";
  useTitle("About me");
  return (
    <BasePage>
      <div className="text-black dark:text-green">
        <GeneratedPage pageName={pageName} />
      </div>
    </BasePage>
  );
};
