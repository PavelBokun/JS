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
  let correctGuess = false;
  if (guess2 === null) {
    break;
  } else if (guess2.length !== 1) {
    alert("Пожалуйста, введите только одну букву.");
  } else {
    for (let j = 0; j < word.length; j++) {
        debugger
      if (word[j] === guess2) {
        answerArray[j] = guess2;
        remainingLetters--;
      }
       answerArray[j]=word[j]
       correctGuess=true
    }
    if(!correctGuess){
        alert("Такой Буквы нет")
    }
  }
}
alert(answerArray.join(" "));
alert("Было загадано сллово " + word);
