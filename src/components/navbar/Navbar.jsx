import Link from "next/link";
import styles from "./navbar.module.css";
const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <Link href="/" className={`${styles.link}`}>
          SHOP
        </Link>
        <Link href="#" className={`${styles.link}`}>
          SKILLS
        </Link>
        <Link href="#" className={`${styles.link}`}>
          STORES
        </Link>
        <Link href="#" className={`${styles.link}`}>
          ABOUT
        </Link>
        <Link href="#" className={`${styles.link}`}>
          CONTACTS
        </Link>
      </div>
      <div className={styles.navbarham}>
        <Link href="/" className={`${styles.link}`}>
          HOME
        </Link>
        <Link href="#" className={`${styles.link}`}>
          SHOP
        </Link>
      </div>
    </>
  );
};
export default Navbar;
