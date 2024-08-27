let words = ["программа", "макака", "прекрасный", "оладушек"];
let word = words[Math.floor(Math.random() * words.length)];
let answerArray = [];
for (let i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}
let remainingLetters = word.length;
// alert(answerArray.join(" "));

while (remainingLetters > 0) {
  alert(answerArray.join(" "));
  let guess = prompt("Угадайте букву или нажмите Отмена для выхода из игры.");
  let guess2=guess.toLocaleLowerCase()
  let 
  if (guess2 === null) {
    break;
  } else if (guess2.length !== 1) {
    alert("Пожалуйста, введите только одну букву.");
  } else {
    for (let j = 0; j < word.length; j++) {
      if (word[j] === guess2) {
        answerArray[j] = guess2;
        remainingLetters--;
      }
    }
  }
}
alert(answerArray.join(" "));
alert("Было загадано сллово " + word);
