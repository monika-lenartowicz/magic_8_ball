const image = document.querySelector(".image");
const question = document.querySelector(".questionInput");
const answer = document.querySelector(".questionArea__answer");
const error = document.querySelector(".questionArea__error");
const answers = [
	"Mój wywiad donosi: NIE!",
	"Wygląda dobrze",
	"Kto wie?",
	"Zapomnij o tym",
	"Tak - w swoim czasie",
	"Prawie jak tak",
	"Nie teraz",
	"YES, YES, YES",
	"To musi poczekać",
	"Mam pewne wątpliwości??",
	"Możesz na to liczyć",
	"Zbyt wcześnie aby powiedzieć",
	"Daj spokój",
	"Absolutnie",
	"Chyba żatrujesz?",
	"Na pewno nie!",
	"Zrób to!",
	"Prawdopodobnie",
	"Dla mnie rewelacja",
	"Na pewno tak",
];

const ballAnimation = () => {
	image.classList.add("image--shakeAnimation");
	setTimeout(checkQuestions, 1000);
};

const checkQuestions = () => {
	if (question.value !== "" && question.value.slice(-1) === "?") {
		generateAnswer();
		error.textContent = "";
	} else if (question.value !== "" && question.value.slice(-1) !== "?") {
		error.textContent = "Pytanie musi być zakończone znakiem '?'";
	} else {
		error.textContent = "Musisz zadać jakieś pytanie";
		answer.textContent = "";
	}
	image.classList.remove("image--shakeAnimation");
};

const generateAnswer = () => {
	const number = Math.floor(Math.random() * answers.length);
	answer.innerHTML = `<span>Odpowiedź:</span> ${answers[number]}`;
};

image.addEventListener("click", ballAnimation);
