let student = {
    name: "Tera Naam",
    sclass: "XX",
    rollno: 99
};

console.log(Object.getOwnPropertyNames(student));

let arr = Object.getOwnPropertyNames(student);

arr.forEach(function(propertyName) {
    console.log(propertyName + ",")
});
