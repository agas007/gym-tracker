import { PrismaClient } from '../generated/client'
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3'

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

import path from 'path'

const dbPath = path.join(process.cwd(), 'prisma/dev.db')
const adapter = new PrismaBetterSqlite3({ url: `file:${dbPath}` }, { timestampFormat: 'unixepoch-ms' })

export const prisma = globalForPrisma.prisma || new PrismaClient({ adapter })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
