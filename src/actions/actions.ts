"use server";

import prisma from "@/lib/db";
import { z } from "zod";

const formSchema = z.object({
  title: z.string().min(1),
  body: z.string().min(1),
});

export async function createPost(values: z.infer<typeof formSchema>) {
  await prisma.post.create({
    data: {
      title: values.title,
      content: values.body,
    },
  });
}

export async function getPosts() {
  const posts = await prisma.post.findMany({
    where: {},
    orderBy: [{ createdAt: "desc" }],
  });
  return posts;
}

export async function getPost(id: string) {
  const posts = await prisma.post.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  console.log(posts);
  return posts;
}
