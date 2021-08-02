import styles from './card.module.scss';

import React from 'react';


export default function Cards(props) {

  return (
    <div className={styles.card}>

      <div className={styles.titulo}>
        <h1>{props.titulo}</h1>
      </div>

      <div className={styles.conteudo}>

        <span>{props.dados}</span>

        <div className={styles.auxiliares}>
          <span>{props.dadosAuxiliar1}</span>
          <span>{props.tituloAuxiliar1}</span>
        </div>
        <div className={styles.auxiliares}>
          <span>{props.dadosAuxiliar2}</span>
          <span>{props.tituloAuxiliar2}</span>
        </div>
        <div className={styles.auxiliares}>
          <span>{props.dadosAuxiliar3}</span>
          <span>{props.tituloAuxiliar3}</span>
        </div>
        <div className={styles.auxiliares}>
          <span>{props.dadosAuxiliar4}</span>
          <span>{props.tituloAuxiliar4}</span>
        </div>

        {props.children}
      </div>

    </div>
  )
}