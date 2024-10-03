import { buttonVariants } from '@/components/ui/button';
import { LogInIcon } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col justify-center gap-5 h-dvh text-center">
      <h1 className="text-5xl font-bold">invoicipedia</h1>
      <Link
        href="/dashboard"
        className={buttonVariants({
          className: 'sm:w-36 w-1/2 mx-auto',
        })}
      >
        <LogInIcon className="size-4 mr-1" />
        Sign In
      </Link>
    </main>
  );
}
