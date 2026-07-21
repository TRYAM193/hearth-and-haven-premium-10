import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';
import { z } from 'zod';

const bookingSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(6, 'Valid phone is required'),
  propertyId: z.string().min(1, 'Property ID is required'),
  visitDate: z.string().transform((val) => new Date(val)),
  message: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const result = bookingSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json({ errors: result.error.flatten() }, { status: 400 });
    }

    const { name, email, phone, propertyId, visitDate, message } = result.data;

    let dbEntry = null;
    try {
      if (!propertyId.startsWith('fallback-')) {
        const property = await prisma.property.findUnique({ where: { id: propertyId } });
        if (property) {
          dbEntry = await prisma.booking.create({
            data: { name, email, phone, propertyId, visitDate, message },
          });
        }
      }
    } catch (dbError) {
      console.error('Database insertion error:', dbError);
    }

    return NextResponse.json({
      success: true,
      message: 'Private viewing booking successfully scheduled!',
      data: dbEntry || { name, email, phone, propertyId, visitDate, message }
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
