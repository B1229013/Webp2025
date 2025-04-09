let correct = "XYZ";
let wrongCount = 0;

function getRandomString() {
  return Math.random().toString(36).substring(2, 5).toUpperCase();
}

function checkGuess() {
  let guess = prompt("Enter 3 letters:");
  if (!guess) return;

  guess = guess.toUpperCase();
  let container = document.getElementById("container");

  if (guess === correct) {
    container.innerHTML = "✅ Correct!";
  } else {
    wrongCount++;
    container.innerHTML = "❌ Wrong! Attempts: " + wrongCount;

    if (wrongCount >= 3) {
      container.innerHTML += "<br><strong>🔁 Extra Random Strings:</strong><br>";
      for (let i = 0; i < 6; i++) {
        container.innerHTML += getRandomString() + "<br>";
      }
    }
  }
}

// Initial message
document.getElementById("container").innerHTML = "Press Enter to guess 3 letters";

// Focus the container so keydown will work
document.getElementById("container").focus();

// Add listener to run on Enter key
document.getElementById("container").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    checkGuess();
  }
});