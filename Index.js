document.addEventListener("DOMContentLoaded", function () {
  const inputDisplay = document.getElementById("entrada");
  const resultDisplay = document.getElementById("resultado");
  const buttons = document.querySelectorAll(".calculadora button");
  let expression = "";

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.id === "limpiar") {
        expression = "";
        updateInputDisplay("0");
      } else if (button.id === "calcular") {
        try {
          const result = eval(expression);
          updateResultDisplay(result);
          updateStorage(result);
          expression = result.toString();
          updateInputDisplay(expression);
        } catch (error) {
          updateResultDisplay("Error");
          expression = "";
        }
      } else {
        expression += button.textContent;
        updateInputDisplay(expression);
      }
    });
  });

  const darkModeToggle = document.getElementById("alternarModoOscuro"); // Corregir el identificador aquí
  darkModeToggle.addEventListener("click", toggleDarkMode);

  function toggleDarkMode() {
    document.body.classList.toggle("modo-oscuro");
  }

  function updateInputDisplay(value) {
    inputDisplay.textContent = value;
  }

  function updateResultDisplay(value) {
    resultDisplay.textContent = "Último Resultado: " + value;
  }

  function updateStorage(result) {
    localStorage.setItem("lastResult", result);
  }

  function loadLastResult() {
    const lastResult = localStorage.getItem("lastResult");
    updateResultDisplay(lastResult ? lastResult : "0");
  }

  loadLastResult();
});
