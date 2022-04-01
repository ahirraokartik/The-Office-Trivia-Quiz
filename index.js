//https://replit.com/@kartikahirrao/The-Office-Trivia-Quiz?embed=1&output=1

console.log("THE OFFICE QUIZ");
console.log();

var readlineSync = require('readline-sync');
var userName = readlineSync.question('What is your name? ');

console.log();
console.log("Hey " + userName + ", Welcome the Quiz!");
console.log();

var userEgo = readlineSync.question('Do you think you are a hardcore the Office fan? ');

if(userEgo.toUpperCase() == 'yes'.toUpperCase())
{
  console.log('Overconfidence! ( ͡° ͜ʖ ͡°) We will see about that. You better score full');
    console.log();
}else if(userEgo.toUpperCase() == 'no'.toUpperCase())
  {
    console.log('Well, you are still playing and that is all that matters. Try the Quiz, maybe you will like it');
      console.log();
  }else if(userEgo.toUpperCase() == 'idc'.toUpperCase())
  {
    console.log('Well, you should care and you are still playing and that is all that matters. Try the Quiz, maybe you will like it');
      console.log();
  }
else
{
  console.log('What, SERIOUSLY? ( ͡° ͜ʖ ͡°) what a response. Anyway, play the quiz. Maybe you will like it ');
  console.log();
}

 console.log("----------------------------------------");
  
 score=0;

function play(question,answer)
{
  
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() == answer.toUpperCase())
  {
    console.log("You are right!");
    score = score + 1;
  }else if(userAnswer.toUpperCase() == 'no idea'.toUpperCase())
      {
        console.log('Get idea!');
      }else if(userAnswer.toUpperCase() == 'dont know'.toUpperCase())
      {
        console.log('That is fine. Try next time');
      }else if(userAnswer.toUpperCase() == 'idk'.toUpperCase())
      {
        console.log('That is fine. Try next time');
      }else if(userAnswer.toUpperCase() == 'dont know'.toUpperCase())
      {
        console.log('That is fine. Try next time');
      }
  else
  {
    console.log("You are Wrong");
    console.log("The correct answer is " + answer);
  }
      
      console.log("Your Score is " + score);
       console.log();
   console.log("-----------------------");
}

var questionArr = [
  {
  question:"Who was Pam engaged to before Jim? ",
    answer:"Roy"
},
  {
  question:"Which of Angela’s cats did Dwight kill? ",
    answer:"Sprinkles"
},
  {
  question:"At Phyllis’ wedding, Michael revealed that her nickname in high school was what? ",
    answer:"Easy Rider"
},
  {
  question:"Who did Michael end up taking to Jamaica? ",
    answer:"Jan"
},
  {
  question:"What is the name of the building security guard? ",
    answer:"Hank"
},
  {
  question:"What does Michael ask Pam to spread on his foot that he burned on a George Foreman grill? ",
    answer:"Butter"
},
  {
  question:"What is Dwight's Surname? ",
    answer:"schrute"
},
  {
  question:"What is the name of the second IT guy? ",
    answer:"Nick"
},
  {
  question:"This is Dwight’s nickname for Angela? ",
    answer:"Monkey"
},
  {
  question:"What was the internet sensation of 2004 that caused Michael and Dwight to jump around in the office?? ",
    answer:"Parkour"
}
];

for(var i=0; i<questionArr.length; i++)
{
  console.log();
  var CurrentValue = questionArr[i];
  play(CurrentValue.question, CurrentValue.answer);
}

console.log('Congratulations! Your final score is ' + score);
console.log();

if(score >= 7)
{
  
  console.log('You Rock! That was hard and THAT IS WHAT SHE SAID. Hope you enjoyed quiz. Screenshot your score and send it to Kartik.');
  
}
else
{
  console.log('You did well! Hope you liked it and THAT IS WHAT SHE SAID. if you enjoyed the quiz, take a screenshot of your score and send it to Kartik.');
}

console.log();
console.log('Thank you!');
console.log();

console.log('-------------------------------');
console.log('HIGHSCORES');
console.log('-------------------------------');

var highscore = [{
  Number:01,
  Name: 'Vivek',
  Score: 7
},
{
  Number:02,
  Name: 'Sakshi',
  Score: 6
}
]

for(var i=0; i < highscore.length; i++)
    {
      var CurrHighscores = highscore[i]
      console.log(CurrHighscores.Number, CurrHighscores.Name + ',score ' + CurrHighscores.Score);
     
    }

console.log();