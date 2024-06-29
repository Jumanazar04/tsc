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

user(user_1)