import Image from "next/image";
import React from "react";

import repertoire5 from "../../../public/img/repertoire/repertoire5.png";

import classes from "./Repertoire.module.css";

const Repertoire = () => {
  return (
    <section className={classes.root}>
      <div className={classes.head_container}>
        <h3 className={classes.heading}>REPERTUAR</h3>
        <div className={classes.image}>
          <Image src={repertoire5} alt="repertoire5" />
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.sub_heading}>
          <h4>PERŁY MUZYKI BAROKOWEJ</h4>
          <h5>ARIE I DUETY Z DZIEŁ J. S. BACHA I A. VIVALDIEGO</h5>
        </div>
        <div className={classes.content}>
          <p>
            Georg Philipp Telemann był wybitnym niemieckim kompozytorem okresu
            późnego baroku, rówieśnikiem Bacha i Händla. Za życia znany był jako
            jeden z najbardziej produktywnych i wszechstronnych muzyków. Wiele
            spośród jego kompozycji stanowi owoc postawy oświeceniowej,
            zwróconej ku człowiekowi - „kto przydaje się wielu, czyni lepiej niż
            ten, który pisze dla kilku”. W latach 1720-1750 zgodnie z rosnącym
            znaczeniem społecznym aspirującej klasy średniej, publikowane
            wówczas regularnie czasopisma zajmowały się moralną poprawą i
            racjonalną organizacją życia, których celem było ziemskie szczęście.
            Oszczędność, umiar i porządek jawiły się jako cnoty nadrzędne. Georg
            Philipp Telemann w swoich „Moralische Kantaten” z muzycznym dowcipem
            i poetyckim wdziękiem dokumentuje epokę Oświecenia.
          </p>
        </div>
        <div className={classes.switcher}>
          <div className={classes.dot}></div>
          <div className={classes.dot}></div>
          <div className={classes.dot}></div>
          <div className={classes.dot}></div>
          <div className={classes.dot}></div>
          <div className={classes.dot}></div>
        </div>
      </div>
    </section>
  );
};

export default Repertoire;
