// <--------------------------------------------------- Task-1 -------------------------------------------->
// <-------------------- a. impilicit-type -------------------->
let a: string = "Hello";
let b: number = 20;
let c: boolean = true;
let d: undefined = undefined;
let e: null = null;
let any : any = false;
let array: string[] = ['Hi', 'Hello'];

// <-------------------- b. explicit-type -------------------->
let a_1 = "Hello";
let b_1 = 20;
let c_1 = true;
let d_1 = undefined;
let e_1 = null;
let any_1  = false;
let array_1 = ['Hi', 'Hello'];


// <--------------------------------------------------- Task-2 -------------------------------------------->

interface User  {
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    isMarried: boolean;
}

let User_1: User = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    email: 'john@gmail.com',
    isMarried: false,
}

let User_2: User = {
    firstName: 'Tom',
    lastName: 'Harry',
    age: 23,
    email: 'tom@gmail.com',
    isMarried: true,
}

let User_3: User = {
    firstName: 'Jane',
    lastName: 'Javk',
    age: 25,
    email: 'jane@gmail.com',
    isMarried: true,
}

// <--------------------------------------------------- Task-3 -------------------------------------------->

function sum(a: number, b:number, c:number): number {
    let result = (a + b)*c ;
    return result;
}

console.log(sum(12, 23, 10));

function Hello(str1: string, str2: string): string{
    return str1 + ' ' + str2;
}

console.log(Hello('Hello', 'Everyone'));

function myArr(arr: object): any{
    return `My name is ${User_1.firstName}. My age ${User_1.age}`
}

