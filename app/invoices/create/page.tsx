'use client';

import { SubmitButton } from '@/components/submit-button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { createInvoice } from './actions';
import Form from 'next/form';
import { SyntheticEvent, useState } from 'react';

export default function Page() {
  const [state, setState] = useState('ready');

  async function handleOnSubmit(event: SyntheticEvent) {
    if (state === 'pending') {
      event.preventDefault();
      return;
    }
    setState('pending');
  }

  return (
    <main className="h-dvh space-y-8 mt-8">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold text-center">Create Invoice</h1>
      </div>

      {/* @ts-expect-error Description: This error is expected because the Form component does not have a valid action prop. */}
      <Form action={createInvoice} onSubmit={handleOnSubmit} className="space-y-6">
        <div className="space-y-1">
          <Label htmlFor="name">Billing Name</Label>
          <Input id="name" name="name" placeholder="John Doe" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="email">Billing Email</Label>
          <Input id="email" name="email" placeholder="example@gmail.com" type="email" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="value">Value</Label>
          <Input
            type="number"
            inputMode="numeric"
            id="value"
            name="value"
            placeholder="$250.00"
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            name="description"
            placeholder="Enter a description of the invoice."
          />
        </div>
        <div className="flex justify-end">
          <SubmitButton className="w-36" />
        </div>
      </Form>
    </main>
  );
}
