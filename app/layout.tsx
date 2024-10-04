import { Footer } from '@/components/footer';
import { Providers } from '@/components/providers';
import type { Metadata } from 'next';
import { Recursive } from 'next/font/google';
import './globals.css';

const inter = Recursive({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Invoicipedia',
  description: 'Invoicing made simple.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <main className="container mx-auto p-2.5 flex flex-col min-h-[calc(100vh-3.5rem-1px)]">
          <div className="flex-1 flex flex-col h-full">
            <Providers>
              {children}
              <Footer />
            </Providers>
          </div>
        </main>
      </body>
    </html>
  );
}
