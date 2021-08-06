import React from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2'

import styles from './charts.module.scss';



export default function Charts(props) {


  return (
    <div className={styles.containerCharts}>

      <div className={styles.containerChartGraphics}>
        <div className={styles.content}>
          <h1>Casos novos de COVID-19 por data de notificação</h1>
          <div className={styles.chartsBox}>
            <Line
              data={{
                labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai' ,'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
                datasets: [
                  {
                    label: 'Confirmados últimos meses',
                    data: [65, 59, 80, 81, 56, 55, 40, 26, 12, 48, 65, 28],
                    fill: false,
                    borderColor: '#8fccff',
                    tension: 0.1
                  }
                ],

              }}
            />
          </div>
        </div>

        <div className={styles.content}>
          <h1>Relação recuperados/óbitos de COVID-19 por data de notificação</h1>
          <div className={styles.chartsBox}>
            <Bar 
              data={{
                labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai' ,'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
                datasets: [
                  {
                    label: 'Recuperados',
                    data: [65, 59, 80, 81, 56, 55, 40, 25, 12, 48, 65, 28],
                    backgroundColor: '#8fccff',
                  },
                  {
                    label: 'Óbitos',
                    data: [25, 15, 12, 8, 16, 6, 9, 11, 2, 8, 5, 8],
                    backgroundColor: '#ffc7c7',
                  }
                ],

              }}
            />
          </div>
        </div>
      </div>


      <div className={styles.containerChartGraphics}>

        <div className={styles.contentPie}>
          <h1>Relação dos Leitos COVID-19 por data de notificação</h1>
          <div className={styles.chartsBoxPie}>
            <Pie
              data={{
                labels: ['Total de Leitos', 'Total ocupados'],
                datasets: [
                  {
                    label: 'Relação dos Leitos',
                    data: [1488, 215],
                    backgroundColor: [
                      '#8fccff',
                      '#ffc7c7'
                    ],
                    hoverOffset: 4
                  }
                ],

              }}
            />
          </div>
        </div>

        <div className={styles.contentPie}>
          <h1>Vacinados com 2 doses COVID-19 por data de notificação</h1>
          <div className={styles.chartsBoxPie}>
            <Pie
              data={{
                labels: ['População Total', 'População Vacinada'],
                datasets: [
                  {
                    label: 'População Vacinada',
                    data: [3320215, 1320215],
                    backgroundColor: [
                      '#ffc7c7',
                      '#8fccff'
                    ],
                    hoverOffset: 4
                  }
                ],

              }}
            />
          </div>
        </div>



      </div>


    </div>
  )
}