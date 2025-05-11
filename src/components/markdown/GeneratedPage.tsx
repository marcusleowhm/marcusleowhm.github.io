import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeUnwrapImages from "rehype-unwrap-images";
import { CustomTable } from "./CustomTable";
import { CustomUL } from "./CustomUL";
import { CustomOL } from "./CustomOL";
import { CustomParagraph } from "./CustomParagraph";
import { CustomImage } from "./CustomImage";
import { CustomAnchor } from "./CustomAnchor";

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

  const UnwrapImageIfFound = (props: any) => {
    if (React.isValidElement(props.children)) {
      const element = props.children
      return props.children.props.node.tagName === 'img' ? <>{element}</> : <CustomParagraph {...props} />;
    }
    return <CustomParagraph {...props} />
  }

  const customComponents = {
    table: (props: any) => <CustomTable {...props} />,
    ul: (props: any) => <CustomUL {...props} />,
    ol: (props: any) => <CustomOL {...props} />,
    p: (props: any) => UnwrapImageIfFound(props),
    img: (props: any) => <CustomImage {...props} />,
    a: (props: any) => <CustomAnchor {...props} />,
  };
  return (
    <Markdown remarkPlugins={[remarkGfm, rehypeUnwrapImages]} components={customComponents}>
      {pageContent}
    </Markdown>
  );
};
