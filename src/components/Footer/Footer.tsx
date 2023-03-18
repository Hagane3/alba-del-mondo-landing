import React from "react";
import classes from "./Footer.module.css";

import footerLogo from "../../../public/img/footer_logo.png";
import emailIcon from "../../../public/icons/email.svg";
import facebookIcon from "../../../public/icons/facebook.svg";
import instagramIcon from "../../../public/icons/instagram.svg";
import phoneIcon from "../../../public/icons/phone.svg";
import youtubeIcon from "../../../public/icons/youtube.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.heading}>
          <Image src={footerLogo} alt="footer logo" className={classes.logo} />
          <h3>ALBA DEL MONDO</h3>
          <h4>early music ensamble</h4>
        </div>
        <div className={classes.contact}>
          <h5>KONTAKT</h5>
          <div>
            <Image src={phoneIcon} alt="phone icon" />
            <p>696 500 567</p>
          </div>
          <div>
            <Image src={emailIcon} alt="email icon" />
            <p>albadelmondo@gmail.com</p>
          </div>
        </div>
        <div className={classes.socials}>
          <h5>OBSERWUJ NAS</h5>
          <div className={classes.container}>
            <Image src={facebookIcon} alt="facebook icon" />
            <Image src={instagramIcon} alt="instagram icon" />
            <Image src={youtubeIcon} alt="youtube icon" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
