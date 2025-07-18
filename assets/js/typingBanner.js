document.addEventListener("DOMContentLoaded", function () {
    const texts = [
      "Evaluación de proyectos de inversión",
      "Consultoría en proyectos inmobiliarios",
      "Administración de condominios"
    ];
    const typingElement = document.querySelector("#twa .text");
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
  
    function type() {
      const currentText = texts[textIndex];
  
      typingElement.textContent = currentText.substring(0, charIndex);
  
      if (!isDeleting) {
        if (charIndex < currentText.length) {
          charIndex++;
        } else {
          isDeleting = true;
          setTimeout(type, 2000); // pausa antes de borrar
          return;
        }
      } else {
        if (charIndex > 0) {
          charIndex--;
        } else {
          isDeleting = false;
          textIndex = (textIndex + 1) % texts.length;
        }
      }
  
      setTimeout(type, isDeleting ? 30 : 70);
    }
  
    type();
  });
  