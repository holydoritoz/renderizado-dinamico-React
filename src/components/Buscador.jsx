import PropTypes from 'prop-types'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Buscador({ searchTerm, handleInputChange }) {
    return (
        <InputGroup className="mb-3 w-25">
            <Form.Control
                placeholder="Busca un colaborador"
                aria-label="Busca un colaborador"
                aria-describedby="basic-addon1"
                value={searchTerm}
                onChange={handleInputChange}
            />
        </InputGroup>
    );
}

Buscador.propTypes = {
searchTerm: PropTypes.string,
handleInputChange: PropTypes.func,
}

export default Buscador;
