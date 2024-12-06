// Configuración del PIN correcto
const correctPin = "1234"; // Cambia este valor al PIN que desees

// Capturamos el formulario y los elementos necesarios
const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

// Evento para validar el PIN
loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevenimos el envío del formulario

  // Obtenemos el valor del PIN ingresado
  const enteredPin = document.getElementById("pin").value;

  // Validamos el PIN
  if (enteredPin === correctPin) {
    message.style.color = "green";
    message.textContent = "¡Acceso concedido!";
    // Redirigimos a la página del formulario
    setTimeout(() => {
      window.location.href = "form.html"; // Redirección
    }, 1000);
  } else {
    message.style.color = "red";
    message.textContent = "PIN incorrecto. Inténtalo de nuevo.";
  }

  // Limpiar el campo del PIN
  loginForm.reset();
});
