import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  //   log: ["query", "info", "warn", "error"], // Enable specific logging levels
});

async function main() {
  const users = await prisma.user.findMany({});
  //   console.log(users);

  const user = await prisma.user.findUnique({
    where: {
      id: 1,
    },
    include: {
      posts: true,
    },
  });

  console.log(user);
}

main();
