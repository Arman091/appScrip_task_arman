import classes from "./Header.module.css";
import Image from "next/image";
import Navbar from "../navbar/Navbar";
const Header = () => {
  return (
    <>
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
          <div className={classes.icon}>
            <Image src="/logo.svg" alt="error" width={36} height={40} />
          </div>
          <div className={classes.logo}>
            <p>LOGO</p>
          </div>
          <div className={classes.iconsContainer}>
            <Image src="/search-normal.png" alt="error" width={24} height={24} />
            <Image src="/heart.svg" alt="error" width={24} height={24} />
            <Image src="/shopping-bag.svg" alt="error" width={24} height={24} />
            <Image src="/profile.svg" alt="error" width={24} height={24} />
            <p style={{ paddingRight: "5px" }}>ENG</p>
            <Image src="/arrow-down.svg" alt="error" width={24} height={24} />
          </div>
        </div>
       <Navbar/>
      </div>
    </>
  );
};

export default Header;
