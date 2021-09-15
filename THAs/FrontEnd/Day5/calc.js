//function to add input to input area
function display(val) {

    if(val == "del") {
        let origVal = document.getElementById("display").value;
        let newVal = origVal.slice(0, -1);
        document.getElementById("display").value = newVal;
        return;
    }

    document.getElementById("display").value += val;
}

function reset() {
    document.getElementById("display").value = "";
}

function solve() {
    let input = document.getElementById("display").value;
    let result = eval(input);
    document.getElementById("display").value = result;
}