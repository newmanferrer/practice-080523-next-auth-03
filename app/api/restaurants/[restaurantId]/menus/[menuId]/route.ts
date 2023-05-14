import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma/db/client'

interface IParams {
  params: {
    restaurantId: string
    menuId: string
  }
}

export async function GET(request: NextRequest, { params }: IParams) {
  const restaurant = await prisma.menu.findFirst({
    where: {
      id: params.menuId,
      restaurantId: params.restaurantId
    }
  })

  return NextResponse.json(restaurant)
}

export async function PUT(request: NextRequest, { params }: IParams) {
  const json = await request.json()
  const updated = await prisma.menu.update({
    where: {
      id: params.menuId
    },
    data: {
      name: json.name || null,
      description: json.description || null
    }
  })

  return NextResponse.json(updated)
}

export async function PATCH(request: NextRequest, { params }: IParams) {
  const json = await request.json()
  const updated = await prisma.menu.update({
    where: {
      id: params.menuId
    },
    data: json
  })

  return NextResponse.json(updated)
}

export async function DELETE(request: NextRequest, { params }: IParams) {
  const deleted = await prisma.menu.delete({
    where: {
      id: params.menuId
    }
  })

  return NextResponse.json(deleted)
}
