import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const res = await prisma.post.findMany({
    take: 2, // limit 2
    skip: 2, // offset 2
  });
  console.log(res);
}

main();
