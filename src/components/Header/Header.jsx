import classes from "./Header.module.css";
import Image from "next/image";
import Navbar from "../navbar/Navbar";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.topbanner}>
        <div className={classes.wrapper}>
          <div className={classes.content}>
            <Image src="/icon.svg" alt="error" width={24} height={24} />
            <p>Lorem ipsum dolor</p>
          </div>
          <div className={classes.content}>
            <Image src="/icon.svg" alt="error" width={24} height={24} />
            <p>Lorem ipsum dolor</p>
          </div>
          <div className={classes.content}>
            <Image src="/icon.svg" alt="error" width={24} height={24} />
            <p>Lorem ipsum dolor</p>
          </div>
        </div>
      </div>
      <div className={classes.header_container}>
        <div className={classes.branding}>
          <div className={classes.hamburger}>
            <Image src="/hamlinear.png" alt="error" width={36} height={40} />
          </div>
          <div className={classes.icon}>
            <Image src="/logo.svg" alt="error" width={36} height={40} />
          </div>
          <div className={classes.logo}>
            <h2>LOGO</h2>
          </div>
          <div className={classes.iconsContainer}>
            <Image
              src="/search-normal.png"
              alt="error"
              width={24}
              height={24}
            />
            <Image src="/heart.svg" alt="error" width={24} height={24} />
            <Image src="/shopping-bag.svg" alt="error" width={24} height={24} />
            <Image src="/profile.svg" alt="error" width={24} height={24} />
            <p style={{ paddingRight: "5px" }}>ENG</p>
            <Image src="/arrow-down.svg" alt="error" width={24} height={24} />
          </div>
        </div>
        <Navbar  />
        <div className={classes.bannerTitle}>
          <h1>DISCOVER OUR PRODUCTS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
