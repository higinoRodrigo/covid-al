import React from 'react';

import { RiCloseFill } from 'react-icons/ri'

import styles from './cidadesBox.module.scss'

export default function CidadesBox() {
  return (
    <div className={styles.containerCity}>

      <div className={styles.headerCity}>
        <h1>Cidades Alagoanas e seus casos</h1>

        <div className={styles.contentSearch}>
          <label htmlFor="pesquisarCidade" className="sr-only">Pesquisar cidade</label>
          <input type="text" id="pesquisarCidade" placeholder="Pesquisar cidade" />
          <div className={styles.closeSearch}><RiCloseFill color="#a0a0a0" size="1.5em"/></div>
        </div>

      </div>

      <div className={styles.main}>

        <div className={styles.infoMobile}>
          <span id="v_hidden">Arraste para o lado &rarr;</span>
        </div>

        <div className={styles.contentTable}>
          <table>
            <thead>
              <tr>
                <th>Cidade</th>
                <th>Casos novos</th>
                <th>Recuperados</th>
                <th>Óbitos</th>
                <th>Casos total</th>
                <th>Atualizado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Girau do Ponciano</td>
                <td>154</td>
                <td>1.548</td>
                <td>805</td>
                <td>3.548</td>
                <td>03/08/2021 17:48</td>
              </tr>
              <tr>
                <td>São miguel dos milagres</td>
                <td>154</td>
                <td>1.548</td>
                <td>805</td>
                <td>3.548</td>
                <td>03/08/2021 17:48</td>
              </tr>
              <tr>
                <td>São miguel dos milagres</td>
                <td>154</td>
                <td>1.548</td>
                <td>805</td>
                <td>3.548</td>
                <td>03/08/2021 17:48</td>
              </tr>
              <tr>
                <td>São miguel dos milagres</td>
                <td>154</td>
                <td>1.548</td>
                <td>805</td>
                <td>3.548</td>
                <td>03/08/2021 17:48</td>
              </tr>
              <tr>
                <td>São miguel dos milagres</td>
                <td>154</td>
                <td>1.548</td>
                <td>805</td>
                <td>3.548</td>
                <td>03/08/2021 17:48</td>
              </tr>
              <tr>
                <td>São miguel dos milagres</td>
                <td>154</td>
                <td>1.548</td>
                <td>805</td>
                <td>3.548</td>
                <td>03/08/2021 17:48</td>
              </tr>
              <tr>
                <td>São miguel dos milagres</td>
                <td>154</td>
                <td>1.548</td>
                <td>805</td>
                <td>3.548</td>
                <td>03/08/2021 17:48</td>
              </tr>
              <tr>
                <td>São miguel dos milagres</td>
                <td>154</td>
                <td>1.548</td>
                <td>805</td>
                <td>3.548</td>
                <td>03/08/2021 17:48</td>
              </tr>
              <tr>
                <td>São miguel dos milagres</td>
                <td>154</td>
                <td>1.548</td>
                <td>805</td>
                <td>3.548</td>
                <td>03/08/2021 17:48</td>
              </tr>
              <tr>
                <td>São miguel dos milagres</td>
                <td>154</td>
                <td>1.548</td>
                <td>805</td>
                <td>3.548</td>
                <td>03/08/2021 17:48</td>
              </tr>
              <tr>
                <td>São miguel dos milagres</td>
                <td>154</td>
                <td>1.548</td>
                <td>805</td>
                <td>3.548</td>
                <td>03/08/2021 17:48</td>
              </tr>
              <tr>
                <td>São miguel dos milagres</td>
                <td>154</td>
                <td>1.548</td>
                <td>805</td>
                <td>3.548</td>
                <td>03/08/2021 17:48</td>
              </tr>
              <tr>
                <td>São miguel dos milagres</td>
                <td>154</td>
                <td>1.548</td>
                <td>805</td>
                <td>3.548</td>
                <td>03/08/2021 17:48</td>
              </tr>
              <tr>
                <td>São miguel dos milagres</td>
                <td>154</td>
                <td>1.548</td>
                <td>805</td>
                <td>3.548</td>
                <td>03/08/2021 17:48</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}