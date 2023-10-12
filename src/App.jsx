import{ useState } from 'react';
import Listado from './components/Listado.jsx';
import Buscador from './components/Buscador.jsx';
import Formulario from './components/Formulario.jsx';
import { BaseColaboradores } from './data/BaseColaboradores';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [colaboradores, setColaboradores] = useState([...BaseColaboradores]);

  const handleDelete = (index) => {
    const updatedColaboradores = [...colaboradores];
    updatedColaboradores.splice(index, 1);
    setColaboradores(updatedColaboradores);
  };

  const handleAgregarColaborador = (nuevoColaborador) => {
    setColaboradores([...colaboradores, nuevoColaborador]);
  };

  return (
    <div className="container d-flex justify-content-center">
      <div className="d-flex flex-column">
        <Buscador />
        <Listado colaboradores={colaboradores} handleDelete={handleDelete}/>
      </div>
      <div className='p-2'>
      <Formulario onAgregarColaborador={handleAgregarColaborador}/>
      </div>
    </div>
  );
}

export default App;
