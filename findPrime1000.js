//  Created by Ugur Kartal on 14/01/2024

function findPrime1000() {
    for (let i = 2; i <= 1000; i++) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i%j==0) {
                isPrime = false;
            }
        }
        if (isPrime) {
            console.log(i + " is prime")
        }
    }
}

findPrime1000()