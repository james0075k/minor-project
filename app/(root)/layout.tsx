import { ReactNode } from 'react';
import Head from 'next/head'; // import Head for page title

import StreamVideoProvider from '@/providers/StreamClientProvider';

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <>
      <Head>
        <title>CLOUD CALL</title> {/* sets browser tab title */}
      </Head>
      <main>
        <StreamVideoProvider>{children}</StreamVideoProvider>
      </main>
    </>
  );
};

export default RootLayout;