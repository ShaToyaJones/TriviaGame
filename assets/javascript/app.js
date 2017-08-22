//variables for trivia game.

var timeRemaining = " "
var answerSelected = " "
var incorrectAnswers = " "
var unanswered = " "
var questions = [
	"Choose a song by Total",
	"Choose a song by Faith Evans",
	"Choose a song by Next",
	"Choose a song by Jodeci",
	"Choose a song by Jade",
	"Choose a song by TLC",
	"Choose a song by Usher",
	"Choose a song by Silk",
	"Choose a song by Monica",
	"Choose a song by Xscape",
	"Choose a song by H-Town",
	]	
	console.log(questions);

var correctAnswers = [
	"Kissing You",
	"Soon As I Get Home",
	"Butta Love",
	"Stay",
	"Don't Walk Away",
	"Ain't 2 Proud To Beg",
	"Nice & Slow",
	"Lose Control",
	"Why I Love You So Much",
	"Understanding",
	"Emotions",
	]
	console.log(correctAnswers);

//Create a for loop to cycle through the game questions array.
	for (var i = 0; timeRemaining.length; i++) {
		if (answerSelected === correctAnswers) {
			console.log();
		}

	}