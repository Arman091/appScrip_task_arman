"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./footer.module.css";
import Link from "next/link";
import FooterDropdown from "./FooterDropdown";
const Footer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <footer className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.upper_footer}>
          <div className={styles.newsletter}>
            <h3>Be the first to know</h3>
            <p>Sign up for updates from mettā muse.</p>
            <div className={styles.input}>
              <input
                className=""
                type="email"
                placeholder="Enter your e-mail..."
              />
              <button className={styles.subscriber}>subscribe</button>
            </div>
          </div>
          {/* right section */}
          <div className={styles.contact_details}>
            <div className={styles.contact_us}>
              <h3>contact us</h3>
              <div className={styles.media_contact}>
                <p style={{ marginBottom: "20px" }}>+44 221 133 5360</p>
                <p className={styles.trans_details}>
                  customercare@mettamuse.com
                </p>
              </div>
            </div>
            <div className={styles.currency}>
              <h3>Currency</h3>
              <div className={styles.usd}>
                <Image
                  src="/us.svg"
                  alt="televisionsvg"
                  style={{ marginBottom: "20px" }}
                  width={24}
                  height={24}
                />
                <span>+USD</span>
              </div>

              <p className={styles.trans_details}>
                Transactions will be completed in Euros and a currency reference
                is available on hover.
              </p>
            </div>
          </div>
        </div>

        <hr style={{ marginTop: "40px" }} />
        {/* bottom footer */}
        <div className={styles.action_links}>
          <div className={styles.metta_muse}>
            <div className={styles.metta_arrow_down} onClick={toggleMenu}>
              <h3>Metta muse</h3>
              <Image
                src="/arrow-down.svg"
                alt="error"
                width={34}
                height={34}
                className={styles.arrow_down}
              />
            </div>
            {/* for large screens */}
            <ul className={styles.links}>
              <FooterDropdown />
            </ul>
            {/* for smaller screens */}
            {isMenuOpen ? (
              <ul className={styles.toggleMenu}>
                <FooterDropdown />
              </ul>
            ) : (
              ""
            )}
          </div>
          {/* second div */}

          <div className={styles.quickLinks}>
            <h3>QUICK LINKS</h3>
            <ul>
              <li>
                <Link href="#" className={`${styles.link}`}>
                  Orders & Shipping
                </Link>
              </li>
              <li>
                <Link href="#" className={`${styles.link}`}>
                  Join/Login as a Seller
                </Link>
              </li>
              <li>
                <Link href="#" className={`${styles.link}`}>
                  Payment & Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className={`${styles.link}`}>
                  Return & Refunds
                </Link>
              </li>
              <li>
                <Link href="#" className={`${styles.link}`}>
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className={`${styles.link}`}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className={`${styles.link}`}>
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          {/* third container */}
          <div className={styles.follow_us}>
            <div className={styles.social_links_container}>
              <h3>follow Us</h3>
              <div className="social_links">
                <Image src="/insta.svg" alt="infosvg" width={24} height={24} />
                <Image src="/a.svg" alt="linkedinsvg" width={24} height={24} />
              </div>
            </div>
            {/* payment container */}
            <div className="paymentMethodsContainer">
              <h3>mettā muse Accepts</h3>
              <div className={styles.payments}>
                <Image
                  src="/apple-pay.svg"
                  alt="linkedinsvg"
                  width={34}
                  height={34}
                />
                <Image
                  src="/g-pay.svg"
                  alt="linkedinsvg"
                  width={34}
                  height={34}
                />
                <Image
                  src="/mastercard.svg"
                  alt="linkedinsvg"
                  width={34}
                  height={34}
                />
                <Image
                  src="/Opay.svg"
                  alt="linkedinsvg"
                  width={34}
                  height={34}
                />
                <Image
                  src="/paypal.svg"
                  alt="linkedinsvg"
                  width={34}
                  height={34}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>Copyright © 2023 mettamuse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
