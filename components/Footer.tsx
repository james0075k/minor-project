import Link from 'next/link';
import Image from 'next/image';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/upcoming', label: 'Upcoming' },
  { href: '/previous', label: 'Previous' },
  { href: '/recordings', label: 'Recordings' },
  { href: '/personal-room', label: 'Personal Room' },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-glow-border relative mt-auto w-full bg-dark-1">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-14">

        {/* ── Main grid ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">

          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5 group w-fit">
              <div className="flex-center size-9 rounded-xl bg-blue-1/10 ring-1 ring-blue-1/20 transition-all duration-300 group-hover:bg-blue-1/20 group-hover:shadow-[0_0_16px_rgba(14,120,249,0.3)]">
                <Image
                  src="/icons/logo.svg"
                  width={20}
                  height={20}
                  alt="Cloud-Call logo"
                />
              </div>
              <span
                className="text-xl font-extrabold tracking-tight text-white"
                style={{ fontFamily: 'var(--font-syne, sans-serif)' }}
              >
                CLOUD<span className="text-blue-1">-</span>CALL
              </span>
            </Link>
            <p className="max-w-[230px] text-sm leading-relaxed text-sky-1/55">
              A professional video&nbsp;calling workspace powered by Stream
              &amp;&nbsp;Clerk. Connect, collaborate, and create&mdash;anywhere.
            </p>
          </div>

          {/* Col 2 — Quick links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.18em] text-sky-1/35">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex w-fit items-center gap-2.5 text-sm text-sky-1/55 transition-all duration-200 hover:text-blue-1"
                >
                  <span className="h-px w-3 rounded-full bg-dark-3 transition-all duration-200 group-hover:w-5 group-hover:bg-blue-1" />
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 3 — Developer */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.18em] text-sky-1/35">
              Developer
            </h3>
            <p className="max-w-[210px] text-sm leading-relaxed text-sky-1/55">
              Designed &amp; developed with attention to every detail.
            </p>

            {/* GitHub card */}
            <a
              href="https://github.com/james0075k"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-1 flex w-fit items-center gap-3 rounded-xl border border-dark-3 bg-dark-3/40 px-4 py-3 text-sm text-sky-1/65 transition-all duration-300 hover:border-blue-1/40 hover:bg-blue-1/8 hover:text-white hover:shadow-[0_0_24px_rgba(14,120,249,0.18)]"
            >
              {/* GitHub SVG icon */}
              <svg
                viewBox="0 0 24 24"
                className="size-4 flex-shrink-0 fill-current transition-transform duration-300 group-hover:scale-110"
                aria-hidden="true"
              >
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-white">James.00.7</span>
                <span className="text-[11px] text-sky-1/40">github.com/james0075k</span>
              </div>
            </a>
          </div>
        </div>

        {/* ── Divider ────────────────────────────────────────────── */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-dark-3 to-transparent" />

        {/* ── Bottom bar ─────────────────────────────────────────── */}
        <div className="flex flex-col items-center justify-between gap-2 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-sky-1/35">
            &copy; {year} Cloud-Call. All rights reserved.
          </p>
          <p className="text-xs text-sky-1/35">
            Built with Next.js &amp; Stream &middot; Designed by{' '}
            <a
              href="https://github.com/james0075k"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-1/70 transition-colors duration-200 hover:text-blue-1"
            >
              James.00.7
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
