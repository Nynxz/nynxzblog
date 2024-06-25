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

const PostScrollView = () => {
  const posts = [
    {
      title: "First Post",
      date: new Date().toDateString(),
    },
    {
      title: "First Post",
      date: new Date().toDateString(),
    },
    {
      title: "First Post",
      date: new Date().toDateString(),
    },
    {
      title: "First Post",
      date: new Date().toDateString(),
    },
    {
      title: "First Post",
      date: new Date().toDateString(),
    },
    {
      title: "First Post",
      date: new Date().toDateString(),
    },
    {
      title: "First Post",
      date: new Date().toDateString(),
    },
    {
      title: "First Post",
      date: new Date().toDateString(),
    },
    {
      title: "First Post",
      date: new Date().toDateString(),
    },
    {
      title: "First Post",
      date: new Date().toDateString(),
    },
    {
      title: "First Post",
      date: new Date().toDateString(),
    },
    {
      title: "First Post",
      date: new Date().toDateString(),
    },
    {
      title: "First Post",
      date: new Date().toDateString(),
    },
    {
      title: "First Post",
      date: new Date().toDateString(),
    },
  ];
  return (
    <Card className="p-4 m-0 border-none w-full h-full flex flex-col">
      <CardTitle className="pb-4">Blog Posts</CardTitle>
      <ScrollArea className="h-44 lg:h-0   flex flex-grow  w-full rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Title</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {posts.map((post, index) => (
              <Link
                legacyBehavior
                key={index}
                href="/posts"
                className="hover:cursor-pointer"
              >
                <TableRow className="cursor-pointer">
                  <TableCell className="font-medium">{post.title}</TableCell>
                  <TableCell>{post.date}</TableCell>
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
