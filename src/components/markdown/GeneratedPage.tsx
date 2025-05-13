import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeUnwrapImages from "rehype-unwrap-images";
import { CustomTable } from "./CustomTable";
import { CustomUL } from "./CustomUL";
import { CustomOL } from "./CustomOL";
import { CustomParagraph } from "./CustomParagraph";
import { CustomImageWithCaptions } from "./CustomImageWithCaption";
import { CustomImage } from "./CustomImage";
import { CustomAnchor } from "./CustomAnchor";
import { CustomH4 } from "./CustomH4";
import { CustomLI } from "./CustomLI";
import { CustomH5 } from "./CustomH5";
import { CustomH6 } from "./CustomH6";

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
  }, [pageName]);

  const UnwrapImageIfFound = (props: any) => {
    const element: React.ReactElement<any, string> = props.children;
    if (element.props == undefined) {
      return <CustomParagraph {...props} />;
    }
    // figure
    if (React.isValidElement(element) && element.props.node !== undefined) {
      if (element.props.node.tagName === "img") {
        const { title, src, alt } = element.props;
        return <CustomImageWithCaptions src={src} alt={alt} title={title} />;
      }
      return <CustomParagraph {...props} />;
    }
    return <CustomParagraph {...props} />;
  };

  const customComponents = {
    table: (props: any) => <CustomTable {...props} />,
    ul: (props: any) => <CustomUL {...props} />,
    ol: (props: any) => <CustomOL {...props} />,
    li: (props: any) => <CustomLI {...props} />,
    p: (props: any) => UnwrapImageIfFound(props),
    img: (props: any) => <CustomImage {...props} />,
    a: (props: any) => <CustomAnchor {...props} />,
    h4: (props: any) => <CustomH4 {...props} />,
    h5: (props: any) => <CustomH5 {...props} />,
    h6: (props: any) => <CustomH6 {...props} />,
  };
  return (
    <Markdown
      remarkPlugins={[remarkGfm, rehypeUnwrapImages]}
      components={customComponents}
    >
      {pageContent}
    </Markdown>
  );
};
