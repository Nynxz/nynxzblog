import React from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardTitle } from "./ui/card";
import Link from "next/link";
import { getPosts } from "@/actions/actions";

const PostScrollView = async () => {
  const newPosts = await getPosts();

  return (
    <Card className="p-4 m-0 border-none w-full h-full flex flex-col">
      <CardTitle className="pb-4">Blog Posts</CardTitle>
      <ScrollArea className="h-44 lg:h-0   flex flex-grow  w-full rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="">Title</TableHead>
              <TableHead className="">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {newPosts.map((post, index) => (
              <Link
                legacyBehavior
                key={index}
                href={`/post/${post.id}`}
                className="hover:cursor-pointer"
              >
                <TableRow className="cursor-pointer">
                  <TableCell className="font-medium">{post.title}</TableCell>
                  <TableCell>{post.createdAt.toDateString()}</TableCell>
                </TableRow>
              </Link>
            ))}
          </TableBody>
        </Table>
      </ScrollArea>
    </Card>
  );
};

export default PostScrollView;
