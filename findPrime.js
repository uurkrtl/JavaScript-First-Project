//  Created by Ugur Kartal on 14/01/2024

function findPrime(...numbers) {
    numbers.forEach(number => {
        let isPrime = true;

        for (let j = 2; j < number; j++) {
            if (number%j==0) {
                isPrime = false;
                console.log(number + " is no Prime")
                break;
            }
        }

        if(isPrime){
            console.log(number + " is Prime")
        }
    });
}

findPrime(3,5,9,1);