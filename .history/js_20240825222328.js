let words = ["программа", "макака", "прекрасный", "оладушек"];
let word = words[Math.floor(Math.random() * words.length)];
let word2=to
let answerArray = [];
for (let i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}
let remainingLetters = word.length;
// alert(answerArray.join(" "));

while (remainingLetters > 0) {
  alert(answerArray.join(" "));
  let guess = prompt("Угадайте букву или нажмите Отмена для выхода из игры.");
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert("Пожалуйста, введите только одну букву.");
  } else {
    for (let j = 0; j < word.length; j++) {
      if (word[j] === guess) {
        answerArray[j] = guess;
        remainingLetters--;
      }
    }
  }
}
alert(answerArray.join(" "));
alert("Было загадано сллово " + word);
