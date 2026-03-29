import { SignUp } from "@clerk/nextjs";
import Head from "next/head";

export default function SignUpPage() {
  return (
    <>
      <Head>
        <title>CLOUD CALL</title> {/* This sets the tab title */}
      </Head>
      <main className="flex h-screen w-full items-center justify-center">
        <SignUp />
      </main>
    </>
  );
}