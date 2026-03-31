import Image from 'next/image';
import Link from 'next/link';
import { SignedIn, UserButton } from '@clerk/nextjs';

import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full nav-glass px-4 py-3 sm:px-6 lg:px-10">
      {/* Brand */}
      <Link href="/" className="flex items-center gap-2.5 group">
        <div className="flex-center size-9 rounded-xl bg-blue-1/10 ring-1 ring-blue-1/20 transition-all duration-300 group-hover:bg-blue-1/20 group-hover:ring-blue-1/40 group-hover:shadow-[0_0_18px_rgba(14,120,249,0.35)]">
          <Image
            src="/icons/logo.svg"
            width={22}
            height={22}
            alt="Cloud-Call logo"
            className="transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <p
          className="text-[22px] font-extrabold tracking-tight text-white max-sm:hidden"
          style={{ fontFamily: 'var(--font-syne, sans-serif)' }}
        >
          CLOUD<span className="text-blue-1">-</span>CALL
        </p>
      </Link>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <SignedIn>
          <div className="ring-1 ring-dark-3 rounded-full transition-all duration-200 hover:ring-blue-1/40">
            <UserButton afterSignOutUrl="/sign-in" />
          </div>
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
