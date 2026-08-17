"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import styles from "./page.module.css";
import { signup } from "../actions/auth";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Creating account..." : "Continue"}
    </button>
  );
}

export default function SignupForm() {
  const [state, formAction] = useActionState(signup, null);

  return (
    <form action={formAction} className={styles.form}>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Enter Your name"
        required
      />

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
        placeholder="Password"
        required
      />

      {state?.error && <p className={styles.formerror}>{state.error}</p>}

      <SubmitButton />
    </form>
  );
}
