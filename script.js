function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("light");
  }
  
  const darkModeButton = document.querySelector('#dark-mode-toggle');
  if (darkModeButton) {
    darkModeButton.addEventListener('click', toggleDarkMode);
  }
  