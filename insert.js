import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

import fs from 'fs';
import path from 'path';


async function main() {


  const __dirname = path.dirname(new URL(import.meta.url).pathname);
  const filePath = path.join(__dirname, 'data.txt');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));




  const createPromises = data.map(record => {
    return prisma.news.create({
      data: {
        author: record.author,
        title: record.title,
        createdAt: record.createdAt,
        url: record.url,
      },
    });
  });

  console.log('Creating News Article...');

  await Promise.all(createPromises);

   


  console.log('Added  News Article');
}

main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
