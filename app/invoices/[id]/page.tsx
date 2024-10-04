import { Badge } from '@/components/ui/badge';
import { db } from '@/db';
import { Invoices } from '@/db/schema';
import { formatPrice } from '@/lib/utils';
import { format } from 'date-fns';
import { eq } from 'drizzle-orm';
import { notFound } from 'next/navigation';
import React from 'react';

interface PageProps {
  params: {
    id: string;
  };
}

export default async function Page({ params }: PageProps) {
  const invoiceId = +params.id;

  if (!invoiceId) return notFound();

  const [invoice] = await db
    .select()
    .from(Invoices)
    .where(eq(Invoices.id, invoiceId))
    .limit(1);
  console.log('🚀 ~ Page ~ invoice:', invoice);

  return (
    <main className="h-dvh space-y-8 mt-8">
      <div className="flex justify-between">
        <h1 className="text-3xl flex gap-2 items-center font-semibold text-center">
          Invoice #{invoiceId}
          <Badge className="bg-sky-600 text-white mt-0.5 hover:bg-sky-600">
            {invoice.status}
          </Badge>
        </h1>
      </div>
      <p className="text-3xl mb-3">{formatPrice(invoice.value / 100)}</p>

      <p className="text-lg mb-8">{invoice.description}</p>

      <h2 className="font-bold text-lg mb-4">Billing Details</h2>

      <ul className="grid gap-2">
        <li className="flex gap-4">
          <strong className="block w-28 flex-shrink-0 font-medium text-sm">
            Invoice ID
          </strong>
          <span>{invoice.id}</span>
        </li>
        <li className="flex gap-4">
          <strong className="block w-28 flex-shrink-0 font-medium text-sm">
            Invoice Date
          </strong>
          <span>{format(invoice.createTs,'dd/MM/yyyy')}</span>
        </li>
        <li className="flex gap-4">
          <strong className="block w-28 flex-shrink-0 font-medium text-sm">
            Billing Name
          </strong>
          <span>Or Zarhi</span>
        </li>
        <li className="flex gap-4">
          <strong className="block w-28 flex-shrink-0 font-medium text-sm">
            Billing Email
          </strong>
          <span>or@gmail.com</span>
        </li>
      </ul>
    </main>
  );
}
