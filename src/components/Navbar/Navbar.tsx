import React, { useState } from "react";
import classes from "./Navbar.module.css";
import Image from "next/image";

import logo from "../../../public/img/logo.png";
import openMenuIcon from "../../../public/icons/open_menu.svg";
import closeMenuIcon from "../../../public/icons/close_menu.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenuHandler = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <nav className={classes.root}>
      <Image src={logo} alt="logo image" className={classes.logo} />
      <button className={classes.btn} onClick={toggleMenuHandler}>
        <Image src={openMenuIcon} alt="open menu icon" />
      </button>
      <ul className={`${classes.menu_list} ${isOpen ? classes.active : ""}`}>
        <li>O NAS</li>
        <li>SKŁAD</li>
        <li>REPERTUAR</li>
        <li>GALERIA</li>
        <li>FESTIWAL</li>
        <li>
          <button>KONTAKT</button>
        </li>
        <button
          className={`${classes.btn} ${classes.close}`}
          onClick={toggleMenuHandler}
        >
          <Image src={closeMenuIcon} alt="close menu icon" />
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
