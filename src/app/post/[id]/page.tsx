import { getPost } from "@/actions/actions";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/router";
import React from "react";
import Markdown from "react-markdown";
import RemarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const PostPage = async ({ params }: { params: { id: string } }) => {
  let post = await getPost(params.id);
  if (!post) {
    return;
  }

  return (
    <div className="m-2 flex flex-grow min-w-max justify-items-center">
      <Card className="flex flex-grow flex-col justify-center items-center ">
        <Card className="h-full m-8 p-8 w-2/3">
          <h1 className="scroll-m-20 pb-4 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {post?.title}
          </h1>
          <Markdown
            remarkPlugins={[RemarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              code({ node, inline, className, children, ...props }: any) {
                const match = /language-(\w+)/.exec(className || "");

                return !inline && match ? (
                  <SyntaxHighlighter
                    style={oneDark}
                    PreTag="div"
                    language={match[1]}
                    {...props}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {post?.content}
          </Markdown>
        </Card>
      </Card>
    </div>
  );
};

export default PostPage;
