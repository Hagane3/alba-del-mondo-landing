import React from "react";
import { useState } from "react";
import { createPortal } from "react-dom";

import Modal from "../UI/Modal/Modal";

import classes from "./Gallery.module.css";
import Image from "next/image";

import Arrow from "../UI/Arrow/Arrow";

import gallery from "../../data/GALLERY";

import arrow_left from "../../../public/icons/arrow_left.svg";
import arrow_right from "../../../public/icons/arrow_right.svg";

const Gallery = () => {
  const [galleryId, setGalleryId] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  const toggleModalHandler = (id: number) => {
    setIsModalOpen((prevState) => !prevState);
    setActiveImage(id);
  };

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
      {isModalOpen &&
        createPortal(
          <Modal toggleModal={toggleModalHandler} imageId={activeImage} />,
          document.body
        )}
      <h3 className={classes.heading}>GALERIA</h3>
      <div className={classes.container}>
        <h3 className={classes.heading}>GALERIA</h3>
        <div className={classes.gallery_mobile}>
          <Image src={gallery[galleryId]} alt="gallery 1" priority={true} />
        </div>
        <Image
          src={gallery[galleryId]}
          alt="gallery 1"
          onClick={() => toggleModalHandler(galleryId)}
          priority={true}
        />
        <Image
          src={gallery[galleryId + 1]}
          alt="gallery 2"
          onClick={() => toggleModalHandler(galleryId + 1)}
          priority={true}
        />
        <Image
          src={gallery[galleryId + 2]}
          alt="gallery 3"
          onClick={() => toggleModalHandler(galleryId + 2)}
          priority={true}
        />

        <div className={`${classes.switcher} ${classes.mobile}`}>
          <button className={classes.left} onClick={previousMobileImageHandler}>
            <Arrow />
          </button>

          <button className={classes.right} onClick={nextMobileImageHandler}>
            <Arrow />
          </button>
        </div>

        <div className={`${classes.switcher} ${classes.desktop}`}>
          <button
            className={classes.left}
            onClick={previousDesktopImageHandler}
          >
            <Arrow />
          </button>

          <button className={classes.right} onClick={nextDesktopImageHandler}>
            <Arrow />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
