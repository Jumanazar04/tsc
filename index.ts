// HOMEWORK
// tuple types
let tupleType: [number, string, boolean];
tupleType = [20, 'hello', true];

// optional types && interfaceda optional type
interface User {
    name: string
    age: number
    email: string
    adress: {
        country: string
        city: string
        zipCode?: string
    }
}

function user(user: User): void{
    console.log(`My name ${user.name}, my age ${user.age}, my email ${user.email}`);

    console.log(
        user.adress?.city + user.adress?.country
    );

    console.log(user.adress.zipCode);
}

let user_1: User = {
    name: 'John',
    age: 21,
    email: "ok",
    adress: {
        city: 'city',
        country: 'country'
    }
}

// enum type

enum Tomonlar1{
    shimol,
    janub,
    sharq,
    garb
}

console.log(Tomonlar1.garb);

enum Tomonlar2{
    shimol = 12,
    janub,
    sharq,
    garb
}

console.log(Tomonlar1.sharq);

enum Tomonlar3{
    shimol = 'shimol',
    janub = 'janub',
    sharq = 'sharq',
    garb = 'garb'
}

console.log(Tomonlar1.janub);

enum Tomonlar4{
    shimol = 14,
    janub = 20,
    sharq = 10,
    garb = 42
}

console.log(Tomonlar1.garb);

// union types
let age: number | string;
age = '10';
age = 10;
console.log(age);

function res(a: boolean | string){
    return a
}

res(true);

// void
function voidLog(log): void{
    console.log(log);
}

voidLog('Some Words')

// alies type
type LaptopType = string;
type NameType = boolean;
type DateType = number;

type User12 = {
    name: LaptopType,
    isMarried: NameType,
    age: DateType,
}

let person: User12 = {
    name: 'Hello',
    isMarried: true,
    age: 20
}

// interfaceda vorislik, extends

interface person {
    name: string,
    age: number,
    ismarried: boolean
}

interface student extends person {
    id: number,
    isAdmin: boolean
}

let user123: student = {
    name: 'John',
    age: 20,
    ismarried: true,
    id: 8815,
    isAdmin: false
}