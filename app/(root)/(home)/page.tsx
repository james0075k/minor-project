import MeetingTypeList from '@/components/MeetingTypeList';

const Home = () => {
  const now = new Date();

  const time = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });
  const date = new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(now);

  return (
    <section className="flex size-full flex-col gap-8 text-white">
      {/* ── Hero banner ───────────────────────────────────── */}
      <div className="relative h-[260px] w-full overflow-hidden rounded-2xl bg-hero bg-cover bg-center sm:h-[290px] lg:h-[320px]">
        {/* Gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark-1/70 via-dark-1/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-1/40 via-transparent to-transparent" />

        <div className="relative flex h-full flex-col justify-between p-5 sm:p-8 lg:p-11">
          {/* Upcoming pill */}
          <div className="glassmorphism flex w-fit items-center gap-2 rounded-xl px-4 py-2">
            <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
            <span className="text-sm font-medium text-sky-1">
              Upcoming Meeting at: 12:30 PM
            </span>
          </div>

          {/* Clock + date */}
          <div className="flex flex-col gap-1 animate-fade-in-up">
            <h1
              className="text-5xl font-extrabold leading-none tracking-tight drop-shadow-2xl sm:text-6xl lg:text-7xl"
              style={{ fontFamily: 'var(--font-syne, sans-serif)' }}
            >
              {time}
            </h1>
            <p className="text-sm font-medium text-sky-1/80 sm:text-base lg:text-xl">
              {date}
            </p>
          </div>
        </div>
      </div>

      {/* ── Quick-action cards ────────────────────────────── */}
      <div className="animate-fade-in-up" style={{ animationDelay: '120ms' }}>
        <MeetingTypeList />
      </div>
    </section>
  );
};

export default Home;
