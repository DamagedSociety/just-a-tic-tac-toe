// ==========================================
// 1. CONSTANTES Y VARIABLES (ESTADO)
// ==========================================
const gameCells = document.querySelectorAll("[data-cell]");
const restartButton = document.querySelector(".restart-btn");
const messageElement = document.querySelector(".game-message");
let scores = JSON.parse(localStorage.getItem("tictactoe_scores")) || {
  X: 0,
  O: 0,
  ties: 0,
};

let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "O";
let isGameActive = true;

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // Filas
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // Columnas
  [0, 4, 8],
  [2, 4, 6], // Diagonales
];

// ==========================================
// 2. FUNCIONES
// ==========================================

// Función para generar sonidos nativos sin archivos externos
function playTone(frequency, duration, type = "sine") {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.type = type;
    oscillator.frequency.value = frequency;

    gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
      0.01,
      audioCtx.currentTime + duration,
    );

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.start();
    oscillator.stop(audioCtx.currentTime + duration);
  } catch (e) {
    console.log("Audio no soportado o bloqueado", e);
  }
}

// Función centralizada para actualizar el estado del tablero y el DOM
function makeMove(index, player) {
  board[index] = player;
  gameCells[index].textContent = player;
  playTone(400, 0.1, "triangle"); // Sonido de clic
}

// Lógica de la inteligencia artificial de la máquina
function computerMove() {
  if (!isGameActive) return;

  const emptyCells = board
    .map((val, idx) => (val === "" ? idx : null))
    .filter((val) => val !== null);

  if (emptyCells.length === 0) return;

  let chosenIndex = null;

  chosenIndex = findBestMove("O");

  if (chosenIndex === null) {
    chosenIndex = findBestMove("X");
  }

  if (chosenIndex === null) {
    const corners = [0, 2, 6, 8];
    const availableCorners = emptyCells.filter((index) =>
      corners.includes(index),
    );

    if (availableCorners.length > 0 && emptyCells.length >= 7) {
      chosenIndex =
        availableCorners[Math.floor(Math.random() * availableCorners.length)];
    }
  }

  if (chosenIndex === null) {
    chosenIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
  }

  makeMove(chosenIndex, "O");

  if (checkGameEnd()) return;

  currentPlayer = "X";
}

// Función auxiliar para detectar si un jugador está a 1 casilla de ganar
function findBestMove(player) {
  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    const values = [board[a], board[b], board[c]];

    const playerCount = values.filter((val) => val === player).length;
    const emptyCount = values.filter((val) => val === "").length;

    if (playerCount === 2 && emptyCount === 1) {
      if (board[a] === "") return a;
      if (board[b] === "") return b;
      if (board[c] === "") return c;
    }
  }
  return null;
}

// Función para actualizar los contadores en pantalla y guardarlos
function updateScoreDisplay() {
  const scoreXEl = document.getElementById("scoreX");
  const scoreOEl = document.getElementById("scoreO");
  const scoreTiesEl = document.getElementById("scoreTies");

  if (scoreXEl) scoreXEl.textContent = scores.X;
  if (scoreOEl) scoreOEl.textContent = scores.O;
  if (scoreTiesEl) scoreTiesEl.textContent = scores.ties;

  localStorage.setItem("tictactoe_scores", JSON.stringify(scores));
}

// Función para actualizar y guardar el puntaje
function saveScore(result) {
  if (result === "X") scores.X++;
  else if (result === "O") scores.O++;
  else if (result === "tie") scores.ties++;

  updateScoreDisplay(); // Actualiza el DOM y el localStorage de golpe
}

// Función para mostrar el mensaje en la etiqueta <p> y continuar el juego al hacer clic
function showGameMessage(message, callback) {
  if (messageElement) {
    messageElement.textContent = message;
  }

  setTimeout(() => {
    if (messageElement) {
      messageElement.textContent = "";
    }
    if (callback) callback();
  }, 2500);
}

// Función para verificar si hay victoria o empate
function checkGameEnd() {
  let roundWon = winningCombinations.some((combination) => {
    const [a, b, c] = combination;
    return board[a] && board[a] === board[b] && board[a] === board[c];
  });

  if (roundWon) {
    playTone(600, 0.3, "sine");
    isGameActive = false;

    const winner = currentPlayer;
    saveScore(winner);
    showGameMessage(`¡El jugador ${winner} ha ganado!`, () => {
      restartGame();
    });

    return true;
  }

  if (!board.includes("")) {
    isGameActive = false;

    saveScore("tie"); // <-- Corregido para guardar el empate inmediatamente
    showGameMessage("¡Empate!", () => {
      restartGame();
    });

    return true;
  }

  return false;
}

// Función para reiniciar el juego por completo
function restartGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "O"; // La máquina vuelve a iniciar
  isGameActive = true;

  if (messageElement) {
    messageElement.textContent = "";
  }

  gameCells.forEach((cell) => {
    cell.textContent = "";
  });

  // La máquina hace su primer movimiento tras el reseteo
  // Usamos una pequeña validación extra para evitar doble turno
  setTimeout(() => {
    if (
      isGameActive &&
      currentPlayer === "O" &&
      board.every((cell) => cell === "")
    ) {
      computerMove();
    }
  }, 500);
}

// ==========================================
// 3. LÓGICA PRINCIPAL Y EVENT LISTENERS
// ==========================================

// Pintar el marcador inicial al cargar la página por primera vez
updateScoreDisplay();

// Listener para los clics en las celdas del tablero (Jugador Humano)
gameCells.forEach((cell, index) => {
  cell.addEventListener("click", () => {
    if (currentPlayer !== "X" || board[index] !== "" || !isGameActive) return;

    makeMove(index, "X");

    if (checkGameEnd()) return;

    currentPlayer = "O";
    setTimeout(computerMove, 500);
  });
});

setTimeout(computerMove, 500);

// Listener para el botón de reinicio manual
restartButton.addEventListener("click", restartGame);
