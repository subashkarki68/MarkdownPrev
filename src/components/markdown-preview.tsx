import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";
import Markdown from "markdown-to-jsx";
import { useEffect } from "react";

interface MarkdownPreviewProps {
  md: string;
}

const MarkdownPreviewer = ({ md }: MarkdownPreviewProps) => {
  useEffect(() => {
    hljs.highlightAll();
  }, [md]);

  return (
    <div className="min-h-full bg-background p-4 rounded-md border">
      <div className="prose lg:prose-xl dark:prose-invert max-w-none">
        <Markdown
          options={{
            overrides: {
              code: {
                component: ({ children, className }) => {
                  const language =
                    className?.replace("lang-", "") || "plaintext";
                  return (
                    <pre className={className}>
                      <code className={`hljs language-${language}`}>
                        {children}
                      </code>
                    </pre>
                  );
                },
              },
            },
          }}
        >
          {md}
        </Markdown>
      </div>
    </div>
  );
};

export default MarkdownPreviewer;
