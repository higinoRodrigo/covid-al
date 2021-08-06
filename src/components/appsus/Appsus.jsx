import styles from './appsus.module.scss';

import React from 'react';


export default function Appsus(props) {

  return (
    <div className={styles.container}>
      <div className={styles.textsContent}>
        <h1>CORONAVÍRUS SUS</h1>
        <h2>Fique informado</h2>
        <p>
          Faça uma auto-avaliação da sua saúde, 
          acompanhe dicas oficiais do Ministério da Saúde, 
          últimas notícias e encontre unidades de saúde próximas.
        </p>
        <div className={styles.containerLojas}>

          <div className={styles.contentLojas}>
            <img src="/img/android.svg" alt="Logo Play store Android" />
            <div className={styles.contentLojasText}>
              <span>DISPONÍVEL NO</span>
              <span>Google Play</span>
            </div>
          </div>

          <div className={styles.contentLojas}>
            <img src="/img/ios.svg" alt="Logo da maça da Apple" />
            <div className={styles.contentLojasText}>
              <span>DISPONÍVEL NA</span>
              <span>App Store</span>
            </div>
          </div>

          <div className={styles.contentLojas}>
            <img src="/img/web.svg" alt="Logo de um monitor" />
            <div className={styles.contentLojasText}>
              <span>DISPONÍVEL VIA</span>
              <span>Web App</span>
            </div>
          </div>

        </div>
      </div>

      <div className={styles.imgContent}>
        <img src="/img/cel.svg" alt="Mini apresentação do aplicativo do sus Coronavírus - SUS" />
      </div>
    </div>
  )
}