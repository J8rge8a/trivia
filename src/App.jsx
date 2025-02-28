// src/App.jsx
import { useState } from "react";
import Confetti from "react-confetti";
import "./styles.css";

// Lista de 40 preguntas posibles relacionadas con el episodio del cerebro
const allQuestions = [
  { question: "¿Qué parte del cuerpo es como el 'jefe' que controla todo?", options: ["El corazón", "El estómago", "El cerebro", "Los pulmones"], correct: 2 },
  { question: "¿Cómo se llaman las células especiales que llevan mensajes en el cerebro?", options: ["Neuronas", "Glóbulos rojos", "Plaquetas", "Músculos"], correct: 0 },
  { question: "¿Qué hace el cerebro cuando quieres mover un brazo?", options: ["Envia un mensaje a los músculos", "Se apaga", "Bombea sangre", "Digiere comida"], correct: 0 },
  { question: "¿En qué parte del cuerpo está el cerebro?", options: ["En la barriga", "En la cabeza", "En el pecho", "En las piernas"], correct: 1 },
  { question: "¿Qué hace el cerebro cuando estás pensando?", options: ["Duerme", "Envia mensajes entre neuronas", "Se enfría", "Se apaga"], correct: 1 },
  { question: "¿Qué parte del cerebro ayuda a recordar cosas?", options: ["El cerebelo", "El tronco encefálico", "El hipocampo", "La médula espinal"], correct: 2 },
  { question: "¿Qué hace el cerebro cuando ves un lindo cachorro?", options: ["Te hace reír", "Envia señales a tus ojos", "Hace que tu corazón lata más rápido", "Te hace dormir"], correct: 2 },
  { question: "¿Qué necesitan las neuronas para enviar mensajes rápido?", options: ["Azúcar", "Electricidad", "Agua", "Aire"], correct: 1 },
  { question: "¿Qué protege al cerebro de los golpes?", options: ["El corazón", "El cráneo", "La piel", "Los pulmones"], correct: 1 },
  { question: "¿Qué parte del cerebro ayuda a mantener el equilibrio?", options: ["El lóbulo frontal", "El cerebelo", "El hipocampo", "El lóbulo occipital"], correct: 1 },
  { question: "¿Qué hace el cerebro cuando estás asustada?", options: ["Te hace correr o esconderte", "Se apaga", "Te hace comer", "Te hace dormir"], correct: 0 },
  { question: "¿Qué parte del cerebro controla si tienes hambre o sed?", options: ["El hipocampo", "El hipotálamo", "El cerebelo", "El tronco encefálico"], correct: 1 },
  { question: "¿Cómo se comunican las neuronas entre sí?", options: ["Hablando", "Con señales eléctricas y químicas", "Con un abrazo", "Con un teléfono"], correct: 1 },
  { question: "¿Qué hace el lóbulo frontal del cerebro?", options: ["Te ayuda a ver", "Te ayuda a tomar decisiones", "Te ayuda a respirar", "Te ayuda a oler"], correct: 1 },
  { question: "¿Qué pasa si las neuronas no pueden enviar mensajes?", options: ["No puedes moverte ni pensar", "Puedes correr más rápido", "Duermes mejor", "Comes más"], correct: 0 },
  { question: "¿Qué hace el cerebro cuando sueñas?", options: ["Se apaga", "Crea imágenes en tu mente", "Deja de funcionar", "Se enfría"], correct: 1 },
  { question: "¿Qué parte del cerebro te ayuda a ver colores y formas?", options: ["El lóbulo occipital", "El cerebelo", "El lóbulo parietal", "El tronco encefálico"], correct: 0 },
  { question: "¿Qué hace el cerebro cuando escuchas música?", options: ["Se apaga", "Envia señales a tus oídos", "Te hace dormir", "Te hace comer"], correct: 1 },
  { question: "¿Qué parte del cerebro te ayuda a sentir emociones como la felicidad?", options: ["El cerebelo", "El sistema límbico", "El lóbulo occipital", "La médula espinal"], correct: 1 },
  { question: "¿Qué hace el tronco encefálico?", options: ["Te ayuda a pensar", "Controla tu respiración y corazón", "Te ayuda a ver", "Te ayuda a correr"], correct: 1 },
  { question: "¿Qué hace el cerebro cuando estás aprendiendo algo nuevo?", options: ["Se apaga", "Crea nuevas conexiones entre neuronas", "Se enfría", "Deja de funcionar"], correct: 1 },
  { question: "¿Qué parte del cerebro te ayuda a hablar?", options: ["El lóbulo frontal", "El cerebelo", "El hipocampo", "El lóbulo occipital"], correct: 0 },
  { question: "¿Qué hace el cerebro cuando tocas algo caliente?", options: ["Te hace quitar la mano rápido", "Te hace reír", "Te hace dormir", "Te hace comer"], correct: 0 },
  { question: "¿Qué necesita el cerebro para funcionar bien?", options: ["Oxígeno y comida", "Solo agua", "Solo dormir", "Solo jugar"], correct: 0 },
  { question: "¿Qué hace el cerebro cuando estás durmiendo?", options: ["Se apaga completamente", "Sigue trabajando y soñando", "Deja de respirar", "Se enfría"], correct: 1 },
  { question: "¿Qué parte del cerebro te ayuda a oler una flor?", options: ["El lóbulo temporal", "El cerebelo", "El lóbulo occipital", "El tronco encefálico"], correct: 0 },
  { question: "¿Qué hace el cerebro cuando tienes miedo?", options: ["Envia señales para que tu corazón lata rápido", "Te hace dormir", "Te hace comer", "Se apaga"], correct: 0 },
  { question: "¿Qué parte del cerebro te ayuda a sentir el tacto?", options: ["El lóbulo parietal", "El cerebelo", "El hipocampo", "El lóbulo occipital"], correct: 0 },
  { question: "¿Qué hace el cerebro cuando estás jugando?", options: ["Se apaga", "Coordina tus movimientos", "Deja de funcionar", "Te hace comer"], correct: 1 },
  { question: "¿Qué le pasa al cerebro si no duermes lo suficiente?", options: ["Funciona mejor", "Se cansa y no piensa bien", "Crece más", "Se vuelve más pequeño"], correct: 1 },
  { question: "¿Qué hace el cerebro cuando lees un libro?", options: ["Se apaga", "Envia señales a tus ojos para entender las palabras", "Te hace dormir", "Deja de funcionar"], correct: 1 },
  { question: "¿Qué parte del cerebro te ayuda a planear un dibujo?", options: ["El lóbulo frontal", "El cerebelo", "El lóbulo occipital", "El tronco encefálico"], correct: 0 },
  { question: "¿Qué hace el cerebro cuando te sientes feliz?", options: ["Envia mensajes tristes", "Libera sustancias que te hacen sentir bien", "Se apaga", "Te hace dormir"], correct: 1 },
  { question: "¿Qué hace el cerebro cuando corres?", options: ["Se apaga", "Coordina tus piernas y brazos", "Deja de funcionar", "Te hace comer"], correct: 1 },
  { question: "¿Qué parte del cerebro te ayuda a mantener tu temperatura?", options: ["El hipocampo", "El hipotálamo", "El cerebelo", "El lóbulo occipital"], correct: 1 },
  { question: "¿Qué hace el cerebro cuando te ríes?", options: ["Se apaga", "Envia señales a tu cara para sonreír", "Te hace dormir", "Deja de funcionar"], correct: 1 },
  { question: "¿Qué parte del cerebro te ayuda a imaginar cosas?", options: ["El lóbulo frontal", "El cerebelo", "El lóbulo occipital", "El tronco encefálico"], correct: 0 },
  { question: "¿Qué hace el cerebro cuando escuchas un ruido fuerte?", options: ["Se apaga", "Envia señales para que te tapes los oídos", "Te hace comer", "Deja de funcionar"], correct: 1 },
  { question: "¿Qué hace el cerebro para protegerse de enfermedades?", options: ["Se apaga", "Envia glóbulos blancos", "Se enfría", "Deja de funcionar"], correct: 1 },
  { question: "¿Qué le pasa al cerebro si no come comida saludable?", options: ["Funciona mejor", "No puede pensar bien", "Crece más", "Se vuelve más pequeño"], correct: 1 },
];

