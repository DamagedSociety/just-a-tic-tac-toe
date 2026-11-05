const toggleSwitch = document.querySelector("#theme-toggle");
const bodyElement = document.querySelector(".body");

// Leer preferencia anterior del usuario
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
  bodyElement.classList.add("dark-mode");
  if (toggleSwitch) toggleSwitch.checked = true;
}

// Escuchar cambios en el interruptor
if (toggleSwitch) {
  toggleSwitch.addEventListener("change", function () {
    if (this.checked) {
      bodyElement.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      bodyElement.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  });
}

// ... (Aquí continúa el resto de tu lógica existente de TicTacToe)
