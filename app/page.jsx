"use client";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import styles from "./page.module.css";
import Footer from "@/components/Footer";

import { useState, useEffect } from "react";

export default function Home() {
  const heroImage = [
    "/woodchurchhero.jpg",
    "/churchhero2.avif",
    "/newchurchheroes3.jpg",
    "/newchurchheroes2.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((previndex) => (previndex + 1) % heroImage.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const marqueeImages = [
    "/marqueeimage1.jpg",
    "/marqueeimage2.jpg",
    "/marqueeimage3.jpg",
    "/marqueeimage4.jpg",
    "/marqueeimage5.jpg",
    "/marqueeimage6.jpg",
    "/newchurchheroes1.jpg",
    "/mothersappr1.avif",
  ];
  return (
    <>
      <main>
        <section className={styles.hero}>
          <div className={styles.heroimage}>
            <Image
              src={heroImage[currentIndex]}
              alt="Zion Church"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          <div className={styles.divfordots}>
            {heroImage.map((image, index) => (
              <div
                key={index}
                className={
                  index === currentIndex
                    ? styles.dotactive
                    : styles.individualdots
                }
                onClick={() => setCurrentIndex(index)}
              ></div>
            ))}
          </div>

          <div className={styles.herotexts}>
            <h2>WELCOME HOME</h2>
            <div className={styles.heroboxes}>
              <div className={styles.herovaluebox}>LOVE</div>
              <div className={styles.herovaluebox}>FAITH</div>
              <div className={styles.herovaluebox}>INTERGRITY</div>
              <div className={styles.herovaluebox}>COMMUNITY</div>
              <div className={styles.herovaluebox}>SERVICE</div>
            </div>
            <div className={styles.herosocialicons}>
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

          <Navbar transparent />
        </section>
        <section className={styles.latestsermonsession}>
          <div className={styles.allrulesforLSS}>
            <div className={styles.ruleronLSS}></div>
            <div className={styles.ruleronLSS}></div>
            <div className={styles.ruleronLSS}></div>
          </div>
          <div className={styles.LSSheading}>Watch the Latest Sermon</div>
          <div className={styles.LSStopic}>
            Sermon : <span>Topic of Sermon</span>
          </div>
          <div className={styles.LSSspeaker}>
            Speaker: <span>Speaker of Sermon</span>
          </div>
          <Link href="/sermons" className={styles.sermonimagetovid}>
            <Image
              src="/pchirsteach2.jpg"
              alt="Latest sermon"
              width={680}
              height={420}
            />
            <div className={styles.playbutton}>
              <i className="fa-solid fa-play"></i>
            </div>
          </Link>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.buttontowatchsermononutube}
          >
            Watch More on Youtube
          </a>
        </section>

        <section className={styles.welcomesection}>
          <div className={styles.firstwelctex}>Welcome to Zion House</div>
          <div className={styles.welcometextexpound}>
            Were one church with multiple congregations. Gathering across the
            city to love God, the church, the community, and the nations.
          </div>
          <Link href="/about" className={styles.aboutusbutton}>
            About Us
          </Link>

          <div className={styles.allservicetimes}>
            <div className={styles.firstservicetime}>
              <div className={styles.calendaricon}>
                <i className="fa-regular fa-calendar"></i>
              </div>
              <div className={styles.dayandactualtime}>
                <h2>Sundays</h2>
                <p>9:00 AM - 12:00 PM</p>
              </div>
            </div>
            <div className={styles.servicerulersepr}></div>
            <div className={styles.secondservicetime}>
              <div className={styles.calendaricon}>
                <i className="fa-regular fa-calendar"></i>
              </div>
              <div className={styles.dayandactualtime}>
                <h2>Sundays</h2>
                <p>2:00 AM - 3:00 PM</p>
              </div>
            </div>
            <div className={styles.servicerulersepr}></div>
            <div className={styles.thirdservicetime}>
              <div className={styles.calendaricon}>
                <i className="fa-regular fa-calendar"></i>
              </div>
              <div className={styles.dayandactualtime}>
                <h2>Wednesdays</h2>
                <p>7:00 AM - 9:00 PM</p>
              </div>
            </div>
          </div>

          <div className={styles.designundertimesonwelc}></div>

          <Link href="/contact" className={styles.findabranhcbtninwelc}>
            Find a Branch &nbsp;&nbsp;
            <i className="fa-solid fa-chevron-right"></i>
          </Link>

          <div className={styles.getlostcallusdiv}>
            <div className={styles.leftsideoflostcalldiv}>
              <i className="fa-solid fa-phone-volume"></i>
              <div className={styles.twotextsocalllostdiv}>
                <p>Need Directions? Call</p>
                <a href="tel:+233575673875">+233 57 567 3875</a>
              </div>
            </div>
            <div className={styles.rightsideofcallusdiv}>
              <i className="fa-solid fa-phone"></i> Call for directions
            </div>
          </div>
        </section>
        <section className={styles.newupcomsec}>
          <div className={styles.leftsideonnewupcom}>
            <h2>EVENTS</h2>
            <p>
              Stay in the loop with everything happening at Zion — from
              convention weekends to youth camps, there is always something
              coming up worth showing up for.
            </p>
            <div className={styles.leftandrigharrowonnewupcom}>
              <div className={styles.leftarrowonupc}>
                <i className="fa-solid fa-arrow-left-long"></i>
              </div>
              <div className={styles.rightarrowonupc}>
                <i className="fa-solid fa-arrow-right-long"></i>
              </div>
            </div>
          </div>
          <div className={styles.rightsideofnewupcom}>
            <div className={styles.firstcardonupcom}>
              <Image
                className={styles.newupcomimages}
                src="/neatdreassedyoth1.jpg"
                alt=""
                width={400}
                height={600}
              />
              <div className={styles.darkoverlayonupcom}></div>
              <div className={styles.eventtagonupcom}>Event</div>
              <div className={styles.shorteventtextonupcom}>
                <p>
                  Our annual youth camp returns this August — four days of
                  worship, teaching, and fellowship built for the next
                  generation.
                </p>
                <p>Learn More</p>
              </div>
            </div>
            <div className={styles.secondcardonupcom}>
              <Image
                className={styles.newupcomimages}
                src="/newhompageeventphoto1.jpg"
                alt=""
                width={400}
                height={600}
              />
              <div className={styles.darkoverlayonupcom}></div>
              <div className={styles.eventtagonupcom}>Event</div>
              <div className={styles.shorteventtextonupcom}>
                <p>
                  Join us for our upcoming convention weekend — a time of
                  powerful ministry and unity across all our congregations.
                </p>
                <p>Learn More</p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.upcomingactivities}>
          <p className={styles.upcomtag}>Whats On</p>
          <div className={styles.upcomheading}>Sunday, Wednesday, Fun Days</div>
          <div className={styles.upcomesubheading}>
            Dont Miss These thrillers, Youre not gonna like it
          </div>

          <div className={styles.firstsetofpptxtbgs}>
            <div className={styles.pptxtbg1}>
              <div className={styles.pptxbubble1}></div>
              <div className={styles.pptxbubble2}></div>
              <Image
                src="/burgundybg1.jpg"
                alt=""
                fill
                className={styles.pptximg}
              />
              <div className={styles.smileyfaceonppt}>
                <i className="fa-regular fa-face-smile"></i>
              </div>
              <div className={styles.textindidepptx}>
                <p>Pastors Appreciation Day on the 24th of August...</p>
                <Link href="/events" className={styles.learnmorepptx}>
                  Learn More
                </Link>
              </div>
            </div>

            <div className={styles.pptxtbg1}>
              <div className={styles.pptxbubble1}></div>
              <div className={styles.pptxbubble2}></div>
              <Image
                src="/black-square-background1.avif"
                alt=""
                fill
                className={styles.pptximg}
              />
              <div className={styles.guitaronpptx}>
                <i className="fa-solid fa-guitar"></i>
              </div>
              <div className={styles.textindidepptx}>
                <p>Choir Appreciation Day on the 24th of August...</p>
                <Link href="/events" className={styles.learnmorepptx}>
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.secondsetofpptxtbgs}>
            <div className={styles.pptxtbg2}>
              <div className={styles.pptxbubble1}></div>
              <Image
                src="/burgundybg1.jpg"
                alt=""
                fill
                className={styles.pptximg}
              />
            </div>

            <div className={styles.videocardwrapper}>
              <video
                autoPlay
                muted
                loop
                playsInline
                className={styles.praiseandworshipvid}
              >
                <source src="/praiseworhipvidnew1.MOV" type="video/mp4" />
              </video>
              <Link href="/events" className={styles.learnmoreonpraisevid}>
                Upcoming Events
              </Link>
            </div>
          </div>
        </section>
        <section className={styles.campandministriedonhome}>
          <div className={styles.camplongimage}>
            <Image
              className={styles.camplongimageitself}
              src="/boygirlpiclc2.jpg"
              alt="Prayer Camp"
              width={400}
              height={400}
            />
            <div className={styles.divunderlongcampandminimage}>
              <h3>Prayer Camp</h3>
              <p>
                Youth camp featuring youth from all our church branches from
                13th to 24th
              </p>
              <Link href="/camp" className={styles.pillbtnonhome}>
                Book Prayer Camp
              </Link>
            </div>
          </div>

          <div className={styles.ministriedlongimage}>
            <Image
              className={styles.camplongimageitself}
              src="/churchyouthunsplash1.avif"
              alt="Ministries"
              width={400}
              height={400}
            />

            <div className={styles.divunderlongcampandminimage}>
              <h3>Ministries</h3>
              <p>Find Your Place</p>
              <div className={styles.ministriesrulesepdiv}>
                <div className={styles.firsmin}>Adult</div>
                <div className={styles.firstinrule}></div>
                <div className={styles.firsmin}>Youth</div>
                <div className={styles.firstinrule}></div>
                <div className={styles.firsmin}>Children</div>
              </div>
              <Link href="/ministries" className={styles.pillbtnonhome}>
                Ministries
              </Link>
            </div>
          </div>
        </section>
        <section className={styles.gallerysection}>
          <p className={styles.gallerytag}>Gallery</p>
          <h2>LIFE AT ZION</h2>
          <p className={styles.gallerysub}>
            Moments from worship, fellowship, and everything in between
          </p>

          <div className={styles.gallerywrapper}>
            <div className={styles.gallerytrack}>
              {marqueeImages.map((img, index) => (
                <div key={`a-${index}`} className={styles.marqueeitem}>
                  <Image src={img} alt="" fill className={styles.marqueimage} />
                </div>
              ))}
              {marqueeImages.map((img, index) => (
                <div key={`b-${index}`} className={styles.marqueeitem}>
                  <Image src={img} alt="" fill className={styles.marqueimage} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className={styles.uhaveaplaceheresection}>
          <h1>YOU HAVE A PLACE HERE</h1>
          <p>
            Visit{" "}
            <span className={styles.zionholychurch}>Zion Holy Church</span>
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
