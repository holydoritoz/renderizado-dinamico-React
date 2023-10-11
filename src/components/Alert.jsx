import Swal from 'sweetalert2'

export const ErrorAlert = () => {
    Swal.fire({
        icon: 'error',
        text: 'Por favor completa todos los campos.',
        showConfirmButton: false,
        timer: 1500
        });
}

export const SuccessAlert = () => {
    Swal.fire({
        icon: 'success',
        text: 'Formulario enviado exitosamente',
        showConfirmButton: false,
        timer: 1500
    })
}