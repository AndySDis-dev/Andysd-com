import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.create({
    data: {
      email: 'demo@example.com'
    }
  })

  await prisma.job.createMany({
    data: [
      {
        title: 'Mystery Shop A',
        source: 'Demo',
        payout: 15,
        address: '123 Main St',
        lat: 37.7749,
        lng: -122.4194,
        durationMin: 10,
        status: 'pending',
        userId: user.id,
        tags: ['shop']
      },
      {
        title: 'Delivery B',
        source: 'Demo',
        payout: 8,
        address: '456 Elm St',
        lat: 37.78,
        lng: -122.42,
        durationMin: 15,
        status: 'pending',
        userId: user.id,
        tags: ['delivery']
      }
    ]
  })
}

main().catch(e => {
  console.error(e)
  process.exit(1)
}).finally(async () => {
  await prisma.$disconnect()
})