// Lista de frases graciosas para el empate
const tieMessages = [
  "¡Vaya, Allison y Astrid! Parece que sus cerebros están sincronizados, ¿serán gemelas cerebrales? 😄",
  "¿Quién necesita un ganador? ¡Allison y Astrid son las reinas del empate! 🏆😂",
  "¡Un empate perfecto! ¿Seguro que no están compartiendo un solo cerebro entre las dos? 🧠😆",
  "Allison y Astrid, ¡parece que tienen el mismo superpoder cerebral! ¿Cuál es su secreto? 🦸‍♀️🦸‍♀️",
  "¡Empate! Parece que a los 10 y 11 años ya saben lo mismo… ¿serán genios idénticos? 🤓",
  "¡Wow, un empate! Allison y Astrid, ¿quién les enseñó a ser tan igualitas? 🎉",
  "¡Empate épico! ¿Seguro que no están copiando sus pensamientos? 🧐😂",
  "Allison y Astrid, ¡son un dúo dinámico del conocimiento! ¿Quién las puede superar? 💡😄",
  "¡Empate! Sus cerebros de 10 y 11 años están en perfecta armonía, ¿serán amigas cerebrales? 🎶🧠",
  "¡Un empate genial! Allison y Astrid, parece que piensan igualito… ¿serán hermanas del saber? 🤗",
  "¡Empate! Parece que Allison y Astrid tienen el mismo libro de trucos cerebrales. 📚😂",
  "¡Qué empate tan divertido! Allison y Astrid, ¿han estado estudiando juntas en secreto? 🕵️‍♀️",
  "¡Empate! A los 10 y 11 años ya saben lo mismo… ¿serán pequeñas profesoras gemelas? 👩‍🏫👩‍🏫",
  "¡Un empate perfecto! Allison y Astrid, parece que sus cerebros están conectados por Bluetooth. 📡😄",
  "¡Empate! ¿Seguro que no tienen un cerebro compartido? ¡Allison y Astrid son imparables! 🤝🧠",
  "¡Empate épico! Allison y Astrid, ¿quién diría que a los 10 y 11 años serían tan iguales? 🎈",
  "¡Empate! Allison y Astrid, parece que tienen el mismo manual de genios. 📖😆",
  "¡Un empate increíble! Allison y Astrid, ¿serán las mejores amigas del conocimiento? 🤗💡",
  "¡Empate! A los 10 y 11 años, Allison y Astrid son como dos gotas de agua… ¡de sabiduría! 💧😂",
  "¡Empate perfecto! Allison y Astrid, ¿serán las reinas del cerebro en talla mini? 👑🧠"
];

