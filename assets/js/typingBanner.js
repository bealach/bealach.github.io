document.addEventListener("DOMContentLoaded", function() {
    const text = "Empresa de administración de condominios";
    const typingElement = document.getElementById('twa');
    let index = 0;

    function type() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 50); // Adjust typing speed here
        }
    }

    type();
});
