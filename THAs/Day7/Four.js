let library = [
    {
        author: "Bill Gates",
        title: "The Road Ahead",
        readingStatus: true
    },
    {
        author: "Steve Jobs",
        title: "Walter Isaacson",
        readingStatus: true
    },
    {
        author: "Suzanne Collins",
        title: "Mockingjay: The Final Book of The Humger Games",
        readingStatus: false
    }
]

library.forEach(function(bookStatus, index) {
    console.log(index+1 + ". \nTitle: " + bookStatus.title + "\nAuthor: " + bookStatus.author + "\nStarus: " + bookStatus.readingStatus);

    // console.log(index + ". ")
    // for(status in bookStatus) {
    //     console.log()
    // }
})