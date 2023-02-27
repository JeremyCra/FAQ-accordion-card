const answer = document.querySelectorAll('.answer');
answer.forEach(answer => (answer.style.display = 'none'));
 


function questionOne() {
  var element = document.getElementById('questionOne');
  element.classList.toggle("question-dark");

    var x = document.getElementById("answerOne");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function questionTwo() {
    var element = document.getElementById('questionTwo');
  element.classList.toggle("question-dark");


   var x = document.getElementById("answerTwo");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function questionThree() {
    var element = document.getElementById('questionThree');
  element.classList.toggle("question-dark");


    var x = document.getElementById("answerThree");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function questionFour() {
    var element = document.getElementById('questionFour');
    element.classList.toggle("question-dark");
  

    var x = document.getElementById("answerFour");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function questionFive() {
    var element = document.getElementById('questionFive');
  element.classList.toggle("question-dark");


    var x = document.getElementById("answerFive");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

