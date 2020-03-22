/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.						
Find the largest palindrome made from the product of two 3-digit numbers.
*/

function isPalindrome(number) {
    const reverse = String(number).split('').reverse().join('');
    return number === Number(reverse);					
}					

function largestPalindrome() {
    let hightest = 0;
    let largest = 999;
    
    for(let i = largest; i > 99; i --) {
        for(let j = largest; j > 99; j --) {
            const product = i * j;
            if(isPalindrome(product )&& product > hightest) {
                hightest = product;					
            }
        }
    };
    return hightest;					
}

const result = largestPalindrome();

console.log(result);


