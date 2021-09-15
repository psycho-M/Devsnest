let test1 = [1, 2, 3, 4, 5, 6, 7];
let test2 = [["apple", 2, 3], "Devsmest", "Baba", "ki", "Jao"];

function first(val, length = 1) {

    let temp = val.slice(0, length);

    // if(temp instanceof Object) {
    //     temp.forEach(function(value) {
    //         console.log(value);
    //     });
    // }

    console.log("Array is: ", temp);
}