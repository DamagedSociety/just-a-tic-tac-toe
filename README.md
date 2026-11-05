# Just a Tic Tac Toe 🤖❌

## Sobre mí

¡Hola! Soy Julián López, desarrollador junior, en proceso de formación, donde estoy adquiriendo habilidades en tecnologías clave como HTML, CSS, JavaScript y TypeScript. Mi objetivo es dominar estas herramientas para convertirme en un desarrollador Full Stack aportando valor y soluciones en desarrollo de proyectos WEB.

## Descripción del proyecto

Just a Tic Tac Toe es un juego clásico interactivo concebido para que los usuarios puedan competir contra una máquina con inteligencia artificial básica, disfrutar de efectos de sonido nativos, visualizar estadísticas de partidas y reiniciar la partida de forma automática o manual. El proyecto partió de una lógica estructurada de dos jugadores humanos y fue refactorizado para integrar un oponente inteligente, priorización de movimientos, persistencia de datos y retroalimentación auditiva mediante la Web Audio API.

Hasta esta etapa del desarrollo, me he encargado de implementar las siguientes funcionalidades principales:

- **Estructuración y arquitectura modular del código:** Organización del script principal en secciones claras y mantenibles (constantes, funciones, lógica de estado y event listeners) para garantizar la legibilidad y escalabilidad del código.
- **Inteligencia Artificial del Oponente (`computerMove`):** Desarrollo de una jerarquía de prioridades algorítmica para la máquina (`"O"`), evaluando en orden de importancia: completar una línea para ganar, bloquear las jugadas de victoria del usuario (`"X"`), priorizar casillas en las esquinas al inicio del juego, o seleccionar celdas aleatorias disponibles de forma segura y sin duplicidad de turnos.
- **Validación de estados de victoria y empate:** Verificación mediante combinación de arreglos (`winningCombinations`) utilizando métodos como `.some()` y `.includes()`, bloqueando interacciones posteriores y controlando el flujo del juego.
- **Mensajes de estado en tiempo real:** Incorporación de una etiqueta dinámicamente controlada (`.game-message`) situada sobre el tablero, que muestra notificaciones claras de victoria o empate sin interrumpir la fluidez con modales intrusivos.
- **Sistema de puntajes y persistencia (`localStorage`):** Registro automático de estadísticas para partidas ganadas por el usuario, la máquina y los empates, asegurando que los datos se conserven entre sesiones de navegación mediante el uso de `localStorage`.
- **Efectos de sonido nativos (`Web Audio API`):** Generación de tonos programáticos (clics y sonidos de victoria) utilizando las interfaces nativas del navegador (`AudioContext`, `OscillatorNode`, `GainNode`) sin depender de archivos de audio externos propensos a bloqueos de CORS o políticas de autoplay.
- **Control de eventos y reseteo:** Gestión de clics condicionales para evitar movimientos fuera de turno o sobre casillas ocupadas, junto con una función integral (`restartGame`) que limpia tanto el estado en memoria como la interfaz visual.
- **Modo Oscuro con Persistencia:** Implementación de un selector de temas dinámico (`switch.css` / variables CSS) que permite alternar entre el modo normal y oscuro, manteniendo guardada la preferencia del usuario en el navegador.

---

## 📂 Estructura del Código (JavaScript)

El script principal está organizado de manera modular y limpia en las siguientes secciones:

1. **Constantes y Variables de Estado:** Selección de elementos del DOM, inicialización del tablero lógico, control de turnos y carga inicial del marcador estadístico desde `localStorage`.
2. **Funciones del Sistema:** Lógica de audio (`playTone`), gestión de movimientos (`makeMove`), inteligencia artificial de la máquina (`computerMove` y `findBestMove`), manejo y renderizado de puntajes (`saveScore` y `updateScoreDisplay`), visualización de alertas textuales (`showGameMessage`), validación de fin de partida (`checkGameEnd`) y reseteo seguro (`restartGame`).
3. **Event Listeners:** Escuchadores de eventos para los clics en cada celda del tablero y en el botón de reinicio manual.

## Tecnologías utilizadas

**JavaScript (ES6+):**

- **Manipulación avanzada del DOM:** Selección de elementos (`querySelector`, `querySelectorAll`), actualización de nodos de texto y gestión de interfaces visuales.
- **Programación Asíncrona:** Uso de temporizadores asíncronos (`setTimeout`) para pausar los turnos de la máquina y demorar transiciones de cierre o reseteo.
- **Almacenamiento Local (`localStorage`):** Persistencia de datos en el navegador para mantener guardado el historial de puntajes del usuario y de la máquina.
- **Gestión de eventos y propagación:** Asignación de escuchadores (`addEventListener`), validación de turnos y prevención de acciones no deseadas en casillas ocupadas o juegos inactivos.
- **Estructuras de datos y métodos avanzados:** Uso de arreglos multidimensionales, métodos funcionales (`map`, `filter`, `some`, `includes`), objetos de configuración y algoritmos de búsqueda y validación lógica.
- **Web Audio API:** Creación y control dinámico de osciladores de audio y nodos de ganancia para la síntesis de efectos sonoros interactivos.

**Git y GitHub (Control de versiones):**

- Control de cambios locales mediante `git init`, `add`, `commit` y sincronización con repositorios remotos en GitHub a través de ramas principales (`main`).

---

## 🕹️ Cómo Jugar

1. **Clona el repositorio:**
   Abre tu terminal y escribe el siguiente comando:

   ```bash
   git clone https://github.com/DamagedSociety/just-a-tic-tac-toe.git

   ```

2. Abre el archivo en tu navegador:
   Navega hasta la carpeta del proyecto y abre el archivo index.html en tu navegador web de preferencia, o utiliza una extensión como "Live Server" en tu editor de código para una experiencia automática.

3. El proyecto también se encuentra desplegado y listo para su visualización en vivo en el siguiente enlace: https://damagedsociety.github.io/just-a-tic-tac-toe/
