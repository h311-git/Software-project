(function () {
  function buildQuiz() {
    const output = [];

    myQuestions.forEach((currentQuestion, questionNumber) => {
      const answers = [];

      for (letter in currentQuestion.answers) {
        answers.push(
          `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
             <span> ${letter} :
              ${currentQuestion.answers[letter]} </span>
            </label>`
        );
      }

      output.push(
        `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
      );
    });

    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    window.location.pathname = "/courses/5ff429c084a236fafb1a1749";
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const myQuestions = [
    {
      question:
        "A type of Software Life Cycle Activity which involves building the software and converting the design into code.?",
      answers: {
        a: "Detailed design",
        b: "Interface design",
        c: "Architectural design",
        d: "Implementation",
      },
      correctAnswer: "d",
    },
    {
      question:
        "Which of the following follows the correct sequence in a waterfall model?",
      answers: {
        a: "Testing, Design, Implementation, Feasibility, Requirements",
        b: "Feasibility, Requirements, Design, Implementation, Testing",
        c: "Feasibility, Testing, Implementation, Requirement, Design",
        d: "Requirements, Feasibility, Design, Implementation, Testing",
      },
      correctAnswer: "b",
    },
  ];

  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(currentSlide);

  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
