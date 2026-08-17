"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
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
