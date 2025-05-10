import React from "react";
import { BasePage } from "@/components/layout/BasePage";
import { GeneratedPage } from "@/components/utils/pages/GeneratedPage";

export const AboutMe = (): React.JSX.Element => {
  const pageName = "about-me";
  return (
    <BasePage>
      <div className="text-black dark:text-green">
        <GeneratedPage pageName={pageName}/>
      </div>
    </BasePage>
  );
};
