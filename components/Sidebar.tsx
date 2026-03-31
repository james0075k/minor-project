'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="sticky left-0 top-0 flex h-screen w-fit flex-col bg-dark-1 border-r border-dark-3/40 p-3 pt-24 text-white max-sm:hidden lg:w-[260px]">
      {/* Nav links */}
      <div className="flex flex-1 flex-col gap-1">
        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);

          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn(
                'group relative flex items-center gap-3 rounded-xl px-3 py-3 transition-all duration-200',
                isActive
                  ? 'bg-blue-1 shadow-[0_4px_24px_rgba(14,120,249,0.4)]'
                  : 'hover:bg-dark-3/70 hover:translate-x-0.5'
              )}
            >
              {/* Icon container */}
              <div
                className={cn(
                  'flex-center size-9 flex-shrink-0 rounded-lg transition-all duration-200',
                  isActive
                    ? 'bg-white/20'
                    : 'bg-dark-3 group-hover:bg-dark-4'
                )}
              >
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  width={18}
                  height={18}
                />
              </div>

              {/* Label — hidden on md, shown on lg */}
              <p
                className={cn(
                  'text-sm font-semibold tracking-wide transition-colors duration-200 max-lg:hidden',
                  isActive ? 'text-white' : 'text-sky-1/70 group-hover:text-white'
                )}
              >
                {item.label}
              </p>

              {/* Active dot */}
              {isActive && (
                <span className="absolute right-3 size-1.5 rounded-full bg-white/70 max-lg:hidden" />
              )}
            </Link>
          );
        })}
      </div>

      {/* Footer credit at the bottom of sidebar */}
      <div className="mt-4 border-t border-dark-3/40 pt-4 max-lg:hidden">
        <a
          href="https://github.com/james0075k"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 rounded-lg px-3 py-2 transition-all duration-200 hover:bg-dark-3/50"
        >
          <svg
            viewBox="0 0 24 24"
            className="size-4 flex-shrink-0 fill-sky-1/40 transition-colors duration-200 group-hover:fill-blue-1"
            aria-hidden="true"
          >
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
          <span className="text-xs text-sky-1/40 transition-colors duration-200 group-hover:text-blue-1">
            James.00.7
          </span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
