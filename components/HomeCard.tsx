'use client';

import Image from 'next/image';

import { cn } from '@/lib/utils';

interface HomeCardProps {
  className?: string;
  img: string;
  title: string;
  description: string;
  handleClick?: () => void;
}

const HomeCard = ({
  className,
  img,
  title,
  description,
  handleClick,
}: HomeCardProps) => {
  return (
    <section
      className={cn(
        'card-lift relative flex min-h-[200px] w-full cursor-pointer flex-col justify-between overflow-hidden rounded-2xl px-5 py-6 xl:max-w-[270px]',
        'bg-orange-1',
        className
      )}
      onClick={handleClick}
    >
      {/* Hover shine overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Icon */}
      <div className="glassmorphism flex-center size-11 rounded-xl">
        <Image src={img} alt={title} width={22} height={22} />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-1.5">
        <h1
          className="text-xl font-bold leading-tight tracking-tight text-white"
          style={{ fontFamily: 'var(--font-syne, sans-serif)' }}
        >
          {title}
        </h1>
        <p className="text-sm font-normal leading-relaxed text-white/75">
          {description}
        </p>
      </div>
    </section>
  );
};

export default HomeCard;
