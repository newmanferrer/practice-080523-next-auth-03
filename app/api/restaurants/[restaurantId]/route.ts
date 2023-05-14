import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma/db/client'

interface IParams {
  params: {
    restaurantId: string
  }
}

export async function GET(request: NextRequest, { params }: IParams) {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      id: params.restaurantId
    }
  })

  return NextResponse.json(restaurant)
}

export async function PUT(request: NextRequest, { params }: IParams) {
  const json = await request.json()
  const updated = await prisma.restaurant.update({
    where: {
      id: params.restaurantId
    },
    data: {
      name: json.name || null,
      address: json.address || null,
      description: json.description || null
    }
  })

  return NextResponse.json(updated)
}

export async function PATCH(request: NextRequest, { params }: IParams) {
  const json = await request.json()
  const updated = await prisma.restaurant.update({
    where: {
      id: params.restaurantId
    },
    data: json
  })

  return NextResponse.json(updated)
}

export async function DELETE(request: NextRequest, { params }: IParams) {
  const deleted = await prisma.restaurant.delete({
    where: {
      id: params.restaurantId
    }
  })

  return NextResponse.json(deleted)
}
