var question = document.getElementById("question");
var choices =Array.from (document.getElementsByClassName("choice-text"));

var currentQuestion = {};
var acceptingAnswers = true;
var score = 0;
var questionCounter = 0;
var availableQuestions = [];

var questions = [ 
    

 {    
     question: "Inside Which HTML Element do we put the Javascript",
     choice1: "<script>",
     choice2: "<javascript>",
     choice3: "<js>",
     choice4: "<scripting>",
     answer: 1
 },
 {

     question: "Where is the correct place to insert a Javascript", 
     choice1:"Both the <head and the <body> section are correct",
     choice2:"the <body> section",
     choice3:"The <head> section",
     choice4:"none of the above",
     answer: 1
 },
 {
     question: "How can you add a comment in Javascript",
     choice1: "'This is a comment",
     choice2:"<!--This is a comment-->",
     choice3:"//this is a comment",
     choice4:"none of the above",
     answer: 3

 },
 {
     question: "What is the correct way to write a Javascript array",
     choice1: "var colors=(1:'red', 2:'green', 3:'blue') ",
     choice2: "var colors=['red','green','blue',]",
     choice3: "var colors='red','green','blue'",
     choice4: "var=1=('red'),('green'),('blue')",
     answer: 2

 },
 {
     question: "which event occurs when the user clicks on an HTML element",
     choice1: "onMouseClick",
     choice2: "onClick",
     choice3: "onMouseOver",
     choice4: "onChange",
     answer: 2
      
 },
];


var CORRECT_BONUS = 10;
var MAX_QUESTIONS = 5;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions]
    console.log(availableQuestions);
}
startGame();