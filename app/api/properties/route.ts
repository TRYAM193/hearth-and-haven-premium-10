import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';

const defaultProperties = [
  {
    title: 'Modern Luxury Villa',
    description: 'A spectacular luxury villa situated in the heart of Beverly Hills, offering breathtaking canyon views and infinity pool.',
    price: 2500000,
    beds: 5,
    baths: 6,
    area: 7500,
    imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1080&auto=format&fit=crop',
    location: 'Beverly Hills, CA',
    type: 'Villa',
  },
  {
    title: 'Downtown Penthouse Loft',
    description: 'Stunning industrial-chic penthouse with expansive terraces overlooking the New York City skyline.',
    price: 1200000,
    beds: 3,
    baths: 3,
    area: 2200,
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1080&auto=format&fit=crop',
    location: 'New York, NY',
    type: 'Apartment',
  },
  {
    title: 'Waterfront Tropical House',
    description: 'An elegant tropical house with private dock, sandy beach access, and lush landscaping in Miami.',
    price: 1800000,
    beds: 4,
    baths: 4,
    area: 4000,
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1080&auto=format&fit=crop',
    location: 'Miami, FL',
    type: 'House',
  },
  {
    title: 'Sunset Cliffs Estate',
    description: 'Architectural masterpiece perched on the cliffs of Malibu with private beach path and dramatic ocean vistas.',
    price: 3100000,
    beds: 6,
    baths: 7,
    area: 9000,
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1080&auto=format&fit=crop',
    location: 'Malibu, CA',
    type: 'Villa',
  },
  {
    title: 'Luxury Metropolis Apartment',
    description: 'High-end contemporary apartment with premium finishes in the premium district of Chicago.',
    price: 950000,
    beds: 2,
    baths: 2,
    area: 1800,
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1080&auto=format&fit=crop',
    location: 'Chicago, IL',
    type: 'Apartment',
  }
];

export async function GET() {
  try {
    let dbProperties = await prisma.property.findMany({
      orderBy: { createdAt: 'desc' }
    });

    if (dbProperties.length === 0) {
      await prisma.property.createMany({
        data: defaultProperties,
      });
      dbProperties = await prisma.property.findMany({
        orderBy: { createdAt: 'desc' }
      });
    }

    return NextResponse.json(dbProperties);
  } catch (error: any) {
    return NextResponse.json(
      defaultProperties.map((p, idx) => ({ id: `fallback-${idx}`, ...p }))
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, description, price, beds, baths, area, imageUrl, location, type } = body;

    if (!title || !price || !location || !type) {
      return NextResponse.json({ error: 'Missing required parameters' }, { status: 400 });
    }

    const newProperty = await prisma.property.create({
      data: {
        title,
        description: description || '',
        price: Number(price),
        beds: Number(beds || 0),
        baths: Number(baths || 0),
        area: Number(area || 0),
        imageUrl: imageUrl || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1080&auto=format&fit=crop',
        location,
        type,
      }
    });

    return NextResponse.json(newProperty, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
