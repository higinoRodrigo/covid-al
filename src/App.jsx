import Nav from './components/nav/Nav.jsx'
import Cards from './components/cards/Card.jsx'
import CidadesBox from './components/cidadesBox/CidadesBox.jsx'
import Charts from './components/charts/Charts.jsx'
import Appsus from './components/appsus/Appsus.jsx'
import InfosUteis from './components/infosUteis/InfosUteis.jsx'

import './styles/global.scss'

function App() {

  return (
    <div id="container">
      <div id="containerNav">
        <Nav/>
      </div>

      <div id="content">

        <div className="sections section_1">
          <h1>Informativo Coronavírus</h1>
          <span>Atualizado em: 01/08/2021 18:50</span>
        </div>

        <div className="sections section_2">
          <Cards 
            titulo="Casos recuperados"
            dados="18.645.993"
          />
          <Cards 
            titulo="Casos confirmados"
            tituloAuxiliar1="Acumulado"
            dadosAuxiliar1="19.938.358"

            tituloAuxiliar2="Casos novos"
            dadosAuxiliar2="20.503"
          />
          <Cards titulo="Em acompanhamento" dados="735.531" />
          <Cards 
            titulo="Óbitos confirmados"
            tituloAuxiliar1="Acumulado"
            dadosAuxiliar1="556.834"

            tituloAuxiliar2="Casos novos"
            dadosAuxiliar2="20.503"

            tituloAuxiliar3="Letalidade"
            dadosAuxiliar3="2.8%"
          />
        </div>
      
        <div className="section_3">
          <CidadesBox></CidadesBox>
        </div>

        <div className="section_4">
          <Charts />
          <span className="fonteCharts">Fonte: Secretarias Municipais de Saúde. Alagoas, 2020</span>
        </div>

        <div className="section_5">
          <InfosUteis />
        </div>

        <div className="section_6">
          <Appsus />
        </div>

      </div>
    </div>

  );
}

export default App;
