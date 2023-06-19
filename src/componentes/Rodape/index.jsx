import React from "react";
import facebook from "./facebook.svg";
import twitter from "./twitter.svg";
import instagram from "./instagram.svg";
import styles from "./Rodape.module.scss";

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <div className={styles.rodape__icones}>
        <a
          href="https://www.facebook.com/gabriel.costaferreira/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebook} alt="Facebook" />
        </a>
        <a
          href="https://twitter.com/backcost"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitter} alt="Twitter" />
        </a>
        <a
          href="https://www.instagram.com/backcost"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="Instagram" />
        </a>
      </div>
      <p>Desenvolvido por Gabriel Costa</p>
    </footer>
  );
}