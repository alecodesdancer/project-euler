/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
What is the 10 001st prime number?
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

let primes = [];
let cont = 2;
let max = 10001
while(primes.length < max ) {
    if(isPrime(cont)) {
        primes.push(cont);
    }
    cont ++;
}

const lastPrime = primes[primes.length - 1];

console.log(lastPrime);
