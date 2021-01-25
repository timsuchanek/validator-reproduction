import { PrismaClient, Prisma } from '@prisma/client'

async function main() {
  const prisma = new PrismaClient()

  // this should not be allowed
  const select = Prisma.validator<Prisma.UserSelect>()({
    asd: true,
  })

  const data = await prisma.user.findMany()
  console.log(data)
  prisma.$disconnect()
}

main()
