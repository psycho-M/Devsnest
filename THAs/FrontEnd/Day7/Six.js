let library = [
    {
        author: "Bill Gates",
        title: "The Road Ahead",
        libraryID: 1254
    },
    {
        author: "Steve Jobs",
        title: "Walter Isaacson",
        libraryID: 4264
    },
    {
        author: "Suzanne Collins",
        title: "Mockingjay: The Final Book of The Humger Games",
        libraryID: 3245
    }
]

library.forEach(item => {
    console.log(item.author + "\n" + item.title + "\n" + item.libraryID)
})

// console.log(library);
console.log("After Sort: ");
library.sort(function(a, b) {
    return b.libraryID - a.libraryID;
});
library.forEach(item => {
    console.log(item.author + "\n" + item.title + "\n" + item.libraryID)
})