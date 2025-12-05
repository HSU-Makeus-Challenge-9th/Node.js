import dotenv from 'dotenv';
import { PrismaClient } from "@prisma/client";
dotenv.config();

const prisma = new PrismaClient({
    log : [
        {
            emit: 'event',
            level: 'query'
        }
    ]
});

prisma.$on('query', (event) => {
  console.log(`[PRISMA/DB] ${event.duration}ms | SQL: ${event.query.slice(0, 100)}...`);
});

export { prisma };
