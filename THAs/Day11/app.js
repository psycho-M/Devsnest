let questions = [
    {
        Q: "Percy Jackson has been made into a movie and graphic novel. But what was Percy Jackson originally?",
        options: ["A song", "A book", "An album", "A poem"],
        answer: "A book"
    },
    {
        Q: "Complete this sentence: Percy Jackson and the___",
        options: ["Olympians", "Olympic Athletes","Olympic sized swimming pools", "Cars"],
        answer: "Olympians"
    },
    {
        Q: "What is a demigod?",
        options: ["A small God", "A God that's been cut in half","Someone who's half human and half God", "A kind of large glass jar"],
        answer: "Someone who's half human and half God"
    },
    {
        Q: "What happens when you cut off a Hydra's head?",
        options: ["It grows back", "Two more grow back","Three more grow back", "It gets really upset"],
        answer: "Two more grow back"
    },
    {
        Q: "Who is Percy Jackson's dad?",
        options: ["Poseidon", "Hercules", "Zeus", "Ares"],
        answer: "Poseidon"
    },
    {
        Q: "Why did Percy's mum marry Gabe Ugliano?",
        options: ["Because she loved him", "Because he's a cool guy", "So his bad smell would protect Percy from monsters", "Because he can speak Greek"],
        answer: "So his bad smell would protect Percy from monsters"
    },
    {
        Q: "What would happen if you looked at Medusa?",
        options: ["You would lose your powers", "You would get really muscly", "SYou would turn into a snake", "You would turn to stone"],
        answer: "You would turn to stone"
    },
    {
        Q: "What's special about Annabeth?",
        options: ["Her mum is Athena", "She's secretly Roman", "She is every boys dream", "Non of the options"],
        answer: "Non of the options"
    },
    {
        Q: "Which of these IS in the Percy Jackson series?",
        options: ["The Son of Neptune", "The Last Olympian", "The Mark Of Athena", "The House Of Hades"],
        answer: "The Last Olympian"
    },
];

let currRunOrder = questions;
// console.log(currRunOrder);
let currFrontCard = document.getElementsByClassName("card1")[0];
// console.log(currFrontCard);
let currBackCard = document.getElementsByClassName("card2")[0];
// console.log(currBackCard);
let optionsForCurrQuestionElement = currFrontCard.querySelectorAll(".option");
console.log(optionsForCurrQuestionElement);
let scoreElement = document.getElementById("score");
let currQuestionElement, questionNo = 0, score = 0;
let currQuestion, optionSelected;

let currNextButton = currFrontCard.querySelector(".next-btn");

document.querySelectorAll(".next-btn").forEach(btn => {
    btn.addEventListener('click', checkAndNext);
});

function toggleCards() {
    currBackCard.classList.toggle("front-front-to-back");
    // currBackCard.classList.toggle("back-back-to-front");

    currFrontCard.classList.toggle("back-back-to-front");
    // currFrontCard.classList.toggle("front-front-to-back");
    
}

let allOptions = document.querySelectorAll(".option");
console.log(allOptions);

allOptions.forEach(function(btn) {
    btn.addEventListener('click', selectedOption);
});

function selectedOption() {
    allOptions.forEach(option => {
        option.classList.remove("selected");
    })

    this.classList.add("selected");
}

function init() {
    questionNo = 0;
    currQuestionElement = currFrontCard.getElementsByClassName("question")[0];
    currQuestion = currRunOrder[questionNo++];
    currQuestionElement.textContent = currQuestion.Q;
    console.log(currQuestionElement);
    let optionNum = 0;
    for(let option of optionsForCurrQuestionElement) {
        option.textContent = currQuestion.options[optionNum++];
    }


}

init();


function checkAndNext() {
    optionSelected = document.querySelector(".selected");
    if(optionSelected === null) {
        alert("Select an option before continuing!");
        return;
    }
    console.log(optionSelected);
    if(optionSelected.textContent === currQuestion.answer) {
        console.log("Found!");
        document.getElementById("score").textContent = ++score;
        changeCards();
        showNextQuestion();
        return;
    } 

    showNextQuestion();
}

function showNextQuestion() {
    if(questionNo === currRunOrder.length) {
        currNextButton.textContent = "DONE!";
        alert("Your Score is " + score);
        init();
        currNextButton.textContent = "NEXT";
    }

    currQuestionElement = currFrontCard.getElementsByClassName("question")[0];
    currQuestion = currRunOrder[questionNo++];
    currQuestionElement.textContent = currQuestion.Q;
    console.log(currQuestionElement);
    let optionNum = 0;
    for(let option of optionsForCurrQuestionElement) {
        option.textContent = currQuestion.options[optionNum++];
    }

    optionSelected.classList.remove("selected");
}

function changeCards() {

}
