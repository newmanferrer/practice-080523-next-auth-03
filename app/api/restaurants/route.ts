import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { prisma } from '@/lib/prisma/db/client'

export async function GET(request: NextRequest) {
  const skip = request.nextUrl.searchParams.get('skip')
  const take = request.nextUrl.searchParams.get('take')
  const restaurants = await prisma.restaurant.findMany({
    skip: skip ? parseInt(skip, 10) : undefined,
    take: take ? parseInt(take, 10) : undefined
  })

  return NextResponse.json(restaurants)
}

export async function POST(request: NextRequest) {
  const session = await getServerSession()

  if (!session?.user) {
    console.log('session: ', session)
    return new NextResponse(null, { status: 401, statusText: 'Unauthorized user' })
  }

  const json = await request.json()
  const created = await prisma.restaurant.create({
    data: json
  })

  return new NextResponse(JSON.stringify(created), {
    status: 201,
    statusText: 'restaurant created successfully'
  })
}
