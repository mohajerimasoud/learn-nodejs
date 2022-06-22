import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    const post = await prisma.post.update({
      where: { id: 2 },
      data: { published: false },
    });
    // console.log(post);
  } catch (error) {
    console.log("error in getting posts : ", error);
  }
}

main()
  .then((res) => {
    console.log("main then:", res);
  })
  .catch((e) => {
    console.log("main catch:", e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

// https://github.com/prisma/prisma-examples/tree/latest/typescript/rest-express
