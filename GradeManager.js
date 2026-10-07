function max(...numbers) {
    let max = -Infinity;
    for (let number of numbers) {
        if (number > max) max = number;
    }
    return max;
}

const prompt = require('prompt-sync')();

// Accepts either a valid number or the command "back" (case-insensitive)
function userInput(message, errorMessage) {
    let input = prompt(message).trim();
    while (input.toLowerCase() != 'back' && (isNaN(input) || input == '')) {
        input = prompt(errorMessage).trim();
    }
    return input.toLowerCase() == 'back' ? 'back' : Number(input);
}
function calcAverage(...numbers) {
    let average = 0;
    for (let i = 0; i < numbers.length; i++) {
        average += numbers[i];
    }
    return average / numbers.length;
}
function highest(...numbers) {
    let max = -Infinity;
    for (let i = 0; i < numbers.length; i++) {
        if (a > max) max = a;
    }
    return max;
}

let array = []; 
let choice = 0;


while (true) {
    console.log("=====Grade Manager=====\n\n\t1. Add Grades\n\t2. Remove Grades\n\t3. Calculate Average\n\t4. Find Highest Grade\n\t5. Print All Grades\n\t6. Exit");
    choice = userInput("\nChoose an option:   ", "Please enter a number from 1-7:   ");

    if (choice == 'back') {
        continue;
    }

    if (choice == 1) {
        let count = userInput("How many grades would you like to add? (or 'back'): ", "Please enter a valid number or 'back': ");
        if (count == 'back') {
            console.log("Returning to menu...");
            continue;
        }

        let cancelled = false;
        for (let i = 0; i < count; i++) {
            let item = prompt(`Enter grade #${i + 1} (or 'back'): `).trim();
            if (item.toLowerCase() == 'back') {
                console.log("Cancelled item entry. Returning to menu...");
                cancelled = true;
                break;
            }
            array.push(item.toLowerCase());
        }
        if (!cancelled) {
            console.log("Updated gradebook:", array);
        }

    } else if (choice == 2) {
        if (array.length == 0) {
            console.log("You haven't put in any grades!");
            continue;
        }

        let rem = prompt("Enter a grade to remove (or 'back'): ").trim();
        if (rem.toLowerCase() == 'back') {
            console.log("Returning to menu...");
            continue;
        }

        let index = array.indexOf(rem.toLowerCase());
        if (index > -1) {
            array.splice(index, 1);
            console.log(`Removed "${rem.toLowerCase()}".`);
        } else {
            console.log(`"${rem.toLowerCase()}" was not found in your gradebook.`);
        }

    } else if (choice == 3) {
        if (array.length == 0) {
            console.log("You haven't put in any grades!");
            continue;
        }
        console.log(`The average of your inputted grades is ${calcAverage(...array)}`);
    } else if (choice == 4) {
        if (array.length == 0) {
            console.log("You haven't put in any grades!");
        }
    } else if (choice == 5) {
        if (array.length == 0) {
            console.log("Your gradebook is empty.");
        } else {
            console.log("\n--- Current List ---");
            for (let i = 0; i < array.length; i++) console.log(`${i + 1}. ${array[i]}`);
            console.log("--------------------");
        }
    } else if (choice == 6) {
        console.log("Exiting program. Goodbye!");
        break;
    } else {
        console.log("Invalid option. Please choose a number from 1 to 7.");
    }
}