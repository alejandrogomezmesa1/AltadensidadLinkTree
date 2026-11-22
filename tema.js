// Tema claro/oscuro y año del footer. Se carga en el <head> para aplicarlo antes de pintar.
(function () {
  var html = document.documentElement;
  var CLAVE = 'altadensidad_tema';

  function aplicar(claro) {
    html.classList.toggle('modo-claro', claro);
    html.setAttribute('data-theme', claro ? 'light' : 'dark');
  }

  var claro = false;
  try { claro = localStorage.getItem(CLAVE) === 'claro'; } catch (e) { /* sin almacenamiento */ }
  aplicar(claro);

  document.addEventListener('DOMContentLoaded', function () {
    // Año del footer en hora de Colombia (UTC-5 todo el año). El del HTML queda de respaldo sin JS.
    var anio = document.getElementById('anio');
    if (anio) anio.textContent = new Date(Date.now() - 5 * 60 * 60 * 1000).getUTCFullYear();

    var boton = document.getElementById('tema');
    function rotular() {
      var texto = claro ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro';
      boton.setAttribute('aria-label', texto);
      boton.title = texto;
    }
    rotular();
    boton.hidden = false;
    boton.addEventListener('click', function () {
      claro = !claro;
      aplicar(claro);
      rotular();
      try { localStorage.setItem(CLAVE, claro ? 'claro' : 'oscuro'); } catch (e) { /* sin almacenamiento */ }
    });
  });
})();
