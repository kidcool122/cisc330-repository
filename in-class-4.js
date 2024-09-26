console.log("in-class-4.js loaded!");
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (number % 2 === 0) {
        console.log(`${number} is even!`);
    } else {
        console.log(`${number} is odd!`);
    }
}
