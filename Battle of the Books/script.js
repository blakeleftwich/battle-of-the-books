document.addEventListener("DOMContentLoaded", function() {
  // Helper function to shuffle an array (Fisher–Yates shuffle)
  function shuffleArray(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  
  // Randomize the order of quiz questions
  shuffleArray(quizQuestions);

  // Book list data (for the default view)
  const books = [
    { title: "Shine On, Luz Véliz!", author: "Rebecca Balcárcel" },
    { title: "Stella by Starlight", author: "Sharon M. Draper" },
    { title: "Hello, Universe", author: "Erin Entrada Kelly" },
    { title: "Yusuf Azeem Is Not a Hero", author: "Saadia Faruqi" },
    { title: "Ban This Book", author: "Alan Gratz" },
    { title: "The Fourteenth Goldfish", author: "Jennifer L. Holm" },
    { title: "Shouting at the Rain", author: "Lynda Mullaly Hunt" },
    { title: "The Parker Inheritance", author: "Varian Johnson" },
    { title: "Chester Keene Cracks the Code", author: "Kekla Magoon" },
    { title: "From the Desk of Zoe Washington", author: "Janae Marks" },
    { title: "Rain Reign", author: "Ann M. Martin" },
    { title: "Merci Suárez Changes Gears", author: "Meg Medina" },
    { title: "At the Bottom of the World", author: "Bill Nye & Gregory Mone" },
    { title: "The Lost Library", author: "Rebecca Stead & Wendy Mass" },
    { title: "Nic Blake and the Remarkables: The Manifestor Prophecy", author: "Angie Thomas" },
    { title: "Save Me a Seat", author: "Sarah Weeks & Gita Varadarajan" }
  ];

  // Populate book list on home screen
  const bookListUl = document.getElementById("books");
  books.forEach(book => {
    let li = document.createElement("li");
    li.textContent = book.title + " by " + book.author;
    bookListUl.appendChild(li);
  });

  // Quiz elements
  const takeQuizBtn = document.getElementById("take-quiz");
  const bookListDiv = document.getElementById("book-list");
  const quizContainer = document.getElementById("quiz-container");
  const quizQuestionDiv = document.getElementById("quiz-question");
  const titleSelect = document.getElementById("title-select");
  const authorSelect = document.getElementById("author-select");
  const submitAnswerBtn = document.getElementById("submit-answer");
  const feedbackDiv = document.getElementById("feedback");
  const nextQuestionBtn = document.getElementById("next-question");
  const backToBookListBtn = document.getElementById("back-to-booklist");

  let currentQuestionIndex = 0;
  let currentQuestion = null;

  function loadQuizQuestion() {
    feedbackDiv.textContent = "";
    feedbackDiv.className = "";
    nextQuestionBtn.style.visibility = "hidden";
    nextQuestionBtn.style.opacity = 0;

    // Get a question from the quizQuestions array
    currentQuestion = quizQuestions[currentQuestionIndex % quizQuestions.length];
    currentQuestionIndex++;
    quizQuestionDiv.textContent = currentQuestion.question;
    populateDropdowns();
  }

  function populateDropdowns() {
    // Clear previous options
    titleSelect.innerHTML = "";
    authorSelect.innerHTML = "";

    // Check which dropdown should be locked based on question parameters:
    // - If author_question is true, lock title dropdown.
    // - If title_question is true, lock author dropdown.
    if (currentQuestion.author_question) {
      // Lock title dropdown to only the correct title
      let optionTitle = document.createElement("option");
      optionTitle.value = currentQuestion.title;
      optionTitle.textContent = currentQuestion.title;
      titleSelect.appendChild(optionTitle);
      titleSelect.disabled = true;
      
      // Populate author dropdown with randomized authors
      let shuffledAuthors = shuffleArray([...books]);
      shuffledAuthors.forEach(book => {
        let optionAuthor = document.createElement("option");
        optionAuthor.value = book.author;
        optionAuthor.textContent = book.author;
        authorSelect.appendChild(optionAuthor);
      });
      authorSelect.disabled = false;
    } else if (currentQuestion.title_question) {
      // Lock author dropdown to only the correct author
      let shuffledTitles = shuffleArray([...books]);
      shuffledTitles.forEach(book => {
        let optionTitle = document.createElement("option");
        optionTitle.value = book.title;
        optionTitle.textContent = book.title;
        titleSelect.appendChild(optionTitle);
      });
      titleSelect.disabled = false;
      
      let optionAuthor = document.createElement("option");
      optionAuthor.value = currentQuestion.author;
      optionAuthor.textContent = currentQuestion.author;
      authorSelect.appendChild(optionAuthor);
      authorSelect.disabled = true;
    } else {
      // For regular questions, populate both dropdowns with randomized options
      let shuffledTitles = shuffleArray([...books]);
      shuffledTitles.forEach(book => {
        let optionTitle = document.createElement("option");
        optionTitle.value = book.title;
        optionTitle.textContent = book.title;
        titleSelect.appendChild(optionTitle);
      });
      titleSelect.disabled = false;
      
      let shuffledAuthors = shuffleArray([...books]);
      shuffledAuthors.forEach(book => {
        let optionAuthor = document.createElement("option");
        optionAuthor.value = book.author;
        optionAuthor.textContent = book.author;
        authorSelect.appendChild(optionAuthor);
      });
      authorSelect.disabled = false;
    }
  }

  takeQuizBtn.addEventListener("click", function() {
    bookListDiv.style.display = "none";
    quizContainer.style.display = "flex";
    loadQuizQuestion();
  });

  submitAnswerBtn.addEventListener("click", function() {
    const selectedTitle = titleSelect.value;
    const selectedAuthor = authorSelect.value;

    if (selectedTitle === currentQuestion.title && selectedAuthor === currentQuestion.author) {
      feedbackDiv.textContent = "Correct!";
      feedbackDiv.className = "correct";
      playSound("correct");
    } else {
      feedbackDiv.textContent = "Incorrect! The correct answer is: " + currentQuestion.title + " by " + currentQuestion.author;
      feedbackDiv.className = "incorrect";
      playSound("incorrect");
    }
    nextQuestionBtn.style.visibility = "visible";
    nextQuestionBtn.style.opacity = 1;
  });

  nextQuestionBtn.addEventListener("click", function() {
    loadQuizQuestion();
  });

  backToBookListBtn.addEventListener("click", function() {
    quizContainer.style.display = "none";
    bookListDiv.style.display = "flex";
  });

  // Function to play sound effects (ensure audio files exist in an audio/ folder)
  function playSound(type) {
    let audio = new Audio();
    if (type === "correct") {
      audio.src = "audio/correct.mp3";
    } else {
      audio.src = "audio/incorrect.mp3";
    }
    audio.play();
  }
});
