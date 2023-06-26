"use client";

import * as React from "react";
import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/button";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  return (
    <div {...props}>
      <Button
        onClick={() => {
          setIsLoading(true);
          signIn("github");
        }}
        size="large"
        fullWidth
        disabled={isLoading}
        label={isLoading ? "Loading" : "Sign In with GitHub"}
      />
    </div>
  );
}
