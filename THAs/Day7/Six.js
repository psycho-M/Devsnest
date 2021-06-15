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

console.log(library);
console.log("After Sort: ");
console.log(library.sort((a, b) => a.libraryID - b.libraryID));