$('document.).ready(function(){
  function buildQuiz() {
    
    const output = [];

    
    myQuestions.forEach((currentQuestion, questionNumber) => {
      
      const answers = [];

      
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    
    const answerContainers = quizContainer.querySelectorAll(".answers");

    
    let numCorrect = 0;



      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    
    const answerContainers = quizContainer.querySelectorAll(".answers");

    
    let numCorrect = 0;

  // show number of correct answers out of total
    var numItems = $('.qheader').children('div').length;
  }

  const quizContainer = document.getElementById("input");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const myQuestions = [
    {
      question: "Wiche one of the following is not a factor of 48?";
      answers: {
        A. "25";
        B. "20";
        C. "16";
        D. "8";
      };
      correctAnswer: "A"
    },
    {
      question: "What is the |f(x)|, if f(x) is an odd function?",
      answers: {
        A: "an odd function",
        B: "an even function",
        C: "neither odd nor even",
        D: "both even and odd",
      },
      correctAnswer: "B"
    },
    {
      question: "The absolute value of -6 is?",
      answers: {
        A: "6",
        B: "0",
        C: "either 6 or -6",
        D: "-6"
      },
      correctAnswer: "A"
    }
    {
      question: "Any number divide by 1 is??",
      answers: {
        A: "Undefined",
        B: "Positive numbers",
        C: "The number itself",
        D: "None of the above",
      },
      correctAnswer: "C"
    }
    {
      question: "What are two consecutive integers whose product(multiple) is 272? ",
      answers: {
        A: "16 & 17",
        B: "18 & 19",
        C: "20 & 21",
        D: "15 & 16"
      },
      correctAnswer: "B"
    }
    {
      question: "The value of 20% of 2 is?",
      answers: {
        A: "8",
        B: "0.4",
        C: "20",
        D: "0.04"
      },
      correctAnswer: "D"
    }
    {
      question: "The sine of 30 degree is?",
      answers: {
        A: "0.6",
        B: "0.05",
        C: "0.5",
        D: "5",
      },
      correctAnswer: "C"
    }
    {
      question: "which of the following numbers is not a multiple of 16?",
      answers: {
        A: "256",
        B: "2568",
        C: "1024",
        D: "2048",
      },
      correctAnswer: "B"
    }
  ];

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
};
};

};