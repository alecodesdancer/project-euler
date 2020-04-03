/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.
There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/

function pythagoreanTriplet(number) {
    let a = 0, b=0, c=0;
    let find = false;

    for(a = 1; a<number/3; a++) {
        for(b= 1; b< number/2; b++) {
            c = number - a - b;
            if(a**2 + b**2 ==  c**2) {
                find = true;
                break;
            }
        }
        if(find){
            break;
        }
    }
    
    return {
        a,
        b,
        c
    }
}	

const { a, b , c } = pythagoreanTriplet(1000);
const  product = a * b * c;	

console.log(product);
	