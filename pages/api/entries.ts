import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@shared/prisma';

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const entries = await prisma.entry.findMany();
  res.json(entries);
}
