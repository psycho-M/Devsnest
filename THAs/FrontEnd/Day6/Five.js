


let test1 = [1, 2, 3, 4, 5, 6, 7];
let test2 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];


function maxFrequency(arr) {
    if(!Array.isArray(arr)) {
        console.log("not an array");
        return;
    }
    arr.sort();
    // console.log(arr);
    let prev = arr[0], count = 0;
    let maxFreq = 0, maxFreqElement;
    for(let i = 0; i <= arr.length; i++) {
        if(arr[i] === prev) {
            count++;
            // console.log("Curr Element in check " + arr[i]);
        } else if(arr[i] !== prev) {
            if(maxFreq < count) {
                // console.log("prev element " + prev);
                // console.log("Current Element " + arr[i]);
                maxFreq = count;
                maxFreqElement = prev;
                // console.log("Current max Frequency", maxFreq);
                // console.log("Current max = " + maxFreqElement);
            }
            count = 1;
        }
        prev = arr[i];
    }

    console.log(maxFreqElement + " ( " + maxFreq + " times )");

}