import React from "react";
import styles from "./Footer.module.css"

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className={styles.footer}>
      <p>
        <span>React + TS Todo</span>@2022
      </p>
    </footer>
  );
};

export default Footer;
