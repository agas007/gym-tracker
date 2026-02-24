import { prisma } from './src/lib/prisma'

async function main() {
    const user = await prisma.user.findFirst()
    console.log("DB connected successfully, found user:", user)
}

main().catch(console.error).finally(() => process.exit(0))
