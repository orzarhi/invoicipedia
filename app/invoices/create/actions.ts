'use server';

import { Invoices } from '@/db/schema';
import { db } from '@/db';
import { redirect } from 'next/navigation';
// import { invoiceSchema } from '@/lib/validation';
export const createInvoice = async (fromData: FormData) => {
  try {
    // const { value, description } = invoiceSchema.parse(fromData);

    
    const value = fromData.get('value');
    const parsedValue = Math.floor(parseFloat(value as string) * 100);
    
    const description = fromData.get('description') as string;

    const results = await db
      .insert(Invoices)
      .values({
        value: parsedValue,
        description,
        status: 'open',
      })
      .returning({
        id: Invoices.id,
      });
   
    redirect(`/invoices/${results[0].id}`);
  } catch (error) {
    console.log(error);
    return 'An error occurred while creating the invoice.';
  }
};
