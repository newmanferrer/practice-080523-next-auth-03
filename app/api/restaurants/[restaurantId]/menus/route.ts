import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma/db/client'

interface IParams {
  params: {
    restaurantId: string
  }
}

export async function GET(request: NextRequest, { params }: IParams) {
  const menus = await prisma.menu.findMany({
    where: {
      restaurantId: params.restaurantId
    }
  })

  return NextResponse.json(menus)
}

export async function POST(request: NextRequest, { params }: IParams) {
  const json = await request.json()
  const created = await prisma.menu.create({
    data: {
      ...json,
      restaurantId: params.restaurantId
    }
  })

  return new NextResponse(JSON.stringify(created), {
    status: 201,
    statusText: 'menu created successfully'
  })
}
