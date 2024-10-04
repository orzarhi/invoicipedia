import { Badge } from '@/components/ui/badge';
import { STATUS_STYLES } from '@/constant';
import { db } from '@/db';
import { Invoices } from '@/db/schema';
import { cn, formatPrice } from '@/lib/utils';
import { format } from 'date-fns';
import { eq } from 'drizzle-orm';
import { notFound } from 'next/navigation';

type SegmentParams = { id: string };

interface PageProps {
  params: Promise<SegmentParams>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  if (!id || typeof id !== 'string') return notFound();

  const invoiceId = +id;

  if (isNaN(invoiceId)) {
    throw new Error('Invalid invoice ID');
  }
  const [invoice] = await db
    .select()
    .from(Invoices)
    .where(eq(Invoices.id, invoiceId))
    .limit(1);

  if (!invoice) return notFound();

  const statusStyle = STATUS_STYLES.find((s) => s.status === invoice.status)?.tw;

  return (
    <main className="min-h-screen space-y-8 mt-8">
      <div className="flex justify-between">
        <h1 className="text-3xl flex gap-2 items-center font-semibold text-center">
          Invoice #{invoiceId}
          <Badge
            className={cn(
              `text-white mt-0.5 bg-${statusStyle} border-${statusStyle} hover:bg-${statusStyle}`
            )}
          >
            {invoice.status}
          </Badge>
        </h1>
      </div>
      <p className="text-2xl mb-3 -ml-1">{formatPrice(invoice.value / 100)}</p>

      <p className="text-lg mb-5">{invoice.description}</p>

      <div className="flex flex-col gap-2">
        <h2 className="font-bold text-lg">Billing Details</h2>
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
            <span>{format(invoice.createTs, 'dd/MM/yyyy')}</span>
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
      </div>
    </main>
  );
}
