
let test1 = "Devsnest Baba ki Jai";
let test2 = ["Devsmest", "Baba", "ki", "Jao"];

function array_Clone(val) {
    if(Array.isArray(val)) {
        return val.slice(0, val.length);
    } else {
        return "not an array"
    }
}