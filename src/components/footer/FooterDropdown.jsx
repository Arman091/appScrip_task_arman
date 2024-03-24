import styles from "./footer.module.css";
import Link from "next/link";

function FooterDropdown() {
  return (
    <>
      <li>
        <Link href="#" className={styles.link}>
          About Us
        </Link>
      </li>
      <li>
        <Link href="#" className={styles.link}>
          Stories
        </Link>
      </li>
      <li>
        <Link href="#" className={styles.link}>
          Artisans
        </Link>
      </li>
      <li>
        <Link href="#" className={styles.link}>
          Boutiques
        </Link>
      </li>
      <li>
        <Link href="#" className={styles.link}>
          Contact Us
        </Link>
      </li>
      <li>
        <Link href="#" className={styles.link}>
          EU Compliances Docs
        </Link>
      </li>
    </>
  );
}

export default FooterDropdown;
