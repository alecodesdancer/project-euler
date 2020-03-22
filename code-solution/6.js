/*
The sum of the squares of the first ten natural numbers is, 385
The square of the sum of the first ten natural numbers is,(1+2+...+10)2=552=3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025−385=2640
3025 − 385 = 2640
Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.			
*/
const lastNum = 100
let sumOfSquares = 0;
let squareOfSum = 0;

for(i = 1; i <= lastNum; i++) {
	sumOfSquares += i ** 2;
  squareOfSum += i;
}
squareOfSum = squareOfSum ** 2;

const difference = squareOfSum - sumOfSquares;
console.log(difference);