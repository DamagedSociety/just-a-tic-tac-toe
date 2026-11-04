# Just a Tic Tac Toe 🤖❌

Un juego clásico de **Tres en Raya** desarrollado en **JavaScript puro**, HTML y CSS, optimizado para jugar de forma interactiva en el navegador. Incluye un oponente controlado por la máquina con inteligencia artificial básica (estrategia de esquinas, bloqueo de victorias y ataques ganadores), efectos de sonido nativos y un diseño limpio y modular.

---

## 🚀 Características

- **Jugador vs Máquina (IA):** Compite contra el ordenador, el cual analiza el tablero para intentar ganar, bloquear tus jugadas, y priorizar las esquinas al inicio de la partida.
- **Efectos de sonido interactivos:** Utiliza la API nativa de audio del navegador (`AudioContext`) para generar tonos cortos al hacer clic y un tono especial al ganar, sin necesidad de archivos externos.
- **Actualización visual fluida:** Sincronización precisa entre la interfaz y el estado lógico del juego antes de mostrar alertas o reiniciar.
- **Reinicio automático y manual:** El tablero se reinicia automáticamente tras finalizar una partida o mediante un botón de reinicio dedicado.

---

## 📂 Estructura del Código (JavaScript)

El script principal está organizado de manera modular y limpia en las siguientes secciones:

1. **Constantes y Variables de Estado:** Selección de elementos del DOM (`querySelectorAll`, `querySelector`), inicialización del tablero lógico (`board`), control de turnos (`currentPlayer`) y combinaciones ganadoras.
2. **Funciones del Sistema:** Lógica de audio (`playTone`), gestión de movimientos (`makeMove`), inteligencia artificial de la máquina (`computerMove` y `findBestMove`), validación de fin de partida (`checkGameEnd`) y reseteo (`restartGame`).
3. **Event Listeners:** Escuchadores de eventos para los clics en cada celda del tablero y en el botón de reinicio.

---

## 🛠️ Tecnologías Utilizadas

- **HTML5:** Estructura de las celdas del tablero y el botón de reinicio.
- **CSS3:** Estilos visuales del tablero y la interfaz.
- **JavaScript (ES6+):** Lógica del juego, manipulación del DOM, programación de eventos y generación de audio mediante Web Audio API.

---

## 🕹️ Cómo Jugar

1. Abre el archivo `index.html` en tu navegador web preferido.
2. Haz clic en cualquiera de las casillas vacías para colocar tu ficha (`X`).
3. La máquina (`O`) responderá automáticamente después de medio segundo.
4. Intenta alinear tres fichas en horizontal, vertical o diagonal antes de que la máquina lo haga.
