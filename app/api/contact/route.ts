import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is too short'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(5, 'Message is too short'),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json({ errors: result.error.flatten() }, { status: 400 });
    }

    const { name, email, message } = result.data;

    let dbEntry = null;
    try {
      dbEntry = await prisma.contactSubmission.create({
        data: { name, email, message },
      });
    } catch (dbError) {
      console.error('Database connection error:', dbError);
    }

    return NextResponse.json({
      success: true,
      message: 'Inquiry received successfully!',
      data: dbEntry || { name, email, message }
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
