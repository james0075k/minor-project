'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger asChild>
          <button
            className="flex-center size-9 rounded-xl border border-dark-3 bg-dark-3/60 transition-all duration-200 hover:bg-dark-3 hover:border-blue-1/30 sm:hidden"
            aria-label="Open menu"
          >
            <Image
              src="/icons/hamburger.svg"
              width={18}
              height={18}
              alt="menu"
            />
          </button>
        </SheetTrigger>

        <SheetContent
          side="left"
          className="flex flex-col border-r border-dark-3/50 bg-dark-1 p-0 w-[280px]"
        >
          {/* Header */}
          <div className="flex items-center gap-2.5 border-b border-dark-3/50 px-6 py-5">
            <div className="flex-center size-9 rounded-xl bg-blue-1/10 ring-1 ring-blue-1/20">
              <Image src="/icons/logo.svg" width={20} height={20} alt="logo" />
            </div>
            <p
              className="text-xl font-extrabold tracking-tight text-white"
              style={{ fontFamily: 'var(--font-syne, sans-serif)' }}
            >
              CLOUD<span className="text-blue-1">-</span>CALL
            </p>
          </div>

          {/* Nav links */}
          <div className="flex-1 overflow-y-auto px-4 py-6">
            <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.15em] text-sky-1/30">
              Navigation
            </p>
            <SheetClose asChild>
              <section className="flex flex-col gap-1">
                {sidebarLinks.map((item, index) => {
                  const isActive = pathname === item.route;

                  return (
                    <SheetClose asChild key={item.route}>
                      <Link
                        href={item.route}
                        className={cn(
                          'flex items-center gap-3 rounded-xl px-3 py-3 transition-all duration-200 animate-fade-in-up',
                          isActive
                            ? 'bg-blue-1 shadow-[0_4px_20px_rgba(14,120,249,0.3)]'
                            : 'hover:bg-dark-3/70'
                        )}
                        style={{ animationDelay: `${index * 55}ms` }}
                      >
                        <div
                          className={cn(
                            'flex-center size-9 flex-shrink-0 rounded-lg',
                            isActive ? 'bg-white/20' : 'bg-dark-3'
                          )}
                        >
                          <Image
                            src={item.imgURL}
                            alt={item.label}
                            width={18}
                            height={18}
                          />
                        </div>
                        <p
                          className={cn(
                            'text-sm font-semibold',
                            isActive ? 'text-white' : 'text-sky-1/70'
                          )}
                        >
                          {item.label}
                        </p>
                        {isActive && (
                          <span className="ml-auto size-1.5 rounded-full bg-white/60" />
                        )}
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>

          {/* Footer credit */}
          <div className="border-t border-dark-3/50 px-6 py-4">
            <p className="text-center text-xs text-sky-1/35">
              Designed by{' '}
              <a
                href="https://github.com/james0075k"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-1/70 transition-colors hover:text-blue-1"
              >
                James.00.7
              </a>
            </p>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
