import { PrismaClient, Prisma } from '@prisma/client'

async function main() {
  const prisma = new PrismaClient()

  const select = Prisma.validator<Prisma.UserSelect>()({
    asd: true,
  })

  const data = await prisma.user.findMany()
  console.log(data)
  prisma.$disconnect()
}

main()
