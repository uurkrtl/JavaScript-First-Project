//  Created by Ugur Kartal on 14/01/2024

function findFriendlyNumbers(...numbers) {
    let totalDivisor = 0;
    let totalDivisorLoop = 0;

    numbers.forEach(number => {
        totalDivisor = totalDivisorLoop;
        totalDivisorLoop = 0;

        for (let i = 1; i <= number; i++) {
            if (number%i==0) {
                totalDivisorLoop = totalDivisorLoop + i;
            } 
        }
    });

    if (totalDivisor == totalDivisorLoop) {
        console.log(numbers[0] + " and " + numbers[1] + " are friendly")
    }else{
        console.log(numbers[0] + " and " + numbers[1] + " are no friendly")
    }
}

findFriendlyNumbers(220,284)