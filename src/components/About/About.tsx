import React from "react";
import classes from "./About.module.css";

import { Link } from "react-scroll";

import statue from "../../../public/img/statue.png";
import Image from "next/image";

const About = () => {
  return (
    <section className={classes.root}>
      <div className={classes.container}>
        <div className={classes.heading}>
          <h3>O NAS</h3>
        </div>
        <div className={classes.wrapper}>
          <div className={classes.description}>
            <p className={classes.paragraph}>
              Zespół <strong>Alba del Mondo</strong> został założony w sierpniu
              2020 roku przez barytona Adama Kamienieckiego oraz klawesynistkę
              Lenę Nowakowską. Skupia się przede wszystkim na
              <strong>
                {" "}
                wykonawstwie dzieł z epoki baroku w nurcie historycznie
                poinformowanym.
              </strong>{" "}
              Skład zespołu, złożony z profesjonalnych muzyków w większości
              absolwentów Akademii Muzycznej im. Grażyny i Kiejstuta Bacewiczów
              w Łodzi, poszerzany jest zgodnie z zapotrzebowaniem repertuarowym.
            </p>
            <p>
              Zespół wykonuje muzykę XVII- i XVIII-wieczną, pochodzącą z różnych
              zakątków Europy. Zespół regularnie występuje z różnorodnymi
              programami w ramach wielu festiwali i cykli koncertowych w całej
              Polsce. W sierpniu 2021 roku miała miejsce pierwsza trasa
              koncertowa zespołu (woj. świętokrzyskie) z programem
              <strong> "Muzyka na chwilę".</strong> Zespół jest również
              organizatorem corocznego
              <strong>
                {" "}
                Wschodniego Festiwalu Muzyki Barokowej MUSICA DELL'ANIMA w
                Zamościu{" "}
              </strong>
              oraz cyklu koncertów
              <strong>
                {" "}
                "Barokowe Wieczory w Pałacu Kindermanna” w Łodzi.
              </strong>
            </p>
          </div>
        </div>
      </div>
      <div className={classes.cta}>
        <button className={classes.cta_btn}>
          {" "}
          <Link to="footer" smooth={true}>
            SKONTAKTUJ SIĘ Z NAMI
          </Link>
        </button>
      </div>
      <div className={classes.img_container}>
        <Image src={statue} alt="statue" className={classes.image} />
      </div>
    </section>
  );
};

export default About;
