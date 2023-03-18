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
            Repertuar tego koncertu stanowią różnorodne kantaty
            najwybitniejszych francuskich kompozytorów okresu baroku. Wszystkie
            jednak łączy wspólna tematyka – miłosne perypetie mitologicznych,
            czy też pastoralnych postaci. W programie odnaleźć można kantaty o
            zróżnicowanym składzie instrumentalnym, przeznaczone na głosy solowe
            – sopran (dessus) i baryton (basse-taille). Reprezentują one różne
            stadia rozwoju gatunku kantaty we Francji – od pionierskich
            kompozycji Jeana-Baptiste'a Morina i André Campry po mistrzowskie
            formy Jeana-Philippa Rameau, Michela Pignoleta de Montéclaira oraz
            Josepha Bodina de Boismortiera. Cechuje je charakterystyczne
            malarstwo dźwiękowe, doskonałość miniaturowej formy oraz
            quasi-operowa narracja. Czy burzliwe losy mitologicznych i
            pastoralnych bohaterów odnajdą ukojenie pośród muz?
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
