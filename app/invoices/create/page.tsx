import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { sql } from 'drizzle-orm';
import { db } from '@/db';

export default function Page() {
  return (
    <main className="h-dvh space-y-8 mt-8">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold text-center">Create Invoice</h1>
      </div>

      <form className="space-y-6">
        <div className="space-y-1">
          <Label htmlFor="billing-name">Billing Name</Label>
          <Input id="billing-name" name="billing-name" placeholder="John Doe" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="billing-email">Billing Email</Label>
          <Input
            id="billing-email"
            name="billing-email"
            placeholder="example@gmail.com"
            type="email"
          />
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
          <Label htmlFor="billing-description">Description</Label>
          <Textarea
            id="billing-description"
            name="billing-description"
            placeholder="Enter a description of the invoice."
          />
        </div>
        <div className="flex justify-end">
          <Button type="submit" className='w-32'>
            Submit
          </Button>
        </div>
      </form>
    </main>
  );
}
