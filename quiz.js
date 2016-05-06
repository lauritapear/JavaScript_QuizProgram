
var question;
var answer;
var html;
var incorrectAnswers =[];
var correctAnswers =[];
var questArray = [
  ['How many legs does a dog have?', 4],
  ['How many eyes does a cat have?', 2],
  ['How many days does a week have?', 7]
];

function print (message)
{
   var outputDiv= document.getElementById('output');
    outputDiv.innerHTML= message;
}

function buildList (arr)
{
    var listHTML = '<ol>';
    for (var i = 0; i < arr.length; i ++) {
        listHTML += '<li>'+ arr[i] + '/<li>';
    }
    listHTML += '/<ol>';
    
    return listHTML;
}
for (var i = 0; i < questions.length; i ++) {
  question = questArray[i][0];
  answer = questArray[i][1];
  if (parseInt(prompt(question)) === answer) {
      correctAnswers.push(question);
  }else
  {
      incorrectAnswers.push(question);
  }
}

if(correctAns >=2)
{
  html = "Congrats!! You answered " + correctAnswers.length + " questions correctly.";
}
else
{
  html = "Sorry :( You only got " + correctAnswers.length + " correct questions.";
}

html += 'here are the question you answered correctly';
html += buildList(correctAnswers);
html += 'here are the question you answered incorrectly';
html += buildList(incorrectAnswers);


print(html);