//Boolean
let isDone: boolean = false;

//Numbers
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
// @ts-ignore
let big: bigint = 100n;

//String
let color: string = "blue";
color = 'red';

let fullName: string = 'Mindula Dilthushan';
let age: number = 21;
let sentence: string = `Hello, My Name is ${fullName} I'll be ${age + 1} years old next Year.`;
console.log("sentence : "+sentence);


let sentences : string =
    "Hello, My Name is " +
    fullName +
    ".\n\n" +
    "I'll be " +
    (age + 1) +
    " years old next Year.";
console.log("sentences : "+sentences);


//Array
let list1: number[] = [1, 2, 3];
console.log("List1 : "+list1);

let list2: Array<number> = [1, 2, 3];
console.log("List2 :"+list2);

// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10];