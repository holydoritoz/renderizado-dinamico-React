import{ useState } from 'react';
import Listado from './components/Listado.jsx';
import Buscador from './components/Buscador.jsx';
import Formulario from './components/Formulario.jsx';
import { BaseColaboradores } from './data/BaseColaboradores';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <div className="container-fluid p-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="d-flex flex-column">
            <Buscador />
            <Listado colaboradores={colaboradores} handleDelete={handleDelete} />
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-2 text-center">
            <Formulario onAgregarColaborador={handleAgregarColaborador} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
