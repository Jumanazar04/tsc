// Slaydda berilgan masalalar
// Tuple types
let ourTuple: [number, string, number];
ourTuple = [20, 'John', 2004];

// Optional types
function combine(a: number, b?:number): number{
    return a + (b ? b: 0)
}

combine(12121, 32323);

// enum types
enum Kunlar{
    dushanba,
    seshanba,
    chorshanba,
    payshanba,
    juma,
    shanba,
    yakshanba
}

console.log(Kunlar.juma);

// union type
let son: number | string;
son = 120;
son = '120';

let isMarried: boolean | string;

isMarried = true;
isMarried = 'true';

// void
function logMessege(messege: string): void{
    console.log(messege);
}

console.log('Some log messeges');


