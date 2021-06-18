let patterArray = [304, 284, 264, 244, 224, 204, 184, 164, 144, 124, 104, 84, 85, 106, 127, 148, 169, 190, 191, 172, 153, 134, 115, 96, 97, 117, 137, 157, 177, 197, 217, 237, 257, 277, 297, 317];

for(let i = 1; i <= 400; i++) {
    let newBox;
    if(patterArray.includes(i)) {
        newBox = `<div id="box${i}" class="box changeColor"></div>`
    } else {
        newBox = `<div id="box${i}" class="box"></div>`;
    }
    

    document.querySelector(".frame").innerHTML += newBox; 
}

let boxes = document.querySelectorAll(".box");

boxes.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('changeColor');
    });
});

