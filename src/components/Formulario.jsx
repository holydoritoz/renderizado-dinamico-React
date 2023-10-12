import{ useState } from 'react';
import PropTypes from 'prop-types'
import InputGroup from 'react-bootstrap/InputGroup';
import { v4 as uuidv4 } from 'uuid';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { errorAlert, successAlert } from '../helpers/sweetAlert.js';

function Formulario({ onAgregarColaborador }) {
    const [userName, setUserName] = useState('');
    const [userMail, setUserMail] = useState('');
    const [userAge, setUserAge] = useState('');
    const [userCargo, setUserCargo] = useState('');
    const [userPhone, setUserPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if(userName.trim() === '' || userMail ==='' || userAge ==="" || userCargo ==="" || userPhone ===""){
            errorAlert();

        } else {
            const nuevoColaborador = {
            // Generamos de forma aleatoria ID's para nuevos colaboradores.
                id:uuidv4(), 
                nombre: userName,
                correo: userMail,
                edad: userAge,
                cargo: userCargo,
                telefono: userPhone
            };
            onAgregarColaborador(nuevoColaborador);
            successAlert();
            }
    };

return (
<>
    <Form
    className="w-100"
    onSubmit={ handleSubmit }
    >
    <h1 className='p-2'>Agregar Colaborador</h1>
    <InputGroup className="mb-3 d-flex flex-column align-items-center gap-3">
        <Form.Control
        onChange={(e)=> setUserName(e.target.value)}
        placeholder="Nombre del colaborador"
        aria-label="Username"
        aria-describedby="basic-addon1"
        className="w-25"
        type="text"
        />
        <Form.Control
        onChange={(e)=> setUserMail(e.target.value)}
        placeholder="Email del colaborador"
        aria-label="Email"
        aria-describedby="basic-addon1"
        className="w-25"
        type="email"
        />
        <Form.Control
        onChange={(e)=> setUserAge(e.target.value)}
        placeholder="Edad del colaborador"
        aria-label="UserAge"
        aria-describedby="basic-addon1"
        className="w-25"
        type="text"
        />
        <Form.Control
        onChange={(e)=> setUserCargo(e.target.value)}
        placeholder="Cargo del colaborador"
        aria-label="UserCargo"
        aria-describedby="basic-addon1"
        className="w-25"
        type="text"
        />
        <Form.Control
        onChange={(e)=> setUserPhone(e.target.value)}
        placeholder="Teléfono del colaborador"
        aria-label="UserPhone"
        aria-describedby="basic-addon1"
        className="w-25"
        type="text"
        />
    </InputGroup>

    <Button
    variant="primary"
    type="submit"
    value="submit"
    ><i className="fa-solid fa-user-plus px-2"></i>
    Agregar colaborador</Button>
    </Form>
    </>
    )}

Formulario.propTypes = {
    onAgregarColaborador: PropTypes.func.isRequired
};

export default Formulario;