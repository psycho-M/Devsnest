// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let numberOfMoves = 0;
let assignedBlocks = [];

function getRandom(max) {
    // let random = Math.random();
    // console.log(random);
    // console.log(random * max);
    return Math.floor(Math.random() * max) + 1;
}

for (i = 1; i <= 8; i++) {
    addElementToBlock(i);
    addElementToBlock(i);
    // let random = getRandom(i);
    // if(!assignedBlocks.includes(random)) {
    //     document.getElementById('card' + random).innerHTML = '<span class = "number">' + i + '</span>';
    //     assignedBlocks.push(random);
    // }
}

function addElementToBlock(number) {
    while (true) {
        let random = getRandom(16);
        // console.log("Random: " + random + "\ncurrNumber: " + number);
        if (!assignedBlocks.includes(random)) {
            document.getElementById('card' + random).querySelector(".front").innerHTML = '<span class = "number">' + number + '</span>';
            assignedBlocks.push(random);
            // console.log(assignedBlocks);
            break;
        }

    }
}

let cards = document.querySelectorAll(".card");
let cardsFlipped = 0;
let flippedElements = [];
let removeClick = [];
let cardsFound = [];

cards.forEach(card => {
    card.addEventListener('click', flipCard);
});

function flipCard() {

    if(cardsFound.includes(this)) {
        return;
    }

    if(flippedElements.includes(this)) {

    } // else if(this.classList.contains("is-flipped")) {
    //     this.classList.remove("is-flipped");
    //     flippedElements.pop(this);
    //     console.log(flippedElements);
    //}
    else {
        this.classList.add("is-flipped");
        // cardsFlipped++;
        flippedElements.push(this);
        console.log(flippedElements);
    }

    if(flippedElements.length > 2) {
        this.classList.remove("is-flipped");
    }

    if(flippedElements.length === 2) {
        setTimeout(checkCards, 400);
    }
}

// document.body.addEventListener('click', () => {
//     if(flippedElements.length == 2) {
//         console.log(flippedElements.length);
//         checkCards();
//     }
// })

function checkCards() {
    document.querySelector(".moves").textContent =  ++numberOfMoves;
    let card1 = flippedElements[0];
    let card2 = flippedElements[1];
    if (card1.innerHTML === card2.innerHTML) {
            // removeEventListener(card1);
            // removeEventListener(card2);
            cardsFound.push(card1);
            cardsFound.push(card2);
            if(cardsFound.length === 16) {
                document.getElementById("game-end").classList.add("game-won");
            }
            console.log(cardsFound);

            card1.getElementsByClassName("front")[0].classList.add("found");
            card2.getElementsByClassName("front")[0].classList.add("found");


            flippedElements = [];
            // cardsFlipped = 0;
    } else {
        card1.classList.remove("is-flipped");
        card2.classList.remove("is-flipped");
        flippedElements = [];
        // cardsFlipped = 0;
    }
}

// while(true) {
//     let flippedElements = document.querySelectorAll(".is-flipped");
//     if(flippedElements.length < 2) {
//         continue;
//     } else {
//         let first = flippedElements[0];
//         let second = flippedElements[1];
//         if(Object.is(first.getElementsByTagName("span"), second.getElementsByTagName("span"))) {
//             first.removeEventListener('click', function() {
//                 first.style.background = second.style.background = "green";
//             })
//         }
//     }
// }