import{ useState } from 'react';
import Listado from './components/Listado.jsx';
import Buscador from './components/Buscador.jsx';
import Formulario from './components/Formulario.jsx';
import Alert from './components/Alert.jsx';
import { BaseColaboradores } from './data/BaseColaboradores';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [colaboradores, setColaboradores] = useState([...BaseColaboradores]);
  const [colaboradoresFiltrados, setColaboradoresFiltrados] = useState([...BaseColaboradores]);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleError = (errorForm) => {
    setError(errorForm)
  }

  const handleDelete = (index) => {
    const updatedColaboradores = [...colaboradores];
    updatedColaboradores.splice(index, 1);
    setColaboradores(updatedColaboradores);
    setColaboradoresFiltrados(updatedColaboradores); // Actualiza colaboradoresFiltrados después de la eliminación

  };

  const handleAgregarColaborador = (nuevoColaborador) => {
    setColaboradores([...colaboradores, nuevoColaborador]);
    setColaboradoresFiltrados([...colaboradores, nuevoColaborador]); // Actualiza colaboradoresFiltrados después de la adición
    setSuccess(true)
  };
  
  const handleBuscar = (term) => {
    const filteredColaboradores = colaboradores.filter((colaborador) => {
      return colaborador.nombre.toLowerCase().includes(term.toLowerCase());
    });
    setColaboradoresFiltrados(filteredColaboradores);
  };

  return (
    <div className="container-fluid p-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="d-flex flex-column">
            <Buscador
            onBuscar={ handleBuscar }
            />
            <Listado colaboradores={colaboradoresFiltrados} handleDelete={handleDelete} />
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-2 text-center">
            <Formulario onAgregarColaborador={handleAgregarColaborador} handleError={handleError} />
                {
                  error &&        
                  <Alert
                    color = 'danger'
                    message= 'Debes completar todos los campos'
                  />
                }

                {
                  success &&        
                  <Alert
                    color = 'success'
                    message= 'Datos enviados correctamente!'
                  />
                }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
