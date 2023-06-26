import { Metadata } from "next";
import Link from "next/link";

import { UserAuthForm } from "@/components/user-auth-form";
import { MoveLeftIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};

export default function LoginPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Link
        href="/"
        className="absolute left-4 top-4 flex items-center md:left-8 md:top-8"
      >
        <MoveLeftIcon className="mr-3 h-6 w-6" /> Back
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back!
          </h1>
        </div>
        <UserAuthForm />
      </div>
    </div>
  );
}