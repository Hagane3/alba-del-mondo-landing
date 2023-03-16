import React from "react";
import classes from "./Team.module.css";

import adam from "../../../public/img/members/adam.png";
import paulina from "../../../public/img/members/paulina.png";
import aleksandra from "../../../public/img/members/aleksandra.png";
import krystyna from "../../../public/img/members/krystyna.png";
import lena from "../../../public/img/members/lena.png";
import radoslaw from "../../../public/img/members/radoslaw.png";
import Image from "next/image";

const Team = () => {
  return (
    <section className={classes.root}>
      <div className={classes.heading}>
        <h3>SKŁAD</h3>
      </div>
      <div className={classes.members}>
        <div className={classes.heading}>
          <h3>SKŁAD</h3>
        </div>
        <div className={classes.member}>
          <Image src={adam} alt="adam's photo" />
          <div className={classes.description}>
            <h4>Adam Kamieniecki</h4>
            <span>&#x2022;</span>
            <p>baryton</p>
          </div>
        </div>
        <div className={classes.member}>
          <Image src={paulina} alt="paulina's photo" />
          <div className={classes.description}>
            <h4>Paulina Jabłonka</h4>
            <span>&#x2022;</span>
            <p>sopran</p>
          </div>
        </div>
        <div className={classes.member}>
          <Image src={radoslaw} alt="radoslaw's photo" />
          <div className={classes.description}>
            <h4>Radosław Orawski</h4>
            <span>&#x2022;</span>
            <p>flet traverso</p>
          </div>
        </div>
        <div className={classes.member}>
          <Image src={aleksandra} alt="aleksandra's photo" />
          <div className={classes.description}>
            <h4>Aleksandra Gajkowska</h4>
            <span>&#x2022;</span>
            <p>flet traverso</p>
          </div>
        </div>
        <div className={classes.member}>
          <Image src={krystyna} alt="krystyna's photo" />
          <div className={classes.description}>
            <h4>Krystyna Wiśniewska</h4>
            <span>&#x2022;</span>
            <p>wiolonczela barokowa</p>
          </div>
        </div>
        <div className={classes.member}>
          <Image src={lena} alt="lena's photo" />
          <div className={classes.description}>
            <h4>Lena Nowakowska</h4>
            <span>&#x2022;</span>
            <p>klawesyn</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
