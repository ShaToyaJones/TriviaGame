//variables for trivia game.

// //The timer for the game. 
// var timeRemaining = 0;
// //The answer that the user clicks/selects.
// var answerSelected = " "
// //Display the number of incorrect answers.
// var incorrectAnswers = " "
// //Displays the number of questions that were not answered.
// var unanswered = 0;

//Create an object containing the questions and answer bank.
var questions = [
	{
		question: "1. Choose a song by Total:",
		answers: ["first answer", "second answer", "Kissing You", "fourth answer"],
		correctAnswer: 2
	},
	{
		question: "2. Choose a song by Faith Evans:",
		answers: ["Soon As I Get Home", "second answer", "third answer", "fourth answer"],
		correctAnswer: 0
	},
	{
		question: "3. Choose a song by Next:",
		answers: ["first answer", "Butta Love", "third answer", "fourth answer"],
		correctAnswer: 1
	},
	{
		question: "4. Choose a song by Jodeci:",
		answers: ["first answer", "second answer", "third answer", "Stay"],
		correctAnswer: 3
	},
	{
		question: "5. Choose a song by Jade:",
		answers: ["first answer", "second answer", "third answer", "Don't Walk Away"],
		correctAnswer: 3
	},
	{
		question: "6. Choose a song by TLC:",
		answers: ["first answer", "Ain't 2 Proud To Beg", "third answer", "fourth answer"],
		correctAnswer: 1
	},
	{
		question: "7. Choose a song by Usher:",
		answers: ["first answer", "Nice & Slow", "third answer", "fourth answer"],
		correctAnswer: 1
	},
	{
		question: "8. Choose a song by Silk:",
		answers: ["first answer", "second answer", "Lose Control", "fourth answer"],
		correctAnswer: 2
	},
	{
		question: "9. Choose a song by Monica:",
		answers: ["Why I Love You So Much", "second answer", "third answer", "fourth answer"],
		correctAnswer: 0
	},
	{
		question: "10. Choose a song by Xscape:",
		answers: ["first answer", "second answer", "third answer", "Understanding"],
		correctAnswer: 3
	},
	{
		question: "11. Choose a song by H-Town:",
		answers: ["Emotions", "second answer", "third answer", "fourth answer"],
		correctAnswer: 0
	},
];

//game variables as an object
var trivia = {
	correct: 0,
	incorrect: 0,
	counter: 30, 
	countdown: function() {
		trivia.counter --;
		$("#counter-number").html(trivia.counter);

		if (trivia.counter === 0) {
			console.log("GAME OVER");
			game.done();
		}
	}
};

//Start the game.
function startGame() {
  console.log("Start game");
//Then display all 11 questions at once.
  console.log(questions[0]);
  $("#question").html("<p>QUESTION:</p>" + questions[0].question);
  console.log(answers[0]);
  $("#answers").html("<p>ANSWERS:</p>" + questions[0].answers);
  $("#start-btn").hide();
}


//Push the questions and multiple choice options to the html.

//Create radio buttons


function processAnswer() {

}

//Create a function to update the score.
function updateCorrectAnswer() {
	document.querySelector("#correctAnswer").innerHTML = "correctAnswer: " + correctAnswer;
}

//The game will stop either once the time ends or the user has answered each question.
function stopGame() {

}

$(document).ready(function() {
  $("#start-btn").on("click", startGame);
});