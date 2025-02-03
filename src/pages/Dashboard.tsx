import MarkdownPrev from "@/components/markdown-preview";
import { PageHeader, PageHeaderHeading } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import demoMd from "/data/demo.md?raw";
import sampleMd from "/data/sample.md?raw";

export default function Dashboard() {
  const [md, setMd] = useState("");

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMd(e.target.value);
  };

  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Markdown Preview</PageHeaderHeading>
        <div>
          <p>Choose From below:</p>
          <div>
            <Button className="mr-2" onClick={() => setMd(sampleMd)}>
              Sample MD
            </Button>
            <Button className="mr-2" onClick={() => setMd(demoMd)}>
              Demo MD
            </Button>
            <Button className="mr-2" onClick={() => setMd("")}>
              Clear
            </Button>
          </div>
        </div>
      </PageHeader>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 min-h-screen p-4">
        <div className="h-full flex flex-col gap-2">
          <Textarea
            value={md}
            onChange={handleTextareaChange}
            placeholder="Enter your markdown here..."
            className="h-full resize-none"
          />
          <div className="text-sm text-muted-foreground">
            Tip: Use # for headings, **bold** text, and ``` for code blocks
          </div>
        </div>

        <div className="h-full overflow-auto">
          <MarkdownPrev md={md} />
        </div>
      </div>
    </>
  );
}
