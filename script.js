function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  // Light/Dark mode toggle
document.addEventListener("DOMContentLoaded", () => { // Ensure DOM is loaded
  const themeToggle = document.getElementById("theme-toggle"); // Find the button
  const body = document.body;

  // Check for saved theme preference in local storage
  if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-theme"); // Apply light theme if previously set
  }

  // Toggle theme on button click
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("light-theme"); // Toggle theme class

    // Save preference in local storage
    if (body.classList.contains("light-theme")) {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }
  });
});
  