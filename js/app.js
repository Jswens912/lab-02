'use strict';

function quiz() {

  var score = 0;

  var name = prompt('What\'s your name');
  while (!name || name.length < 2) {
    name = prompt('No really, what\'s your name?');
  }


  var questions = [
    ['Was I born in Iowa?', 'y', 'That is correct!', 'Nah ma dude'],
    ['Have I lived in Iowa my whole life?', 'n', 'You\'re right!', 'Yeah, that\'s gonna be a no for me dawg.'],
    ['Did I go to college out of state?', 'y', 'You\'re awesome dude! Right on!', '...You. Are. Wrong.'],
    ['Am I a part of the Illuminati?', 'y', 'That\'s unfortunate you found out, now you must die...', 'Yes, good, of course i\'m not.'],
    ['Am I the coolest guy you know?', 'y', 'Damn straight!', 'I\'m not crying, you\'re crying.']
  ];

  function askQuestion(index) {
    var answer = prompt(questions[index][0]).toLowerCase();
    while (!answer || (answer[0] !== 'y' && answer[0] !== 'n')) {
      answer = prompt(`No really, ${questions[index][0]}`);
    }
    if (answer === questions[index][1]) {
      alert(questions[index][2]);
      score++;
    } else {
      alert(questions[index][3]);
    }
  }

  var cars = ['MAZDA', 'TOYOTA', 'NISSAN', 'CHEVY', 'KIA'];
  var attempts = 0;

  var answer;

  function askCarsQuestion() {
    while (attempts < 8 && (!(answer = prompt('Can you guess what brand of cars i\'ve owned?')) || cars.indexOf(answer.toUpperCase()) < 0)) {
      alert(`Nope, you've got ${7 - attempts++ } left...`);
    }
    if (attempts === 8) {
      alert('Nope, maybe next time.');
    }
    else {
      alert('Awesome, you got it!');
      score++;
    }
  }

  for (var i = 0; i < questions.length; i++) {
    askQuestion(i);
  }
  askCarsQuestion();


  var wrecks = 3;
  var guesses = 3;

  while(guesses > 0){
    var userWreckGuess = parseInt(prompt('Now can you guess how many of those vehicles i crashed?'));
    console.log(userWreckGuess);

    if (userWreckGuess === wrecks) {
      alert('you guessed right!');
      score++;
      break;
    } else {
      console.log(userWreckGuess);
      if (userWreckGuess < wrecks){
        alert('Unfortunately a little low.');
      }
      if(userWreckGuess > wrecks){
        alert('It\'s not that bad, geez.');
      }
    }
    guesses--;
  }

  alert(`You scored ${score} out of 7, ${name}`);
}

quiz();
