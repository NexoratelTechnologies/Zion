import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import SignupForm from "./SignupForm";

export default function Signup() {
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
              <h1>Welcome</h1>
              <p>Create an Account to Begin Your Walk With God</p>
            </div>

            <div className={styles.signupform}>
              <SignupForm />
            </div>

            <div className={styles.termsblock}>
              <p>
                By Continuiung you agree to our{" "}
                <Link href="/terms" className={styles.termslink}>
                  Terms
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className={styles.termslink}>
                  Privacy Policy
                </Link>
              </p>

              <p>
                Already have an Account?{" "}
                <Link href="/login" className={styles.signinlink}>
                  Sign In
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
