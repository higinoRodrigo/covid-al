import React from 'react';
// import Link from "react-dom";

import styles from './nav.module.scss'

export default function Nav() {
  return (
    <div className={styles.containerNav}>
      <div className={styles.logo}>
        <h1>CORONAVÍRUS</h1>
        <span className={styles.barraRed}>/</span>
        <span className={styles.barraAzul}>/</span>
        <span>ALAGOAS</span>
      </div>
      <div className={styles.optionsNav}>
        <i>Visão Geral</i>
        <i>Sobre</i>
      </div>
    </div>
  )
}