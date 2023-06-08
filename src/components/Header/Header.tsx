import React from "react";
import Image from "next/image";
import classes from "./Header.module.css";
import logo_big from "../../../public/img/logo_big.png";
import arrow_down from "../../../public/icons/arrow_down.svg";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className={classes.root}>
      <div className={classes.content}>
        <div className={classes.heading}>
          <Image src={logo_big} alt="logo" className={classes.logo} />
          <h1>ALBA DEL MONDO</h1>
          <h2>early music ensamble</h2>
        </div>
        <button className={classes.arrow_down}>
          <Link
            to="about"
            spy={true}
            activeClass="active"
            smooth={true}
            offset={-60}
          >
            <Image src={arrow_down} alt="arrow down" />
          </Link>
        </button>
      </div>
    </header>
  );
};

export default Header;
