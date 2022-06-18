import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const post = await prisma.post.update({
    where: { id: 1 },
    data: { published: true },
  })
  console.log(post)
}
main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })


	// https://github.com/prisma/prisma-examples/tree/latest/typescript/rest-express