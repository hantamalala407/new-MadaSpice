 // ---- Script pour activer le menu sur mobile ----
    const toggle = document.getElementById('toggle');
    const menu = document.getElementById('menu');

    toggle.addEventListener('click', () => {
      menu.classList.toggle('active');
    });