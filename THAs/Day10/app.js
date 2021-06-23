// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

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

cards.forEach(card => {
    card.addEventListener('click', flipCard);
});

function flipCard() {
    if(this.classList.contains("is-flipped")) {
        this.classList.remove("is-flipped");
    } else {
        this.classList.add("is-flipped");
        // cardsFlipped++;
        flippedElements.push(this);
    }

    if(flippedElements.length > 2) {
        this.classList.remove("is-flipped");
    }

    if(flippedElements.length === 2) {
        setTimeout(checkCards, 500);
    }
}

// document.body.addEventListener('click', () => {
//     if(flippedElements.length == 2) {
//         console.log(flippedElements.length);
//         checkCards();
//     }
// })

function checkCards() {
    let card1 = flippedElements[0];
    let card2 = flippedElements[1];
    if (card1.innerHTML === card2.innerHTML) {
            // removeEventListener(card1);
            // removeEventListener(card2);
            card1.classList.add("found");
            card2.classList.add("found");
            flippedElements = [];
            // cardsFlipped = 0;
    } else {
        card1.classList.remove("is-flipped");
        card2.classList.remove("is-flipped");
        flippedElements = [];
        // cardsFlipped = 0;
    }
}

removeClick.forEach(card => {
    card.removeEventListener('click', removeListener);
})

function removeListener() {
        // card.classList.add("hide");
        // card.classList.remove("is-flipped");
        // this.querySelector(".front").style.bgcolor = "green";
        
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