function validateForm() {
	var n = document.submit.name.value;
	var e = document.submit.email.value;
	var msg = document.submit.message.value;
	var y = document.submit.anon.value;
	if (msg == "") {
		document.getElementById("submitError").innerHTML =
			"Can't send an empty message...";
		document.submit.message.focus();
		return false;
	} else if (n == "") {
		document.getElementById("submitError").innerHTML = "Please enter your name";
		document.submit.name.focus();
		return false;
	} else if (y == "anonno" && e == "") {
		document.getElementById("submitError").innerHTML =
			"Please enter your email or click on 'Send Anonymously'";
		document.submit.email.focus();
		return false;
	}
	return true;
}

var i = 0;
var images = [];
var time = 5000;

images[0] = "Images/bg.jpeg";
images[1] = "Images/bg2.jpg";
images[2] = "Images/bg3.jpg";
images[3] = "Images/bg4.jpg";
images[4] = "Images/bg5.jpg";
/*learn how do add transitions here*/
function changeImg() {
	document.slide.src = images[i];

	if (i < images.length - 1) {
		i++;
	} else {
		i = 0;
	}
	setTimeout("changeImg()", time);
}
window.onload = changeImg;

/* const quiz = [
	{
		q: "What did Linkin Park call themselves before they officially formed?",
		options: ["Hybrid Theory", "Xero", "Meteora", "Forgotten"],
		answer: 1,
	},
	{
		q: "What was the first ever song they recorded as a band?",
		options: [
			"Hybrid Theory",
			"Linkin Park",
			"A Place For My Head",
			"In The End",
		],
		answer: 0,
	},
];

const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");

let questioncounter = 0;
let currentquestion;
let availablequestions = [];

function setAvailableQuestions() {
	const totalQuestion = quiz.length;
	for (let i = 0; i < totalQuestion; i++) {
		availablequestions.push(quiz[i]);
	}
}

function getNewQuestion() {
	const questionIndex =
		availablequestions[Math.floor(Math.random() * availablequestions.length)];
	currentquestion = questionIndex;
	questionText.innerHTML = currentquestion.q;
	questioncounter++;
}
window.onload = function () {
	setAvailableQuestions();
	getNewQuestion();
};
 */
