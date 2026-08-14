import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="firstpartoffooter">
        <div>
          <Image
            src="/ZionLogo1-removebg-preview.png"
            alt="Zion"
            width={150}
            height={60}
          />
          <p className="zionchapelonfooter">Zion Chapel</p>
        </div>

        <div>
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
        </div>

        <div>
          <Link href="/about">About</Link>
          <Link href="/ministries">Ministries</Link>
          <Link href="/events">Events</Link>
        </div>

        <div>
          <Link href="/sermons">Sermons</Link>
          <Link href="/gallery">Gallery</Link>
        </div>

        <div>
          <Link href="/prayer-camp">
            <button className="footerbutton">Prayer Camp</button>
          </Link>
        </div>
      </div>

      <hr />

      <div className="secondpartoffooter">
        <div className="iconsandcopyrightonfooter">
          <div className="iconsonsecondpartoffotter">
            <a href="#" aria-label="Facebook">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" aria-label="YouTube">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="#" aria-label="TikTok">
              <i className="fa-brands fa-tiktok"></i>
            </a>
            <a href="#" aria-label="X">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
          </div>
        </div>

        <div className="copyrightonfooter">
          <p>&copy;Copyright. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
