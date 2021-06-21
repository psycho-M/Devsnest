let seats = document.querySelectorAll(".seat");


let bookedSeatsNumber = document.querySelectorAll(".booked-seat").length;
let remainingSeatsNumber = seats.length - bookedSeatsNumber;

let bookedSeatsValue = document.querySelector(".booked-seats-value");
let remainingSeatsValue = document.querySelector(".remaining-seats-value");


bookedSeatsValue.textContent = bookedSeatsNumber;
remainingSeatsValue.textContent = remainingSeatsNumber;


seats.forEach(item => {
    item.addEventListener('click', () => {
        if(item.classList.contains("booked-seat")) {
            item.classList.remove("booked-seat");
            remainingSeatsValue = ++remainingSeatsNumber;
            bookedSeatsValue.textContent = --bookedSeatsNumber;
        } else {
            item.classList.add("booked-seat");
            remainingSeatsValue = --remainingSeatsNumber;
            bookedSeatsValue.textContent = ++bookedSeatsNumber;
        }
    })
})


