import React from 'react';

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
        <a href="#geral" className={styles.navLink}>Visão Geral</a>
        <a href="#perguntas" className={styles.navLink}>Perguntas Frequentes</a>
      </div>
    </div>
  )
}