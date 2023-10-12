import PropTypes from 'prop-types'
import Table from 'react-bootstrap/Table';

function Listado({ colaboradores, handleDelete }) {
    const btnStyle = {
    background: "none",
    border: "none",
    padding: "0",
    font: "inherit",
    color: "gray",
    cursor: "pointer",
    outline: "inherit"
    };

    return (
    <Table striped bordered hover>
        <thead>
        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Teléfono</th>
            <th>Acciones</th>
        </tr>
        </thead>
        <tbody>
        {colaboradores.map((colaborador, index) => (
            <tr key={colaborador.id}>
            <td>{colaborador.id}</td>
            <td>{colaborador.nombre}</td>
            <td>{colaborador.correo}</td>
            <td>{colaborador.edad}</td>
            <td>{colaborador.cargo}</td>
            <td>{colaborador.telefono}</td>
            <td>
                <button
                onClick={() => handleDelete(index)}
                style={btnStyle}
                >
                <i className="fa-solid fa-trash-can"></i>
                </button>
            </td>
            </tr>
        ))}
        </tbody>
    </Table>
    );
}

Listado.propTypes = {
    colaboradores: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.number.isRequired,
        nombre: PropTypes.string.isRequired,
        correo: PropTypes.string.isRequired,
        edad: PropTypes.number.isRequired,
        cargo: PropTypes.string.isRequired,
        telefono: PropTypes.string.isRequired
    })
    ).isRequired,
    handleDelete: PropTypes.func.isRequired
};

export default Listado;