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

          <a target='_blank' rel="noreferrer" href="https://play.google.com/store/apps/details?id=br.gov.datasus.guardioes&hl=pt-br">
            <div className={styles.contentLojas}>
              <img src="/img/android.svg" alt="Logo Play store Android" />
              <div className={styles.contentLojasText}>
                <span>DISPONÍVEL NO</span>
                <span>Google Play</span>
              </div>
            </div>
          </a>

          <a target='_blank' rel="noreferrer" href="https://apps.apple.com/br/app/coronav%C3%ADrus-sus/id1408008382">
            <div className={styles.contentLojas}>
              <img src="/img/ios.svg" alt="Logo da maça da Apple" />
              <div className={styles.contentLojasText}>
                <span>DISPONÍVEL NA</span>
                <span>App Store</span>
              </div>
            </div>
          </a>

          <a target='_blank' rel="noreferrer" href="https://coronavirus-app.saude.gov.br/app/inicio">
            <div className={styles.contentLojas}>
              <img src="/img/web.svg" alt="Logo de um monitor" />
              <div className={styles.contentLojasText}>
                <span>DISPONÍVEL VIA</span>
                <span>Web App</span>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className={styles.imgContent}>
        <img src="/img/cel.svg" alt="Mini apresentação do aplicativo do sus Coronavírus - SUS" />
      </div>
    </div>
  )
}