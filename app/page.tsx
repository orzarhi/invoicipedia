import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen text-center space-y-16 px-2">
      <section className="w-full max-w-4xl px-4 mt-16">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-shadow">
          invoicipedia 🚀
        </h1>
        <p className="text-lg md:text-xl mt-4">
          The ultimate solution for managing your invoices easily and efficiently.
        </p>
      </section>

      <section className="w-full max-w-4xl px-2 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div className="p-6 border rounded-lg shadow-sm">
          <h3 className="text-xl md:text-2xl font-semibold">⚡ Fast & Easy</h3>
          <p className="text-muted-foreground mt-2 text-sm md:text-base">
            Create and manage invoices in minutes with our user-friendly interface.
          </p>
        </div>

        <div className="p-6 border rounded-lg shadow-sm">
          <h3 className="text-xl md:text-2xl font-semibold">🔒 Secure</h3>
          <p className="text-muted-foreground mt-2 text-sm md:text-base">
            Your data is protected with top-notch security standards.
          </p>
        </div>

        <div className="p-6 border rounded-lg shadow-sm">
          <h3 className="text-xl md:text-2xl font-semibold">🌍 Accessible</h3>
          <p className="text-muted-foreground mt-2 text-sm md:text-base">
            Access your invoices from any device, anywhere, anytime.
          </p>
        </div>
      </section>

      <section className="w-full max-w-4xl px-4 mt-10 pb-20">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to simplify your invoicing? 🧾💡
        </h2>
        <p className="text-md md:text-lg mt-2">
          Join thousands of users who are already making invoicing easier.
        </p>
        <Link
          href="/dashboard"
          className={buttonVariants({
            className: 'mt-6 w-48 mx-auto transition-all',
          })}
        >
          Get Started
        </Link>
      </section>
    </main>
  );
}
