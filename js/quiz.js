var questionBank= [
      {
        question : 'Which of the following best describes your eating habits?',
        option : ['Vegan', 'Vegetarian', 'Flexitarian', 'Carnivore'], 
        answer: 'Vegan',
        answer2: 'Vegetarian',
        answer3: 'Flexitarian',
        answer4: 'Carnivore',
      },  
        {
        question : 'It is Black Friday (the Friday after Thanksgiving, when shops reduce the price of goods in order to attract customers who want to start their Christmas shopping) and there are lots of online sales. What do you do?',
        option : ['Decide to not buy any clothes as you have lots in your wardrobe', 'Buy a couple of items of clothing from TALA, a sustainable activewear company', 'Spend a LOT of money on lots of clothes from the Gymshark sale because you want to make the most of the sales', 'Buy a couple of items from a fast-fashion brand (Pretty Little Thing, New Look)'], 
        answer : 'Decide to not buy any clothes as you have lots in your wardrobe',
        answer2 : 'Buy a couple of items of clothing from TALA, a sustainable activewear company',
        answer3 : 'Buy a couple of items from a fast-fashion brand (Pretty Little Thing, New Look)',
        answer4 : 'Spend a LOT of money on lots of clothes from the Gymshark sale because you want to make the most of the sales',
           
        },
        {
        question : 'How do you travel to work/school/university?',
        option : ['Public transport', 'Car', 'Walking', 'I work from home'], 
        answer: 'I work from home',
        answer2: 'Walking',
        answer3 : 'Public transport',
        answer4 : 'Car',
        },
        {
        question : 'Your favourite pair of shoes is falling apart. What actions do you take next?',
        option : ['Get rid of the shoes and buy a new pair that are similar', 'Try to repair the shoes yourself with any resources you can get your hands on', 'Travel somewhere to pay to get them repaired', 'Buy a few new pairs of shoes to make yourself feel better'], 
        answer : 'Try to repair the shoes yourself with any resources you can get your hands on',
        answer2 : 'Travel somewhere to pay to get them repaired',
        answer3 : 'Get rid of the shoes and buy a new pair that are similar',
        answer4 : 'Buy a few new pairs of shoes to make yourself feel better',
        
    },
     {  question : 'How many flights have you taken in the past few years?',
        option : ['None (Covid-19 ruined any chance of travelling abroad)', 'One', 'Two', '≥ Three'], 
        answer: 'None (Covid-19 ruined any chance of travelling abroad)',
        answer2 : 'One',
        answer3 : 'Two',
        answer4 : '≥ Three',
    },
]


var question = document.getElementById('question');
var quizContainer = document.getElementById('quiz_container');
var scorecard= document.getElementById('scorecard');
var option0 = document.getElementById('option0');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var next= document.querySelector('.next');
var points = document.getElementById('score');
var span= document.querySelectorAll('span');
var i = 0;
var score = 0; 
var TotalScore = 0;

function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q'+(i+1)+ '. '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= 'Question'+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

    function calcScore(e) {
        if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score = score + 20;
    }
        if(e.innerHTML===questionBank[i].answer2 && score<questionBank.length)
    {
        score = score + 10;
    }
        if(e.innerHTML===questionBank[i].answer3 && score<questionBank.length)
    {
        score = score + 5;
    }
        if(e.innerHTML===questionBank[i].answer4 && score<questionBank.length)
    {
        score = score + 2;
    }

    setTimeout(nextQuestion,400);
}


function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else {
        points.innerHTML= score;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block';
    }
}

next.addEventListener('click', nextQuestion); 

function backToQuiz(){
    location.reload();
 }




function checkAnswer() {
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0; a<questionBank.length; a++)
    {
        var list= document.createElement('li')
        ;
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


var environmentalCharacter = document.getElementById('environmentalCharacter');
document.getElementById('environmentalCharacter').innerHTML = '0 = You did not select any options.'

var environmentalCharacter2 = document.getElementById('environmentalCharacter2');
document.getElementById('environmentalCharacter2').innerHTML = '1-10 = Some of your actions have a negative impact on the environment.'

var environmentalCharacter3 = document.getElementById('environmentalCharacter3');
document.getElementById('environmentalCharacter3').innerHTML = '11-19 = Some of your actions show great potential to have a better impact on the environment.'

var environmentalCharacter3 = document.getElementById('environmentalCharacter4');
document.getElementById('environmentalCharacter4').innerHTML = '20+ = Some of your behaviours are aligned to being an Environmental Queen so try to encourage others to adapt their behaviours.'



 

displayQuestion();