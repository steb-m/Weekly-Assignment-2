const prompt = require('prompt-sync')();

function max(...numbers) {
    let maxVal = -Infinity;
    for (const number of numbers) {
        if (number > maxVal) maxVal = number; 
    }
    return maxVal;
}

function calcAverage(...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) total += numbers[i];
    return total / numbers.length;
}

function userInput(message, errorMessage) {
let input = prompt(message).trim();
while (input.toLowerCase() !== 'back' && (isNaN(input) || input === '')) {
    input = prompt(errorMessage).trim(); 
}
return input.toLowerCase() === 'back' ? 'back' : Number(input);
}

let array = [];
let choice = 0;

while (true) {
    console.log("\n===== Grade Manager =====\n\t1. Add Grades\n\t2. Remove Grades\n\t3. Calculate Average\n\t4. Find Highest Grade\n\t5. Print All Grades\n\t6. Exit");

    choice = userInput("\nChoose an option: ", "Please enter a valid option (1-6): ");

    if (choice === 'back') {
        continue;
    }

    if (choice === 1) {
        let count = userInput("How many grades would you like to add? (or 'back'): ", "Please enter a valid number or 'back': ");

        if (count === 'back') {
            console.log("Returning to menu...");
            continue;
        }

        let cancelled = false;
        for (let i = 0; i < count; i++) {
            let grade = userInput(`Enter grade #${i + 1} (or 'back'): `, "Please enter a valid numeric grade or 'back': ");

            if (grade === 'back') {
                console.log("Cancelled item entry. Returning to menu...");
                cancelled = true;
                break;
            }
            array.push(grade);
        }

        if (!cancelled) {
            console.log("Updated gradebook:", array);
        }

    } else if (choice === 2) {
        if (array.length === 0) {
            console.log("You haven't put in any grades!");
            continue;
        }

        let rem = userInput("Enter a grade to remove (or 'back'): ", "Please enter a valid number or 'back': ");

        if (rem === 'back') {
            console.log("Returning to menu...");
            continue;
        }
        if (array.indexOf(rem) > -1) {
            array.splice(index, 1);
            console.log(`Removed grade ${rem}.`);
        } else {
            console.log(`${rem} was not found in your gradebook.`);
        }

    } else if (choice === 3) {
        if (array.length === 0) {
            console.log("You haven't put in any grades!");
            continue;
        }
        console.log(`The average of your inputted grades is ${calcAverage(...array).toFixed(2)}`);

    } else if (choice === 4) {
        if (array.length === 0) {
            console.log("You haven't put in any grades!");
            continue;
        }
        console.log(`The highest grade in your gradebook is ${max(...array)}`);

    } else if (choice === 5) {
        if (array.length === 0) {
            console.log("Your gradebook is empty.");
        } else {
            console.log("\n--- Current List ---");
            for (let i = 0; i < array.length; i++) {
                    console.log(`${i + 1}. ${array[i]}`);
            }
            console.log("--------------------");
        }

    } else if (choice === 6) {
        console.log("Exiting program. Goodbye!");
        break;

    } else {
        console.log("Invalid option. Please choose a number from 1 to 6.");
    }
}