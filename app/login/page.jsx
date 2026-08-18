import Image from "next/image";
import { Suspense } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import LoginForm from "./LoginForm";

export default function Login() {
  return (
    <>
      <main>
        <section className={styles.overallsignupsec}>
          <div className={styles.firstsignsec}>
            <Link href="/" className={styles.zionchapellink}>
              Zion Chapel
            </Link>
          </div>

          <div className={styles.secondsignsec}>
            <Image
              src="/ZionLogo1-removebg-preview-cropped.png"
              alt=""
              width={200}
              height={200}
              className={styles.zionlogoitself}
            />

            <div className={styles.welcomemessage1}>
              <h1>Welcome Back</h1>
              <p>Sign In to Continue Your Walk With God</p>
            </div>

            <div className={styles.signupform}>
              <Suspense fallback={null}>
                <LoginForm />
              </Suspense>
            </div>

            <div className={styles.termsblock}>
              <p>
                By Continuiung you agree to our{" "}
                <Link href="/terms" className={styles.termslink}>
                  Terms
                </Link>{" "}
                and{" "}
                <Link href="/privacy-policy" className={styles.termslink}>
                  Privacy Policy
                </Link>
              </p>

              <p>
                Dont have an Account?{" "}
                <Link href="/signup" className={styles.signinlink}>
                  Sign Up
                </Link>
              </p>
            </div>
          </div>

          <div className={styles.thirdsignsec}>
            <Image
              src="/neatdreassedyoth1.jpg"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className={styles.thirdsecimage}
            />
          </div>
        </section>
      </main>
    </>
  );
}
