'use strict';


// //Ask the firt question
var firstquestion = prompt("Was I born in Iowa?");
var firstAnswer = firstquestion.toUpperCase().trim();
console.log(firstAnswer);
if (firstAnswer === 'Y' || firstAnswer === 'YES'){
     prompt("That is correct!");
} else {
    prompt("Nah ma dude");
 }
 
//Ask Second Question
var secondquestion = prompt("Have I lived in Iowa my whole life?");
var secondAnswer = secondquestion.toUpperCase().trim();
if (secondAnswer === 'N'|| secondAnswer === 'NO')
   prompt("You're right!");
 else {
    prompt("Yeah, that's gonna be a no for me dawg.");
}
//Ask Third Question
var thirdquestion = prompt("Did I go to college out of state?");
var thirdAnswer = thirdquestion.toUpperCase().trim();
if (thirdAnswer === 'Y'|| thirdAnswer === 'YES'){
    
} else {
    prompt("...You. Are. Wrong.");
    
}
var fourthQuestion = prompt("Am I a part of the Illuminati?");
var fourthAnswer = fourthQuestion.toUpperCase().trim();
if (fourthAnswer==='Y'|| fourthAnswer === 'YES'){
    prompt("That's unfortunate you found out, now you must die...");
    
} else {
    prompt("Yes, good, of course i'm not.");
    
}
var fifthQuestion = prompt("Am I the coolest guy you know?");
var fifthAnswer = fifthQuestion.toUpperCase().trim();
if (fifthAnswer==='Y'|| fifthAnswer==='YES'){
    prompt("Damn straight!")
} else {
    prompt("I'm not crying, you're crying.")
    
}
var cars = ['MAZDA', 'TOYOTA', 'NISSAN', 'CHEVY', 'KIA'];
var attempts = 0;
var correctAnswer = 0;


while(attempts !== 8){
    var userInput = prompt('Can you guess what brand of cars i\'ve owned?');
    var answerToUpperCase = userInput.toUpperCase().trim();
    if (cars.indexOf(answerToUpperCase) >= 0){
        alert('You got it!');
        correctAnswer ++;
    } else{
        alert('I wish...');
    }
    attempts++;
}
var wrecks = 3;
var guesses = 0;
var correctGuesses = 0;

while(guesses !== 3 && correctGuesses !==1){
    var userWreckGuess = prompt('Now can you guess how many of those vehicles i crashed?');
    console.log(userWreckGuess);
     if(!userWreckGuess){
         break;
     }

    if (userWreckGuess === wrecks) {
        alert('you guessed right!');
        guesses = 0;
        break;
        
        } else {
            console.log(userWreckGuess);
            if (userWreckGuess < wrecks){
                alert('Unfortunately a little low.');
                guesses++;
            }
            if(userWreckGuess > wrecks){
                alert('It\'s not that bad, geez.');
            } else {
                
                alert('Yep, I crashed 3 of them. 1 wasn\'t completely my fault though, I swear!');
                correctGuesses++;
        }
   }
}
