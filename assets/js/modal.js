// Obtener todos los botones que abren modales
const openModalBtns = document.querySelectorAll('.open-modal-btn');

// Obtener todos los botones de cierre
const closeModalBtns = document.querySelectorAll('.close-btn, .close-modal-btn');

// Obtener todos los modales
const modals = document.querySelectorAll('.modal');

// Función para abrir un modal y cambiar el texto
openModalBtns.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');  // Obtener el id del modal
        const modalText = button.getAttribute('data-text'); // Obtener el texto personalizado

        // Mostrar el modal correspondiente
        const modal = document.getElementById(modalId);

        // Si quieres cambiar dinámicamente el contenido de la lista
        // puedes hacerlo aquí, pero para ahora solo mostramos el modal.
        
        modal.classList.add('show');  // Mostrar el modal
    });
});

// Cerrar el modal
closeModalBtns.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');  // Encontrar el modal padre
        modal.classList.remove('show');  // Ocultar el modal
    });
});

// Cerrar el modal cuando se haga clic fuera del contenido
window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('show');  // Ocultar el modal si se hace clic fuera
    }
});
