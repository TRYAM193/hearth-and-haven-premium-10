import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <h1 className="text-5xl font-extrabold tracking-tight text-primary sm:text-6xl md:text-7xl">
        Welcome to Hearth and Haven
      </h1>
      <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
        Experience the finest dining in a cozy and welcoming atmosphere. Explore our delicious menu and book your table today.
      </p>
      <div className="mt-10 flex justify-center gap-x-6">
        <Link
          href="/menu"
          className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          View Our Menu
        </Link>
        <Link
          href="/booking"
          className="rounded-md bg-secondary px-3.5 py-2.5 text-sm font-semibold text-secondary-foreground shadow-sm hover:bg-secondary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
        >
          Book a Table
        </Link>
      </div>
    </div>
  );
}
