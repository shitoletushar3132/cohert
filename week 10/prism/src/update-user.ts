import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const res = await prisma.user.update({
    where: {
      id: 1,
    },
    data: {
      name: "TS",
    },
  });
  console.log(res);
}

// main();

async function updatePost() {
  await prisma.post.updateMany({
    where: {
      authorId: 1,
    },
    data: {
      published: true,
    },
  });
}

updatePost();