// Lista de mensajes de felicitación para la ganadora
const winnerMessages = [
  "¡Wow, {winner}! Tu cerebro está súper encendido, ¡eres una neurona brillante! 🧠✨",
  "¡Felicidades, {winner}! Tienes un cerebro tan rápido como un impulso eléctrico, ¡increíble! ⚡",
  "¡Eres una campeona, {winner}! Tu hipocampo debe estar gigante con tanto que sabes. 🏆🧠",
  "¡Ganaste, {winner}! Tu cerebro es como un superhéroe que nunca se cansa de aprender. 🦸‍♀️💡",
  "¡Qué increíble, {winner}! Tu lóbulo frontal tomó las mejores decisiones hoy. 🎉",
  "¡Hurra por {winner}! Tienes un cerebro que brilla más que todas las neuronas juntas. 🌟🧠",
  "¡Ganadora genial, {winner}! Tu cerebro está enviando señales de pura felicidad. 😄⚡",
  "¡Felicidades, {winner}! Tu cerebelo está celebrando con un baile de victoria. 💃🧠",
  "¡Eres asombrosa, {winner}! Tu cerebro es como un libro gigante lleno de sabiduría. 📚✨",
  "¡Ganaste, {winner}! Tu hipotálamo está tan feliz que te está dando un aplauso. 👏",
  "¡Qué cerebro tan poderoso, {winner}! Ganaste con pura energía neuronal. ⚡🏆",
  "¡Felicidades, {winner}! Tu lóbulo occipital vio la victoria desde el principio. 🧠🎉",
  "¡Ganadora estelar, {winner}! Tu cerebro es un universo lleno de estrellas brillantes. 🌟",
  "¡Hurra por {winner}! Tu sistema límbico está saltando de alegría por tu victoria. 😺🧠",
  "¡Eres la reina del cerebro, {winner}! Tu conocimiento es más grande que el lóbulo frontal. 👑",
  "¡Ganaste, {winner}! Tus neuronas están teniendo una fiesta de celebración. 🎈⚡",
  "¡Qué increíble, {winner}! Tu tronco encefálico está latiendo de emoción por tu victoria. 💓",
  "¡Felicidades, {winner}! Tu cerebro es tan listo que merece un diploma de honor. 🎓🧠",
  "¡Ganadora súper, {winner}! Tu lóbulo parietal sintió cada respuesta correcta. 🏅",
  "¡Eres una estrella, {winner}! Tu cerebro brilla más que un impulso nervioso. ✨⚡",
];

// Función para mezclar un array (algoritmo de Fisher-Yates)
const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

