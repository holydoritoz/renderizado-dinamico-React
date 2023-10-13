import { useState } from 'react';
import PropTypes from 'prop-types'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Buscador({ onBuscar }) {
    const [term, setTerm] = useState('');

    const handleInputChange = (e) => {
    setTerm(e.target.value);
    onBuscar(e.target.value);
    };

    return (
    <InputGroup className="mb-3 mt-3 w-50 p-2">
    <InputGroup.Text id="basic-addon1">
            <i className="fa-solid fa-magnifying-glass"></i>
        </InputGroup.Text>
        <Form.Control
            type="text"
            className="form-control"
            placeholder="Buscar colaboradores"
            value={ term } 
            onChange={ handleInputChange }
        />
        </InputGroup>
);
}

Buscador.propTypes = {
    onBuscar: PropTypes.string
};

export default Buscador;
