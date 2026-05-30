// Prisma singleton — activate when DATABASE_URL is set
// Run: npx prisma generate && npx prisma migrate dev
export const prisma = {} as Record<string, unknown>;
