let words = ["программа", "макака", "прекрасный", "оладушек"];
let word = words[Math.floor(Math.random() * words.length)];
let answerArray = [];
for (let i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}
let remainingLetters = word.length;
// alert(answerArray.join(" "));

// 
while (remainingLetters > 0) {
    alert(answerArray.join(" "));
    let guess = prompt("Угадайте букву или нажмите Отмена для выхода из игры.");
  
    if (guess === null) {
      break;
    } else if (guess.length !== 1) {
      alert("Пожалуйста, введите только одну букву.");
    } else {
      let guessLowerCase = guess.toLowerCase();
      let correctGuess = false;
  
      for (let j = 0; j < word.length; j++) {
        c
        if (word[j].toLowerCase() === guessLowerCase && answerArray[j] === "_") {
          answerArray[j] = word[j];
          remainingLetters--;
          correctGuess = true;
        }
      }
  
      if (!correctGuess) {
        alert("Такой буквы нет в слове.");
      }
    }
  }
  
  alert(answerArray.join(" "));
  alert("Было загадано слово: " + word);
