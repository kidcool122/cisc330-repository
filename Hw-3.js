// Question 6
const cats = [
    { name: 'Charlie', adoptionStatus: 'available' },
    { name: 'Lily', adoptionStatus: 'not-available' },
    { name: 'Coco', adoptionStatus: 'available' },
    { name: 'Oreo', adoptionStatus: 'not-available' },
    { name: 'Luna', adoptionStatus: 'available' },
    { name: 'Milo', adoptionStatus: 'available' },
    { name: 'Lola', adoptionStatus: 'not-available' },
    { name: 'Leo', adoptionStatus: 'available' },
    { name: 'Willow', adoptionStatus: 'available' },
    { name: 'Bella', adoptionStatus: 'not-available' },
    { name: 'Max', adoptionStatus: 'available' },
    { name: 'Cleo', adoptionStatus: 'available' },
    { name: 'Lucy', adoptionStatus: 'not-available' },
    { name: 'Daisy', adoptionStatus: 'available' },
];

const cat = { name: "Pinecone", age: 13, type: 'Munchkin', cuteness: 9001 };

// Question 7
const randomNumber = Math.random() * 10;
const result = randomNumber > 5 ? "greater than five!" : "less than five!";
console.log(`The random number is: ${randomNumber}`);
console.log(`Result: ${result}`);

// Question 8
for (const key in cat) {
    if (cat.hasOwnProperty(key)) {
        console.log(`${key}: ${cat[key]}`);
    }
}

// Question 9:
if (1 == '1') {
    console.log("First statement is true: 1 is loosely equal to '1'.");
}
if (1 === '1') {
    console.log("Second statement is true: 1 is strictly equal to '1'.");
} else {
    console.log("Second statement is false: 1 is not strictly equal to '1'.");
}

// Question 10 
const cuteCats = cats.map(cat => `${cat.name} is cute!`);
console.log(cuteCats);
