/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.						
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?				
*/

function evenlyDivisible(number, last) {						
	for(let i = 1; i<= last; i++) {				
		if(number % i !== 0) {				
			return false;					
		}		
	}					
	return true;
}

let cont = 20;

while(true){
    if(evenlyDivisible(cont, 20)) {
        break;
    }
    cont ++;
}

console.log(cont);