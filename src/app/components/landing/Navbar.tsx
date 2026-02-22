import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-zinc-950/80 backdrop-blur-md fixed w-full z-50 top-0 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white tracking-tighter">
              MAJAPAHIT<span className="text-indigo-500">GYM</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="#features" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Features
              </Link>
              <Link href="#pricing" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Pricing
              </Link>
              <Link
                href="/login"
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-lg shadow-indigo-500/20"
              >
                Sign In
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            {/* Mobile menu button placeholder */}
            <Link
                href="/login"
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Login
              </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
