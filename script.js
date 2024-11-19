document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submitBtn");
    const answerField = document.getElementById("answer");
    const questionContainer = document.getElementById("question-container");
    const correctContainer = document.getElementById("correct-container");
    const resultDiv = document.getElementById("result");

    // Respuestas correctas
    const correctAnswers = ["gato pollo", "Gatopollo", "gatopollo", "GatoPollo", "Gato Pollo", "Gato pollo"];

    // Función para verificar la respuesta
    function checkAnswer() {
        const userAnswer = answerField.value.trim();

        if (correctAnswers.includes(userAnswer)) {
            // Mostrar el contenido correcto
            questionContainer.style.display = "none";
            correctContainer.style.display = "block";
        } else {
            resultDiv.style.color = "red";
            resultDiv.textContent = "Respuesta incorrecta. Inténtalo de nuevo.";
        }
    }

    // Asignar el evento al botón
    submitButton.addEventListener("click", checkAnswer);
});
