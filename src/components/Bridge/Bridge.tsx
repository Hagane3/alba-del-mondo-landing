import Image from "next/image";
import React from "react";
import classes from "./Bridge.module.css";

import img1 from "../../../public/img/bridge.png";

const Bridge = () => {
  return (
    <section className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <h3>MUSICA DELL'ANIMA</h3>
          <div className={classes.description}>
            <p>
              Wschodni Festiwal Muzyki Barokowej{" "}
              <strong>MUSICA DELL'ANIMA w Zamościu</strong> to inicjatywa
              kulturalna zapoczątkowana w 2021 roku przez Adama Kamienieckiego i
              współorganizowana wraz z zespołem muzyki dawnej{" "}
              <strong>Alba del Mondo.</strong>
              Wydarzenie obejmuje koncerty prezentujące w dużej mierze rzadko
              wykonywane przez polskich artystów dzieła z epoki baroku. To
              właśnie na nią przypada okres największego i najszybszego rozwoju
              Padwy Północy.{" "}
            </p>
            <p>
              <strong>
                Dzięki zróżnicowanemu programowi już pierwsze dwie edycje
                festiwalu obejmowały muzykę włoską, francuską, niemiecką oraz
                angielską - zarówno kameralną, jak i solową.
              </strong>{" "}
              Historyczne miasto Zamość stwarza nie tylko idealne warunki pod
              względem wykonawczym, dysponując zabytkowymi (renesansowymi i
              barokowymi) świątyniami, lecz stanowi także wspaniałą oprawę
              wizualną dla tego rodzaju muzyki. W ramach festiwalu powołana
              została także <strong>Zamojska Orkiestra Barokowa</strong>, której
              celem jest lokalna realizacja muzycznych idei i przygotowywanie
              festiwalowych premier.{" "}
            </p>
          </div>
        </div>
        <div className={classes.img_container}>
          <Image src={img1} alt="bridge img" className={classes.image} />
        </div>
      </div>
    </section>
  );
};

export default Bridge;
