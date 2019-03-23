// HIDE H3 WHEN GAME STARTS
// look into making code an object
// if making this an object need to fix word global variable

var mainText = document.getElementById("main-text");
var hintSpace = document.getElementById("hint-space");
var wordSpace = document.getElementById("word-space");
var guessSpace = document.getElementById("guess-space");
var counterSpace = document.getElementById("counter-space");
var patientImg = document.getElementsByClassName("img-fluid"); //<- this may not work lol
var patientCounter = document.getElementById("patient-counter");
var resetButton = document.getElementById("reset-button");
var wordList = ["pneumonia", "flu", "cholera", "gangrene"];
var hintList = [
  "Showing signs of fluid in the lungs...",
  "It seems like a common cold but nastier...",
  "They must have had some bad water...",
  "looks like a lot of dead tissue..."
];
var guessedRight = 0;
var winCount = 0;
var keyHit;
letterGuesses = [];
guessCount = 10;
var letters = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m"
];

function trackFacts() {
  patientCounter.textContent = "Patients saved so far: " + winCount;
  counterSpace.textContent = "Patient life left: " + guessCount;
  guessSpace.textContent =
    "I know it doesn't have these letters in it..." + letterGuesses;
}
function wordGenerator() {
  var i = Math.floor(Math.random() * wordList.length);
  word = Array.from(wordList[i]);
  hintSpace.textContent = hintList[i];
  for (x = 0; x < word.length; x++) {
    var y = x;
    var newId = "space" + y;
    var newSpan = document.createElement("span");
    newSpan.textContent = " _ ";
    newSpan.setAttribute("id", newId);
    wordSpace.append(newSpan);
  }
}
//
function checkLetter(word, keyHit) {
  if (letterGuesses.indexOf(keyHit) === -1) {
    if (word.indexOf(keyHit) > -1) {
      var multKeys = [];
      for (z = 0; z < word.length; z++) {
        if (word[z] === keyHit) {
          var keyIndex = word.indexOf(keyHit);
          multKeys.push(z);
          guessedRight++;
          for (q = 0; q < multKeys.length; q++) {
            document.getElementById("space" + multKeys[q]).textContent =
              word[multKeys[q]];
            console.log(guessedRight);
          }
        }
      }
    } else {
      letterGuesses.push(keyHit);
      guessCount--;
    }
  } else {
    alert("You've already guessed that! Are you even a doctor?!");
  }
}
//
function gifSwap() {
  document
    .getElementById("heart-gif")
    .setAttribute(
      "src",
      "https://voicesofglass.files.wordpress.com/2015/02/offense-o.gif?w=529"
    );
}
//
function checkGameState() {
  if (guessCount <= 0) {
    document.getElementById("myAudio").play();
    mainText.textContent =
      "uh.. ohhh no.. they're definitely not breathing anymore..... Yep they're definitely dead.";
    resetButton.style.visibility = "visible";
    gifSwap();
  } else if (guessCount < 3) {
    hintSpace.style.visibility = "visible";
  }
  if (guessedRight === word.length) {
    mainText.textContent =
      "Yes, that's the one! a classic case of **squints eyes** ";
    winCount++;
    resetButton.style.visibility = "visible";
  }
}
//
function resetGame() {
  wordSpace.textContent = " ";
  wordGenerator();
  guessCount = 10;
  letterGuesses = [];
  guessedRight = 0;
  trackFacts();
  mainText.textContent =
    "Ahh yes, this here is a classic case of uh.. it's.. uhhh... darn.. what is that disease called again?";
  resetButton.style.visibility = "hidden";
  document
    .getElementById("heart-gif")
    .setAttribute("src", "https://giphy.com/embed/YeyTwwZLmAIvK");
}
wordGenerator();
document.onkeyup = function(event) {
  var keyHit = event.key;
  if (letters.includes(keyHit)) {
    checkLetter(word, keyHit);
  } else {
    alert("That's not a letter dumbo!");
  }
  checkGameState();
  trackFacts();
};
