export {};

// class App {
//     printLol() {
//         console.log('lol');
//     }
// };

// const app: App = new App();

// app.printLol();

// let username : string | null = "";

// console.log(username);

// let door: string = 'open';
// door = "none";

// type Door = 'open' | 'closed';

// let door: Door = 'open';
// door = 'none'; //not possible, because of custom data type

// let a: any; //any data type can be assigned
// a = 10;
// a= false;
// a = 'af';
// a = {};

function add(a: number, b: number): number {
    return a + b;
}

function printHello() : string {
    return "Hello";
    // return 1; //this is not allowed
}

console.log(add(1, 2));
console.log( printHello());
