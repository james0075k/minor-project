import { Metadata } from 'next';
import { ReactNode } from 'react';

import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'CLOUD-CALL',
  description: 'A workspace for your team, powered by Stream Chat and Clerk.',
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main className="relative flex min-h-screen flex-col bg-dark-2">
      <Navbar />

      {/* Body — sidebar + main content */}
      <div className="flex flex-1">
        <Sidebar />

        <section className="flex flex-1 flex-col px-4 pb-6 pt-24 sm:px-8 sm:pt-28 lg:px-14">
          <div className="w-full">{children}</div>
        </section>
      </div>

      <Footer />
    </main>
  );
};

export default RootLayout;
