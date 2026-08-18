import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { updateProfile, changePassword } from "../actions/auth";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./profile.module.css";

export default async function ProfilePage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  const user = await prisma.user.findUnique({
    where: {
      id: session.user.id,
    },
  });

  if (!user) {
    redirect("/login");
  }

  const prayerRequests = await prisma.prayerRequest.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
  });

  return (
    <>
      <Navbar />
      <main className={styles.profilepage}>
        <div className={styles.profileheader}>
          <span className={styles.profileeyebrow}>your account</span>
          <h1>My Profile</h1>
        </div>

        <div className={styles.profilegrid}>
          <div className={styles.profilecard}>
            <h2 className={styles.cardtitle}>Account Details</h2>

            <form action={updateProfile} className={styles.profileform}>
              <div className={styles.formgroup}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  defaultValue={user.name}
                  required
                />
              </div>

              <div className={styles.formgroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  defaultValue={user.email}
                  required
                />
              </div>

              <div className={styles.metarow}>
                <div className={styles.metaitem}>
                  <span className={styles.metalabel}>Role</span>
                  <span className={styles.rolebadge}>{user.role}</span>
                </div>

                <div className={styles.metaitem}>
                  <span className={styles.metalabel}>Member since</span>
                  <span className={styles.metavalue}>
                    {new Date(user.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>

              <button type="submit" className={styles.savebtn}>
                Save Changes
              </button>
            </form>
          </div>

          <div className={styles.profilecard}>
            <h2 className={styles.cardtitle}>Change Password</h2>

            <form action={changePassword} className={styles.profileform}>
              <div className={styles.formgroup}>
                <label htmlFor="currentPassword">Current Password</label>
                <input
                  type="password"
                  id="currentPassword"
                  name="currentPassword"
                  placeholder="Enter your current password"
                  required
                />
              </div>

              <div className={styles.formgroup}>
                <label htmlFor="newPassword">New Password</label>
                <input
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  placeholder="Enter your new password"
                  required
                />
              </div>

              <div className={styles.formgroup}>
                <label htmlFor="confirmPassword">Confirm New Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm your new password"
                  required
                />
              </div>

              <button type="submit" className={styles.savebtn}>
                Change Password
              </button>
            </form>
          </div>
        </div>

        <div className={styles.prayerhistory}>
          <h2 className={styles.cardtitle}>My Prayer Requests</h2>

          {prayerRequests.length === 0 ? (
            <p className={styles.emptyPrayerText}>
              You haven&apos;t submitted a prayer request yet.
            </p>
          ) : (
            <div className={styles.prayerlist}>
              {prayerRequests.map((req) => (
                <div key={req.id} className={styles.prayeritem}>
                  <div className={styles.prayeritemtop}>
                    <span className={styles.prayerbranch}>
                      {req.department} · {req.branch}
                    </span>
                    <span className={styles.prayertime}>
                      {new Date(req.createdAt).toLocaleString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                        hour: "numeric",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                  <p className={styles.prayertext}>{req.request}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
