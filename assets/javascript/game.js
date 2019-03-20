// INJECT THIS TO GET DEAD PATIENT   <div style="width:100%;height:0;padding-bottom:68%;position:relative;"><iframe src="https://giphy.com/embed/godMk62fXqpgY" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/pulse-godMk62fXqpgY">via GIPHY</a></p>
// HIDE H3 WHEN GAME STARTS
// ADD SPANS TO THE WORD SPACE BASED ON SIZE OF WORD
// DELETE HEART-BEAT AND INJECT IN SAME PLACE SAME WAY HEART-BEAT ENDING GIF (top comment)
// Maybe start page with heart gif just an image? (no motion)
// add hint based on correct answer
// look into making code an object
// add letters hit to guess space
// add number of guesses left
// to change picture grab class and innerHTML the src=""
// add patients saved today to the input for patient-counter
// look into making sounds
// remember need to call functions after creating them **

var hintSpace = document.getElementById("hint-space");
var wordSpace = document.getElementById("word-space");
var guessSpace = document.getElementById("guess-space");
var counterSpace = document.getElementById("counter-space");
var patientImg = document.getElementsByClassName("img-fluid"); //<- this may not work lol
var patientCounter = document.getElementById("patient-counter");
var wordList = ["pneumonia", "flu", "cholera", "gangrene"];
var winCount = 0;

function trackFacts() {
  patientCounter.textContent = "Patients saved today: " + winCount;
}

function getKeyHit(event) {
  var keyHit = event.key;
}

document.onkeyup = getKeyHit(event);
function checkKey() {
  getKeyHit();
}
