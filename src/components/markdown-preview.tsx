import "highlight.js/styles/github-dark.css";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

interface MarkdownPreviewProps {
  md: string;
}

const MarkdownPreviewer = ({ md }: MarkdownPreviewProps) => {
  return (
    <div className="min-h-full bg-background p-4 rounded-md border">
      <div className="prose lg:prose-xl dark:prose-invert max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
        >
          {md}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownPreviewer;
