// ===== MENÚ HAMBURGUESA =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// ===== CERRAR MENÚ AL HACER CLIC EN UN ENLACE (opcional) =====
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
    });
});

// ===== VALIDACIÓN BÁSICA DEL FORMULARIO =====
const form = document.getElementById('registroForm');
if (form) {
    form.addEventListener('submit', function(e) {
        const password = document.getElementById('password').value;
        if (password.length < 6) {
            e.preventDefault();
            alert('La contraseña debe tener al menos 6 caracteres.');
        }
    });
}

// ===== MENSAJE DE BIENVENIDA EN CONSOLA (para que sepas que funciona) =====
console.log('🚀 EL 10 WEB - Bienvenido a tu sitio personal');