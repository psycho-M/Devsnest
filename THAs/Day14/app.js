let body = document.querySelector("body");
let container = document.querySelector(".container");
let cursor = document.querySelector(".cursor");
let burger = document.querySelector(".hamburger");
let lines = document.querySelectorAll(".line");

body.addEventListener("mouseenter", (event) => {
  console.log(event);
  cursor.style.background = "rgb(190, 124, 124)"
});

body.addEventListener("mousemove", (event) => {
  let x = event.offsetX;
  let y = event.offsetY;
  x -= cursor.offsetWidth / 2;
  y -= cursor.offsetHeight / 2;

  cursor.style.left = x + 'px';
  cursor.style.top = y + 'px';
});

body.addEventListener("oncontextmenu", () => {
  body.classList.toggle("white-bg");
})


body.addEventListener("dblclick", (event) => {
  console.log(event);
  body.classList.toggle("white-bg");
})

// container.addEventListener("mouseenter", (event) => {
//   console.log(event);
//   cursor.style.background = "rgb(6, 29, 107)";
// })

// container.addEventListener("mousemove", (event) => {
//   console.log("mousemove", event)
//   let x = event.offsetX
//   let y = event.offsetY
//   x -= cursor.offsetWidth / 2
//   y -= cursor.offsetHeight / 2

//   cursor.style.left = `${x}px`
//   cursor.style.top = `${y}px`
// })

// container.addEventListener("mouseout", (event) => {
//   cursor.style.display = "none"
// })

burger.addEventListener('click', () => {
  burger.classList.toggle("open");
})