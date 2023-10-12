import Swal from 'sweetalert2'

export const errorAlert  = () => {
    Swal.fire({
        title: 'Error',
        text: 'Completa todos los campos',
        icon: 'error',
        showCancelButton: false,
        });
}

export const successAlert  = async ( message = 'Enviado!') => {
    Swal.fire({
        position: 'top',
        icon: 'success',
        title: message,
        text: 'Datos enviados exitosamente',
        showConfirmButton: false,
        timer: 1500
    })
}