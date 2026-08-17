import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

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
            <div className="zionlogo">
              <Image
                src="/ZionLogo1-removebg-preview-cropped.png"
                alt=""
                width={200}
                height={200}
                className={styles.zionlogoitself}
              />
            </div>
            <div className={styles.welcomemessage1}>
              <h1>Welcome to Zion</h1>
              <p>Create an account and begin ur path to Zion</p>
            </div>
            <div className={styles.signupform}>
              <form action="" className={styles.form}>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Your name"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                />
                <input
                  type="text"
                  name="password"
                  placeholder="Enter your password"
                />
                <button>Continue</button>
              </form>
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
              className={styles.thirdsecimage}
            />
          </div>
        </section>
      </main>
    </>
  );
}
