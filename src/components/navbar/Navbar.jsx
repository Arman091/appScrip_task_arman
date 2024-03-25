// Navbar.jsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";

const links = [
  { href: "/", text: "HOME" },
  { href: "/shop", text: "SHOP" },
  { href: "#", text: "SKILLS" },
  { href: "#", text: "STORES" },
  { href: "#", text: "ABOUT" },
  { href: "#", text: "CONTACTS" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <>
      <div className={styles.navbar}>
        {links.map((link) => (
          <Link
            href={link.href}
            key={link.href}
            className={`${
              pathname.startsWith(link.href) ? styles.active : styles.link
            }`}
          >
            {link.text}
          </Link>
        ))}
      </div>
      <div className={styles.navbarham}>
        {/* Hamburger menu links */}
        {links.slice(0, 2).map((link) => (
          <Link
            href={link.href}
            key={link.href}
            className={`${
              pathname.startsWith(link.href) ? styles.active : styles.link
            }`}
          >
            {link.text}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;
