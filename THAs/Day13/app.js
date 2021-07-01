let searchInput = document.getElementById("search-input");
let searchBtn = document.getElementById("search-btn");
let resultSpace = document.getElementById("search-result");
// let currGifNumber = 6;


searchBtn.addEventListener('click', searchGif);
searchInput.addEventListener('keypress', function (event) {
    if (event.key === "Enter") {
        searchGif();
    }
});

function searchGif() {
    let input = searchInput.value;
    if (input.length === 0) {
        return;
    }
    resultSpace.innerHTML = "";
    addGifs(input);
    console.log(input);
    searchInput.value = "";
}

function addGifs(input) {
    let gifUrl = `https://api.giphy.com/v1/gifs/search?api_key=3ofpTs9JE0Uz2O6QssbXdD3YT2Q1uVSZ&q=` + input + `&limit=30&offset=0&rating=g&lang=en`;

    fetch(gifUrl)
        .then(response => response.json())
        .then(function (data) {
            let images = data.data;
            console.log(images);
            for (let image of images) {
                let currGifUrl = image.images.downsized.url;
                console.log(currGifUrl);
                let currGifEl = document.createElement("img");
                currGifEl.src = currGifUrl;
                currGifEl.classList.add("gif");
                resultSpace.appendChild(currGifEl);
                console.log(currGifEl);
            }
            // console.log(data);
            currGifNumber = 6;
        });
}


function addImage() {

}