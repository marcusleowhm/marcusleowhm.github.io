import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { GeneratedTable } from "./GeneratedTable";
import { JSX } from "react/jsx-runtime";

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

  React.useEffect(() => {
    generateContent();
  }, [pageName, pageContent, setPageContent]);

  const customComponents = {
    table: (
      props: JSX.IntrinsicAttributes &
        Omit<
          React.DetailedHTMLProps<
            React.TableHTMLAttributes<HTMLTableElement>,
            HTMLTableElement
          >,
          "ref"
        >
    ) => <GeneratedTable {...props} />,
  };
  return (
    <Markdown remarkPlugins={[remarkGfm]} components={customComponents}>
      {pageContent}
    </Markdown>
  );
};
