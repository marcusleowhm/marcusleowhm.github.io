
export const CustomParagraph = ({
  children,
}: React.ComponentPropsWithRef<"p">): React.JSX.Element => {
  return <p className="p-4 indent-8 text-gray-500 dark:text-white">{children}</p>;
};
