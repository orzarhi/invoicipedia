// bg-sky-600 border-sky-600
// bg-green-600 border-green-600
// bg-red-600 border-red-600
// bg-zinc-600 border-zinc-600

import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { STATUS_STYLES } from '@/constant';
import { db } from '@/db';
import { Invoices } from '@/db/schema';
import { cn, formatPrice } from '@/lib/utils';
import { format } from 'date-fns';
import { CirclePlus } from 'lucide-react';
import Link from 'next/link';

export default async function Page() {
  const invoices = await db.select().from(Invoices);

  return (
    <main className="h-dvh space-y-8 mt-8">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold text-center">Invoices</h1>
        <Link
          href="/invoices/create"
          className={buttonVariants({
            className: 'inline-flex gap-2',
            variant: 'ghost',
          })}
        >
          <CirclePlus className="size-5" />
          Create Invoice
        </Link>
      </div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="hidden sm:table-cell w-[100px]">Id</TableHead>
            <TableHead className="w-[100px] sm:w-0">Date</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead className="hidden sm:table-cell">Email</TableHead>
            <TableHead className="text-center">Status</TableHead>
            <TableHead className="text-right">Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => {
            const statusStyle = STATUS_STYLES.find((s) => s.status === invoice.status)?.tw;
            return (
              <TableRow key={invoice.id}>
                <TableCell className="font-medium hidden sm:table-cell">
                  <Link href={`/invoices/${invoice.id}`} className="block w-full h-full">
                    {invoice.id}
                  </Link>
                </TableCell>
                <TableCell>
                  <Link href={`/invoices/${invoice.id}`} className="block w-full h-full">
                    {format(invoice.createTs, 'dd/MM/yy')}
                  </Link>
                </TableCell>
                <TableCell>
                  <Link href={`/invoices/${invoice.id}`} className="block w-full h-full">
                    Or Zarhi
                  </Link>
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  <Link href={`/invoices/${invoice.id}`} className="block w-full h-full">
                    or@gmail.com
                  </Link>
                </TableCell>
                <TableCell className="text-center">
                  <Link href={`/invoices/${invoice.id}`} className="block w-full h-full">
                    <Badge variant="outline" className={cn(`text-white bg-${statusStyle} border-${statusStyle} hover:bg-${statusStyle}`)}>
                      {invoice.status}
                    </Badge>
                  </Link>
                </TableCell>
                <TableCell className="text-right">
                  <Link href={`/invoices/${invoice.id}`} className="block w-full h-full">
                    {formatPrice(invoice.value / 100)}
                  </Link>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </main>
  );
}
