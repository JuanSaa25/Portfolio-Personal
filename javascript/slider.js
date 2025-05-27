window.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById("slider-track");
    const proyectos = Array.from(track.children);

    proyectos.forEach((proyecto) => {
      const clon = proyecto.cloneNode(true);
      track.appendChild(clon);
    });
  });