//  Created by Ugur Kartal on 14/01/2024

function findPerfectNumber() {
    let totalDivisor = 0;
    for (let i = 6; i <= 1000; i++) {
        for (let j = 1; j <= i; j++) {
            if(i%j==0){
                totalDivisor = totalDivisor + j;
            }
        }
        if(i*2==totalDivisor){
            console.log(i + " is perfect number")
        }
        totalDivisor = 0;
    }
}

findPerfectNumber();