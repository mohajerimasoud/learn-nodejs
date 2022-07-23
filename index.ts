import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.$connect();
  await prisma.user.create({
    data: {
      name: "Rick11",
      email: "hello11@prisma.com",
    },
  });

  const users = await prisma.user.findMany();
  console.log("=== users", users);
}

main()
  .then((res) => {
    console.log("=== main then:", res);
  })
  .catch((e) => {
    console.log("=== main catch:", e);
  })
  .finally(async () => {
    // await prisma.$disconnect();
  });

// https://github.com/prisma/prisma-examples/tree/latest/typescript/rest-express
