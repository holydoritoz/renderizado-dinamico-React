import { useState } from 'react';
import PropTypes from 'prop-types'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Buscador({ colaboradores, setColaboradores, filterColaboradores }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setColaboradores(filterColaboradores(colaboradores, searchTerm));
    };

    return (
    <Form onSubmit={handleSubmit}>
    <InputGroup className="mb-3 mt-3 w-50 p-2">
    <InputGroup.Text id="basic-addon1">
            <i className="fa-solid fa-magnifying-glass"></i>
        </InputGroup.Text>
        <Form.Control
            type="text"
            placeholder="Buscar colaboradores"
            value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)} // Puedes usar setSearchTerm directamente aquí
        />
        </InputGroup>
    </Form>
);
}

Buscador.propTypes = {
    colaboradores: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            nombre: PropTypes.string.isRequired,
            correo: PropTypes.string.isRequired,
            edad: PropTypes.number.isRequired,
            cargo: PropTypes.string.isRequired,
            telefono: PropTypes.string.isRequired,
        })
    ).isRequired,
    setColaboradores: PropTypes.func.isRequired,
    filterColaboradores: PropTypes.func.isRequired,
};

export default Buscador;
