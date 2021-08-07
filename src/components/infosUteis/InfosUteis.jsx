import React, { useState } from 'react'

import styles from './infosUteis.module.scss'
import { GrInfo } from 'react-icons/gr'


export default function InfosUteis() {

  const [active, setActive] = useState(false)
  const [active2, setActive2] = useState(false)
  const [active3, setActive3] = useState(false)
  const [active4, setActive4] = useState(false)
  const [active5, setActive5] = useState(false)

  return (
    <div className={styles.container}>
      <div onClick={() => setActive(!active)} className={styles.content}>

        <div className={styles.title}>
          <GrInfo className="lampada" color="#000" size="1em" />
          <h1>O QUE É A COVID-19?</h1>
        </div>
        <div id={styles.main} className={active ? 'conteudoInfosCovid active' : 'conteudoInfosCovid'}>
          <p>
            Covid-19 é a doença causada pelo novo coronavírus, batizado de
            <strong> SARS-CoV-2</strong>. Os coronavírus fazem parte de uma
            família de vírus que causam infecções respiratórias e intestinais.
          </p>
        </div>
        
      </div>

      <div onClick={() => setActive2(!active2)} className={styles.content}>
        <div className={styles.title}>
          <GrInfo className="lampada" color="#000" size="1em" />
          <h1>QUAIS SÃO OS SINTOMAS DA COVID-19?</h1>
        </div>
        <div id={styles.main} className={active2 ? 'conteudoInfosCovid active' : 'conteudoInfosCovid'}>
          <div>
            <p>
              Os sinais da Covid-19 são principalmente respiratórios,
              semelhantes aos de um resfriado, podendo causar infecções do trato
              respiratório inferior, como as pneumonias. São considerados como
              sintomas:
              <strong>
                {' '}
                febre, tosse seca, dificuldade para respirar, dores no corpo,
                dor de cabeça, diarreia, perda do olfato e do paladar, coriza
                e/ou dor de garganta
              </strong>
              .
            </p>
            <p>
              No entanto, o novo coronavírus<strong> SARS-CoV-2</strong> ainda
              precisa de mais estudos e investigações para caracterizar melhor
              os sintomas da doença.
            </p>
            <br />
            <p>Os principais sintomas conhecidos até o momento são:</p>
          </div>
          <div className={styles.containerSintomas}>
            <div>
              <img src="/img/tosse.png" alt="Boneco tossindo" />
              <span>Febre</span>
            </div>
            <div>
              <img src="/img/febre.png" alt="Boneco com febre" />
              <span>Tosse seca</span>
            </div>
            <div>
              <img
                src="/img/respirar.png"
                alt="Boneco com Dificuldade para respirar"
              />
              <span>Dificuldade para respirar</span>
            </div>
          </div>
        </div>
      </div>

      <div onClick={() => setActive3(!active3)} className={styles.content}>
        <div className={styles.title}>
          <GrInfo className="lampada" color="#000" size="1em" />
          <h1>COMO O CORONAVÍRUS É TRANSMITIDO?</h1>
        </div>
        <div id={styles.main} className={active3 ? 'conteudoInfosCovid active' : 'conteudoInfosCovid'}>
          <p>
            A disseminação acontece de pessoa para pessoa, ou seja, a
            contaminação se dá por gotículas respiratórias ou contato. Qualquer
            pessoa que tenha contato próximo{' '}
            <strong>a menos de 2 metros</strong> com alguém com sintomas
            respiratórios está em risco de ser exposta à infecção, bem como se
            entrar em contato com superfícies que foram contaminadas por alguém
            infectado.
          </p>
        </div>
      </div>

      <div onClick={() => setActive4(!active4)} className={styles.content}>
        <div className={styles.title}>
          <GrInfo className="lampada" color="#000" size="1em" />
          <h1>COMO ME PREVENIR?</h1>
        </div>
        <div id={styles.main} className={active4 ? 'conteudoInfosCovid active' : 'conteudoInfosCovid'}>
          <p>
            <strong>População em Geral</strong>
            <br />
            - Lavar as mãos frequentemente com água e sabão por pelo menos 20
            segundos, respeitando os 5 momentos de higienização.
            <br />- Se não houver água e sabão, usar um desinfetante para as
            mãos à base de álcool{' '}
            <strong>
              {'('}álcool em gel{')'}
            </strong>
            .
            <br />
            - Evitar tocar nos olhos, nariz e boca com as mãos não lavadas.
            <br />
            - Evitar contato próximo com pessoas doentes.
            <br />
            - Ficar em casa sempre que possível e, principalmente, quando
            estiver doente.
            <br />
            - Se precisar sair de casa, use máscara. A recomendação consta em
            decreto do Governo do Estado e vale para toda a população, mesmo
            para quem não apresenta sintomas gripais.
            <br />- Cobrir boca e nariz ao tossir ou espirrar com um lenço de
            papel e jogar imediatamente no lixo. Se não tiver lenço, usar o
            braço{' '}
            <strong>
              {'('}dobra do cotovelo{')'}
            </strong>{' '}
            para cobrir a boca e nariz, nunca usar as mãos.
            <br />- Limpar e desinfetar objetos e superfícies tocados com
            frequência, como celular, controle remoto, maçanetas, etc.
          </p>
          <br />
          <p>
            <strong>Profissionais de Saúde</strong>
            <br />É necessário utilizar medidas de precaução padrão, de contato
            e de gotículas {'('}máscara cirúrgica, luvas, avental não estéril e
            óculos de proteção{')'}. Para a realização de procedimentos que
            gerem aerossolização de secreções respiratórias como intubação,
            aspiração de vias aéreas ou indução de escarro, deverá ser utilizado
            precaução por aerossóis, com uso de máscara N95.
          </p>
        </div>
      </div>

      <div onClick={() => setActive5(!active5)} className={styles.content}>
        <div className={styles.title}>
          <GrInfo className="lampada" color="#000" size="1em" />
          <h1>COMO É FEITO O TRATAMENTO DA COVID-19?</h1>
        </div>
        <div id={styles.main} className={active5 ? 'conteudoInfosCovid active' : 'conteudoInfosCovid'}>
          <p>
            Não existe tratamento específico para infecções causadas por
            coronavírus humano. No caso de contaminação por Covid-19 é indicado
            repouso e consumo de bastante água, isolamento interno dos demais
            membros da família e o uso de remédios conforme prescrição médica
            para evitar agravamento do quadro. <br /> Para pacientes
            hospitalizados com pneumonia causada pelo coronavírus, o manejo
            clínico deve seguir o protocolo de cada instituição.
          </p>
        </div>
      </div>
    </div>
  )
}
