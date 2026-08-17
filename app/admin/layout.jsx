import AdminSidebar from "./AdminSidebar";
import styles from "./layout.module.css";

export default function AdminLayout({ children }) {
  return (
    <div className={styles.adminShell}>
      <AdminSidebar />

      <main className={styles.mainArea}>{children}</main>
    </div>
  );
}
