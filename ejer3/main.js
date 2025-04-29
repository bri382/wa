const nombre = document.getElementById('nombre');
const edad = document.getElementById('edad');
const mensaje = document.getElementById('form-message');
const boton = document.getElementById('submit-btn');

function validarFormulario() {
  const nombreValue = nombre.value.trim();
  const edadValue = edad.value.trim();
  if (nombreValue === '' || edadValue === '') {
    mensaje.style.display = 'block';
    mensaje.innerText = 'Error, debe llenar todos los campos.';
    mensaje.style.color = 'red';
    return;
  }
  mensaje.style.display = 'block';
  mensaje.innerText = `Se guardó con éxito.`;
  mensaje.style.color = 'green';
  return;
}

boton.addEventListener('click', validarFormulario);