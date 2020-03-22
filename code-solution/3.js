/*
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?
*/

function getPrimeFactors(n) {
	let primeFactors = [];
	while (n%2==0) {
        primeFactors.push(2);
        n /= 2;
    }

    for (let i = 3; i <= Math.sqrt(n); i+= 2) {
        while (n%i == 0) {
            primeFactors.push(i);
            n /= i;
        }
    }

    if (n > 2) {
        primeFactors.push(n);
    }

    return primeFactors;				
}					

const number = 600851475143;
const primeFactors = getPrimeFactors(number);

largestPrimeFactor = primeFactors[primeFactors.length -1];

console.log(largestPrimeFactor);			