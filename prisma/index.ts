import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // TODO ここに処理を記載する
  const alice = await prisma.user.findUnique({
    where: { email: 'alice@example.com' }
  })
  
  const bob = await prisma.user.findUnique({
    where: {email: 'bob@example.com'},
    include: { posts: true }
  })

  console.log(bob)
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
