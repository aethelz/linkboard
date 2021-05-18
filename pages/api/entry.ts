import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@shared/prisma';
import type { Entry } from '@shared/types';

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  let entry: Entry | null = null;
  try {
    entry = JSON.parse(req.body);
  } catch (e) {
    console.log(e);
  }
  const entryId = Number(req.query.id);
  switch (req.method) {
    case 'PATCH':
      if (!entry) {
        throw new Error('Malformed Entry Body!');
      }
      handlePATCH(entryId, entry, res);
      break;
    case 'POST':
      if (!entry) {
        throw new Error('Malformed Entry Body!');
      }
      handlePOST(entry, res);
      break;
    case 'DELETE':
      handleDELETE(entryId, res);
      break;
    default:
      throw new Error(
        `The HTTP ${req.method} method is not supported at this route.`,
      );
  }
}

// POST /api/entry
async function handlePOST(data: Omit<Entry, 'id'>, res: NextApiResponse) {
  const entry = await prisma.entry.create({ data });
  res.json(entry);
}

// PATCH /api/entry/:id
async function handlePATCH(id: number, data: Entry, res: NextApiResponse) {
  const entry = await prisma.entry.update({
    where: { id },
    data,
  });
  res.json(entry);
}

// DELETE /api/post/:id
async function handleDELETE(id: number, res: NextApiResponse) {
  await prisma.entry.delete({
    where: { id },
  });
  res.status(204);
}
