'use client';

import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

export default function Error({ error }: { error: Error }) {
  return (
    <main className="min-h-screen space-y-8 mt-8">
      <div className="flex justify-between">
        <h1 className="text-3xl flex gap-2 items-center font-semibold text-center">
          Error: {error.message} 😕
        </h1>
      </div>
      <p className="text-xl text-muted-foreground mb-3 -ml-1">
        An error occurred while processing your request.
      </p>

      <p className="text-lg text-muted-foreground">
        This could be due to a temporary issue or an invalid action. Please try one of the
        following options to resolve the issue:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-lg text-muted-foreground">
        <li>Refresh the page and try again.</li>
        <li>Check your internet connection.</li>
        <li>If the problem persists, contact our support team.</li>
      </ul>

      <div className="flex gap-4">
        <Link
          href="/dashboard"
          className={buttonVariants({
            variant: 'ghost',
          })}
        >
          Return to Dashboard
        </Link>

        <a
          href="mailto:or.zarhi@icloude.com"
          className={buttonVariants({
            variant: 'ghost',
          })}
        >
          Contact Email Support
        </a>
      </div>
    </main>
  );
}
