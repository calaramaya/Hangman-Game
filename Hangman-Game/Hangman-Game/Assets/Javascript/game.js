
var words = ["liverpool", "ynwa"];

var letterGuessed = [];

var guessCounter = 10;

var win = 0;

var wordToGuess = words[Math.floor(Math.random() * words.length)];

var wordSplit = wordToGuess.split("");

wordToGuess = wordToGuess.split("");


for (var i = 0; i < wordSplit.length; i++) {
  wordSplit[i] = "_ ";
  document.getElementById("word").innerHTML = wordSplit.join("");
}


document.onkeyup = function(event) {
  
  document.getElementById("wins").innerHTML = win;
  document.getElementById("guessLeft").innerHTML = guessCounter;


  if (letterGuessed.length === 0) {
    letterGuessed.push(event.key);
  }

  for (var k = 0; k < letterGuessed.length; k++) {
    if (letterGuessed.includes(event.key)) {} else {
      letterGuessed.push(event.key);
      document.getElementById("guess").innerHTML = letterGuessed;
    }
  }

  for (var j = 0; j < letterGuessed.length; j++) {
    for (var h = 0; h < wordToGuess.length; h++) {
      if (letterGuessed[j] === wordToGuess[h]) {
        wordSplit[h] = letterGuessed[j];
        var guessNum = true;
      }
    }
  }

  if (!guessNum) {
    guessCounter--;
    document.getElementById("guessLeft").innerHTML = guessCounter;
  }

  var showWord = "";
  for (var i = 0; i < wordToGuess.length; i++) {
    if (letterGuessed.indexOf(wordToGuess[i].toLowerCase()) >= 0) {
      showWord = showWord + wordToGuess[i] + " ";
    } else {
      showWord = showWord + "_ ";
    }
  }
  document.getElementById("word").innerHTML = showWord;

  if (guessCounter === 0) {
    youLose();
  }

  if (showWord.search("_") === -1) {
    document.getElementById("word").innerHTML = showWord;
    youWin();
  }
}



function youWin() {
  win++;
  document.getElementById("wins").innerHTML = win;
  alert("YNWA");
  cleanSlate();
}


function youLose() {
  alert("You are trash");
  cleanSlate();
}


function cleanSlate() {
 
  wordToGuess = words[Math.floor(Math.random() * words.length)];
  guessCounter = 10;
  letterGuessed = [];
  showWord = "";
  for (var i = 0; i < wordSplit.length; i++) {
    wordSplit[i] = "_ ";
    document.getElementById("word").innerHTML = wordSplit.join("");
  }


  document.getElementById("guessLeft").innerHTML = guessCounter;
  document.getElementById("guess").innerHTML = letterGuessed;
}