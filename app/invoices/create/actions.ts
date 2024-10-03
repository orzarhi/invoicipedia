'use server';

import { Invoices } from '@/db/schema';
import { db } from '@/db';
import { redirect } from 'next/navigation';

export const createInvoice = async (fromData: FormData) => {
  const value = Math.floor(parseFloat(fromData.get('value') as string) * 100);
  const description = fromData.get('description') as string;

  const results = await db
    .insert(Invoices)
    .values({
      value,
      description,
      status: 'open',
    })
    .returning({
      id: Invoices.id,
    });

  redirect(`/invoices/${results[0].id}`);
};
