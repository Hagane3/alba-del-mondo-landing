import React from "react";
import { useState } from "react";

import classes from "./Gallery.module.css";
import Image from "next/image";

import gallery from "../../data/GALLERY";

import arrow_left from "../../../public/icons/arrow_left.svg";
import arrow_right from "../../../public/icons/arrow_right.svg";

const Gallery = () => {
  const [galleryId, setGalleryId] = useState(0);

  const nextMobileImageHandler = () => {
    if (galleryId === gallery.length - 1) {
      setGalleryId(0);
    } else {
      setGalleryId(galleryId + 1);
    }
  };

  const previousMobileImageHandler = () => {
    if (galleryId === 0) {
      setGalleryId(gallery.length - 1);
    } else {
      setGalleryId(galleryId - 1);
    }
  };

  const nextDesktopImageHandler = () => {
    if (galleryId === gallery.length - 3) {
      setGalleryId(0);
    } else {
      setGalleryId(galleryId + 3);
    }
  };

  const previousDesktopImageHandler = () => {
    if (galleryId === 0) {
      setGalleryId(gallery.length - 3);
    } else {
      setGalleryId(galleryId - 3);
    }
  };

  return (
    <section id="gallery" className={classes.root}>
      <h3 className={classes.heading}>GALERIA</h3>
      <div className={classes.container}>
        <h3 className={classes.heading}>GALERIA</h3>
        <div className={classes.gallery_mobile}>
          <Image src={gallery[galleryId]} alt="gallery 1" />
        </div>
        <Image src={gallery[galleryId]} alt="gallery 1" />
        <Image src={gallery[galleryId + 1]} alt="gallery 2" />
        <Image src={gallery[galleryId + 2]} alt="gallery 3" />

        <div className={`${classes.switcher} ${classes.mobile}`}>
          <button className={classes.left} onClick={previousMobileImageHandler}>
            <Image src={arrow_left} alt="arrow left" />
          </button>

          <button className={classes.right} onClick={nextMobileImageHandler}>
            <Image src={arrow_right} alt="arrow right" />
          </button>
        </div>

        <div className={`${classes.switcher} ${classes.desktop}`}>
          <button
            className={classes.left}
            onClick={previousDesktopImageHandler}
          >
            <Image src={arrow_left} alt="arrow left" />
          </button>

          <button className={classes.right} onClick={nextDesktopImageHandler}>
            <Image src={arrow_right} alt="arrow right" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
