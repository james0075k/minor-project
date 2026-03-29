import { SignIn } from "@clerk/nextjs";
import type { Metadata } from "next";

// ✅ Set the browser tab title for this page
export const metadata: Metadata = {
  title: "CLOUD-CALL | Sign In",
};

export default function SignInPage() {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <SignIn />
    </main>
  );
}