import React from "react";
import { GridLayout } from "@/components/layout/GridLayout";

export const ErrorPage = (): React.JSX.Element => {
  return (
    <GridLayout id="error_page__content" className="flex flex-1">
      <section className="md:col-start-2 col-span-10 p-4">
        Some image for error page not found
      </section>
    </GridLayout>
  );
};
