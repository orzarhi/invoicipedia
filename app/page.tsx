import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='max-w-5xl mx-auto'>
      <h1 className='text-5xl font-bold'>invoicipedia</h1>
      <Link href="/dashboard">Sign In</Link>
      <Button>Click me</Button>
    </main>
  );
}
