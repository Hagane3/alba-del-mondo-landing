import Image from "next/image";
import React, { useEffect, useState } from "react";

import REPERTOIRE from "@/data/REPERTOIRE";

import classes from "./Repertoire.module.css";

const Repertoire = () => {
  const [repertoireId, setRepertoireId] = useState<any>(0);
  const [singleRepertoire, setSingleRepertoire] = useState(REPERTOIRE[0]);

  useEffect(() => {
    setSingleRepertoire(REPERTOIRE[repertoireId]);
  }, [repertoireId]);

  const changeIdHandler = (event: React.MouseEvent) => {
    setRepertoireId(event.currentTarget.id);
  };

  return (
    <section id="repertoire" className={classes.root}>
      <div className={classes.head_container}>
        <h3 className={classes.heading}>REPERTUAR</h3>
        <div className={classes.image}>
          <Image
            src={singleRepertoire.image}
            alt="repertoire5"
            priority={true}
          />
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.sub_heading}>
          <h4>{singleRepertoire.title}</h4>
          <h5>{singleRepertoire.subtitle}</h5>
        </div>
        <div className={classes.content}>
          <p>{singleRepertoire.description}</p>
        </div>
        <div className={classes.switcher}>
          {REPERTOIRE.map((item) => {
            return (
              <div
                className={`${classes.dot} ${
                  item.id == repertoireId ? classes.active : ""
                }`}
                id={item.id}
                key={item.id}
                onClick={changeIdHandler}
              ></div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Repertoire;
