import { NextResponse } from 'next/server'
import { prisma } from '../../../lib/prisma'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const search = searchParams.get('search')



  const news = await prisma.news.findMany({
    orderBy: { createdAt: 'desc' },
  })

  return NextResponse.json(news)
}



export async function POST(request: Request) {



  //  search news by title or author , date 

  const { searchParams } = new URL(request.url)
  const search = searchParams.get('search')


  const news = await prisma.news.findMany({
    where: {
      OR: [
        { title: { contains: search } },
        { author: { contains: search } },
      ],
    },
    orderBy: { createdAt: 'desc' },
  })

  return NextResponse.json(news)

}