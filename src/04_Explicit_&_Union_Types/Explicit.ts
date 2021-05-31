//explicit types

let character : string;
let age : number;
let isSignIn : boolean;

character = "Mindula";
age = 21;
isSignIn = true;

//Arrays

let Iam : (string|number|boolean)[] = [];
Iam.push('mindula');
Iam.push(20);
Iam.push(false);
console.log(Iam);

//Objects
let me : object;
me = {
    name : 'Mindula',
    age : 21
};

let me1 : {
    name : string,
    age : number
}
me1 = {
    name : 'Dilthushan',
    age : 21
}

console.log(me);
console.log(me1);