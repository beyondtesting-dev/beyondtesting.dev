import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const MarkdownText = ({ content }: { content: string }) => {
  return <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>;
};

export default MarkdownText;
