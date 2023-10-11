import Swal from 'sweetalert2'

export const errorAlert = () => {
    Swal.fire({
        icon: 'error',
        text: 'Por favor completa todos los campos.',
        showConfirmButton: false,
        timer: 1500
        });
}

export const successAlert = () => {
    Swal.fire({
        icon: 'success',
        text: 'Formulario enviado exitosamente',
        showConfirmButton: false,
        timer: 1500
    })
}