"use client";

import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { useSearchParams } from "next/navigation";
import styles from "./page.module.css";
import { login } from "../actions/auth";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Signing in..." : "Continue"}
    </button>
  );
}

export default function LoginForm() {
  const [state, formAction] = useActionState(login, null);
  const searchParams = useSearchParams();

  useEffect(() => {
    if (state?.success) {
      // Full page reload (not router.push) so SessionProvider remounts
      // and fetches the real session — avoids stale/mismatched user data
      // showing in the Navbar after login.
      const callbackUrl = searchParams.get("callbackUrl");
      window.location.href =
        callbackUrl && callbackUrl.startsWith("/") ? callbackUrl : "/dashboard";
    }
  }, [state, searchParams]);

  return (
    <form action={formAction} className={styles.form}>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter your email"
        required
      />

      <input
        type="password"
        name="password"
        id="password"
        placeholder="Enter your password"
        required
      />

      {state?.error && <p className={styles.formerror}>{state.error}</p>}

      <SubmitButton />
    </form>
  );
}
