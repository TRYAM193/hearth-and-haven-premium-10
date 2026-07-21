import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="space-x-4">
      <Link href="/menu" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary">
        Menu
      </Link>
      <Link href="/booking" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary">
        Book a Table
      </Link>
    </nav>
  );
}
