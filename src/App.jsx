// import { BaseColaboradores } from './data/BaseColaboradores.jsx';
import Listado from './components/Listado.jsx'
import Buscador from './components/Buscador.jsx'
import Formulario from './components/Formulario.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  return (
    <>
    <Formulario />
    <Buscador />
    <Listado />
    </>
  )
}

export default App
