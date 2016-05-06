var correctAns= 0;
var question;
var answer;
var html;
var questArray = [
  ['How many legs does a dog have?', 4],
  ['How many eyes does a cat have?', 2],
  ['How many days does a week have?', 7]
];

for (var i = 0; i < questions.length; i += 1) {
  question = questArray[i][0];
  answer = questArray[i][1];
  if (parseInt(prompt(question)) === answer) {
    correctAns += 1;
  }
}

if(correctAns >=2)
{
  html = "Congrats!! You answered " + correctAns + " questions correctly.";
}
else
{
  html = "Sorry :( You only got " + correctAns + " correct questions.";
}

document.write(html);
