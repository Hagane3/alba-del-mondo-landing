import Image, { StaticImageData } from "next/image";
import React from "react";
import classes from "./Modal.module.css";
import closeMenuIcon from "../../../../public/icons/close_menu.svg";

import gallery from "../../../data/GALLERY";

interface Props {
  toggleModal: any;
  imageId: number;
}

const Modal = ({ toggleModal, imageId }: Props) => {
  console.log(imageId);
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <button className={classes.close_btn} onClick={toggleModal}>
          <Image src={closeMenuIcon} alt="close menu icon" />
        </button>
        <Image src={gallery[imageId]} alt="photo" />
      </div>
    </div>
  );
};

export default Modal;
