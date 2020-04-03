/*
    The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
    Find the sum of all the primes below two million.
*/

function isPrime(number) {
    if(number === 2){
        return true;
    }

    if(number === 1 || number % 2 === 0){
        return false;
    }

    const sqrt = Math.ceil(Math.sqrt(number));
    for(var i = 3; i <= sqrt; i += 2){
        if(number % i === 0){
            return false;
        }
    }
    return true;
}

let sum = 0;
const max = 2000000;
for(let i = 2; i < max; i++) {
    if(isPrime(i)){
        sum += i;
    }
}

console.log(sum);