function App() {
  const [questions, setQuestions] = useState(() => {
    // Seleccionar 10 preguntas aleatoriamente de las 40 disponibles
    const shuffledQuestions = shuffleArray(allQuestions).slice(0, 10);
    return shuffledQuestions.map(q => {
      // Mezclar las opciones de cada pregunta seleccionada
      const indices = q.options.map((_, index) => index);
      const shuffledIndices = shuffleArray(indices);
      const shuffledOptions = shuffledIndices.map(i => q.options[i]);
      const newCorrectIndex = shuffledIndices.findIndex(i => i === q.correct);
      return {
        ...q,
        options: shuffledOptions,
        correct: newCorrectIndex
      };
    });
  });
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ Allison: 0, Astrid: 0 });
  const [selectedAnswers, setSelectedAnswers] = useState(() => Object.keys(scores).reduce((acc, player) => ({ ...acc, [player]: null }), {}));
  const [showResult, setShowResult] = useState(false);
  const [showWinner, setShowWinner] = useState(false);
  const [winner, setWinner] = useState(null);

  const handleSelect = (player, index) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [player]: index
    }));
  };

  const checkAnswer = () => {
    setShowResult(true);
    setScores(prevScores => {
      const updatedScores = { ...prevScores };
      Object.keys(selectedAnswers).forEach(player => {
        if (selectedAnswers[player] === questions[currentQuestion].correct) {
          updatedScores[player]++;
        }
      });
      return updatedScores;
    });
  };

  const showResults = () => {
    setWinner(scores.Allison === scores.Astrid ? "Empate" : scores.Allison > scores.Astrid ? "Allison" : "Astrid");
    setShowWinner(true);
  };

  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    setSelectedAnswers(prev => Object.keys(prev).reduce((acc, player) => ({ ...acc, [player]: null }), {}));
    setShowResult(false);
  };

  const getButtonClass = (index, player) => {
    const isCorrect = index === questions[currentQuestion].correct;
    const isSelected = selectedAnswers[player] === index;

    if (!showResult) {
      if (isSelected) {
        return "selected";
      }
      return "";
    }

    let classes = [];
    if (isCorrect) {
      classes.push("correct");
    }
    if (isSelected && !isCorrect) {
      classes.push("incorrect");
    }

    return classes.join(" ");
  };

  const getIcon = (index, player) => {
    const isCorrect = index === questions[currentQuestion].correct;
    const isSelected = selectedAnswers[player] === index;

    if (!showResult || !isSelected) {
      return null; // No mostramos ícono si no se ha verificado o no está seleccionada
    }

    if (isCorrect) {
      return <span className="icon check">✔</span>;
    }

    if (!isCorrect) {
      return <span className="icon cross">✘</span>;
    }

    return null;
  };

  // Función para obtener una frase de felicitación aleatoria para la ganadora
  const getRandomWinnerMessage = (winnerName) => {
    const randomIndex = Math.floor(Math.random() * winnerMessages.length);
    const messageTemplate = winnerMessages[randomIndex];
    return messageTemplate.replace("{winner}", winnerName);
  };

  // Función para obtener una frase graciosa aleatoria en caso de empate
  const getRandomTieMessage = () => {
    const randomIndex = Math.floor(Math.random() * tieMessages.length);
    return tieMessages[randomIndex];
  };

  return (
    <div className="app-container">
      <h1 className="title">Trivia para Allison y Astrid</h1>
      <h2 className="subtitle">Pregunta {currentQuestion + 1} de {questions.length}</h2>
      <div className="card">
        <h2 className="question">{questions[currentQuestion].question}</h2>
        <div className="players">
          {Object.keys(scores).map(player => (
            <div key={player} className="player">
              <h3 className="player-name">{player} ({scores[player]} puntos)</h3>
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className={`option-button ${getButtonClass(index, player)}`}
                  onClick={() => handleSelect(player, index)}
                  disabled={showResult}
                >
                  <span className="option-text">{option}</span>
                  {getIcon(index, player)}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="action-buttons">
        <button className="action-button check" onClick={checkAnswer}>
          Ver respuesta
        </button>
        {showResult && (
          currentQuestion < questions.length - 1 ? (
            <button className="action-button next" onClick={nextQuestion}>
              Siguiente pregunta
            </button>
          ) : (
            <button className="action-button next" onClick={showResults}>
              Resultado de la trivia
            </button>
          )
        )}
      </div>
      {showWinner && (
        <div className="winner-overlay">
          <Confetti width={window.innerWidth} height={window.innerHeight} />
          <h1 className="winner-title">{winner === "Empate" ? "😄 ¡Un empate épico! 😄" : `🎉 ¡Felicidades ${winner}! 🎉`}</h1>
          <p className="winner-message">
            {winner === "Empate" ? getRandomTieMessage() : getRandomWinnerMessage(winner)}
          </p>
          <button className="winner-button" onClick={() => window.location.reload()}>
            Jugar de nuevo
          </button>
        </div>
      )}
    </div>
  );
}

export default App;

