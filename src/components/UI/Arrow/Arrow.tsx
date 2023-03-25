import React from "react";
import classes from "./Arrow.module.css";

const Arrow = () => {
  return (
    <svg
      width="25"
      height="50"
      viewBox="0 0 25 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes.root}
    >
      <path
        d="M4.12501 45.6667L22.4583 25.0001L4.12501 4.33342"
        stroke="#202022"
        stroke-width="5"
        stroke-linecap="square"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Arrow;
