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
    let giphyGifUrl = `https://api.giphy.com/v1/gifs/search?api_key=3ofpTs9JE0Uz2O6QssbXdD3YT2Q1uVSZ&q=` + input + `&limit=30&offset=0&rating=g&lang=en`;
    let tenorGifUrl = "https://g.tenor.com/v1/search?q=" + input + "&key=86KCD8X513JO&limit=30";
    // fetchFromGiphy(giphyGifUrl);
    fetchFromTenor(tenorGifUrl);
}


function fetchFromGiphy(giphyGifUrl) {
    fetch(giphyGifUrl)
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
            // currGifNumber = 6;
        })
        .catch(() => {
            alert("not found!");
        });
}

function fetchFromTenor(tenorGifUrl) {
    fetch(tenorGifUrl)
        .then(response => response.json())
        .then(function (data) {
            let gifs = data.results;
            console.log(gifs);
            for (let gif of gifs) {
                let currGifUrl = gif.media[0].gif.url;
                console.log(currGifUrl);
                let currGifEl = document.createElement("img");
                currGifEl.src = currGifUrl;
                currGifEl.classList.add("gif");
                resultSpace.appendChild(currGifEl);
                console.log(currGifEl);
            }
            // console.log(data);
            // currGifNumber = 6;
        })
        .catch(() => {
            alert("not found!");
        });
}

// let input = readLine();
// let tenorGifUrl = "https://g.tenor.com/v1/search?q=" + input + "&key=86KCD8X513JO&limit=30";

// fetch(tenorGifUrl)
// .then(response => response.json())
// .then(returned => {
//     let gifs = returned.results;
//     console.log("Success:", gifs);
//     let gif1 = gifs[0];
//     let gif1Url = gif1.media[0].tinygif.url;
//     console.log(gif1Url);
    
// });