import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const res = await prisma.user.create({
    data: {
      name: "vicky shitole",
      email: "vicky@gmail.com",
    },
  });
  console.log(res);
}

main()
  .then(async () => {
    console.log("done the query");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
