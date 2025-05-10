import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { CustomTable } from "./CustomTable";
import { CustomUL } from "./CustomUL";
import { CustomOL } from "./CustomOL";

interface GeneratedPageProps extends React.ComponentPropsWithRef<"div"> {
  pageName: string;
}

export const GeneratedPage = ({
  pageName,
}: GeneratedPageProps): React.JSX.Element => {
  const [pageContent, setPageContent] = React.useState<string>("");
  const generateContent = async () => {
    const markdownFile = await import(`@/assets/page-contents/${pageName}.md`);
    setPageContent(markdownFile.markdown as string);
  };

  React.useMemo(() => {
    generateContent();
  }, [pageName, pageContent, setPageContent]);

  const customComponents = {
    table: (props: any) => <CustomTable {...props} />,
    ul: (props: any) => <CustomUL {...props} />,
    ol: (props: any) => <CustomOL {...props} />,
  };
  return (
    <Markdown remarkPlugins={[remarkGfm]} components={customComponents}>
      {pageContent}
    </Markdown>
  );
};
