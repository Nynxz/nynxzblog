import { getPost } from "@/actions/actions";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/router";
import React from "react";

const PostPage = async ({ params }: { params: { id: string } }) => {
  let post = await getPost(params.id);
  if (!post) {
    return;
  }
  return (
    <div className="m-2 flex flex-grow min-w-max justify-items-center">
      <Card className="flex flex-grow flex-col justify-center items-center text-center">
        <Card className="h-full m-8 p-8 w-2/3">
          <h1 className="scroll-m-20 pb-4 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {post?.title}
          </h1>
          <h1>{post?.content}</h1>
        </Card>
      </Card>
    </div>
  );
};

export default PostPage;
