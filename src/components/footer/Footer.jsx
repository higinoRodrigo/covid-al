import styles from './footer.module.scss';

import { RiVirusLine } from 'react-icons/ri'

import React from 'react';


export default function Footer(props) {

  return (
    <div className={styles.container}>
      <a target='_blank' rel="noreferrer" href="https://molde.dev">
        <p>Molde Development 2021 <RiVirusLine/></p>
      </a>
    </div>
  )
}