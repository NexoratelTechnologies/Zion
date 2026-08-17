"use client";

import { useActionState } from "react";
import { updateUserRole } from "../../actions/auth";
import styles from "./RoleSelector.module.css";

export default function RoleSelector({ userId, currentRole }) {
  const [state, formAction] = useActionState(updateUserRole, null);

  return (
    <form action={formAction} className={styles.roleform}>
      <input type="hidden" name="userId" value={userId} />

      <select
        name="role"
        defaultValue={currentRole}
        className={styles.roleselect}
      >
        <option value="VISITOR">Visitor</option>
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
      </select>

      <button type="submit" className={styles.updatebtn}>
        Update
      </button>

      {state?.error && <p className={styles.errormsg}>{state.error}</p>}
      {state?.success && <p className={styles.successmsg}>Updated.</p>}
    </form>
  );
}
