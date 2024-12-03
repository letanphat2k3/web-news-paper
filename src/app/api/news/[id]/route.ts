import { NextResponse } from 'next/server'

import { prisma } from '../../../../lib/prisma'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const news = await prisma.news.findUnique({
    where: { id: params.id },
  })

  if (!news) {
    return NextResponse.json(
      { error: 'News not found' },
      { status: 404 }
    )
  }

  return NextResponse.json(news)
}