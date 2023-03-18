import React from "react";
import classes from "./Gallery.module.css";
import Image from "next/image";

import gallery1 from "../../../public/img/gallery/gallery1.png";
import gallery2 from "../../../public/img/gallery/gallery2.png";
import gallery3 from "../../../public/img/gallery/gallery3.png";

import arrow_left from "../../../public/icons/arrow_left.svg";
import arrow_right from "../../../public/icons/arrow_right.svg";

const Gallery = () => {
  return (
    <section className={classes.root}>
      <h3 className={classes.heading}>GALERIA</h3>
      <div className={classes.container}>
        <h3 className={classes.heading}>GALERIA</h3>
        <Image src={gallery1} alt="gallery 1" />
        <Image src={gallery2} alt="gallery 2" />
        <Image src={gallery3} alt="gallery 3" />
        <div className={classes.switcher}>
          <button className={classes.left}>
            <Image src={arrow_left} alt="arrow left" />
          </button>

          <button className={classes.right}>
            <Image src={arrow_right} alt="arrow right" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
