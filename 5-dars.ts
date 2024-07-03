// Task-3

type myFunctionType = (key: string) => string;


// function type berish
function logger(callback: myFunctionType, callbackParams: string){
    const res = callback(callbackParams);
    console.log(res);
}

//functionni o'ziga type berish
function showLogMassege(key: string) :string{
    const data = key
    return data || '';
}

function convert(value: string): string{
    return value;
}

logger(showLogMassege, 'token');
logger(convert, "Salom");


// generic type
function log<T, S, R>(a: T, b: S, c: S): T{
    console.log( b, c);
    return a ;
}

log<string, number, any>('heloo', 20, 2004);
log<number, string, boolean>(20, 'hi', 'double ho')