import Markdown from "@uiw/react-markdown-preview";
import { FC } from "react";

interface MarkdownPreviewerProps {
  md: string;
}

const MarkdownPreviewer: FC<MarkdownPreviewerProps> = ({ md }) => (
  <div className="min-h-full p-4 rounded-md border">
    <Markdown className="p-4" source={md} disableCopy />
  </div>
);

export default MarkdownPreviewer;
