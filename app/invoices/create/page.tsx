import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';

export default function Page() {
  return (
    <main className="h-dvh space-y-8 mt-8">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold text-center">Create Invoice</h1>
      </div>

      <form className="space-y-6">
        <div className="space-y-1">
          <Label>Billing Name</Label>
          <Input placeholder="John Doe" />
        </div>
        <div className="space-y-1">
          <Label>Billing Email</Label>
          <Input placeholder="example@gmail.com" type="email" />
        </div>
        <div className="space-y-1">
          <Label>Value</Label>
          <Input placeholder="$250.00" />
        </div>
        <div className="space-y-1">
          <Label>Billing Name</Label>
          <Textarea placeholder="Enter a description of the invoice." />
        </div>
      </form>
    </main>
  );
}
